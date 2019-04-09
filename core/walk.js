// @flow
/* global document */

import findAllMatches from './findAllMatches';
import replaceMatches from './replaceMatches';
import { attachTooltip } from './tooltip';
import createWalker from './createWalker';
import type { ExtensionAssets, Card, Dictionary } from './types';
import { shouldIgnore } from './acceptNode';

import {
    HG_HIGHLIGHT_CLASSNAME,
    CARD_ID_ATTRIBUTE,
    HG_HIGHLIGHT_ID_ATTRIBUTE
} from './CONSTANTS';

// Unique ID for highlights, to track if they have been tooltipped yet or not.
let lastHighlightId = 0;

// Walk the target HTML element and highlight cards inside it
function walk(
    target: Node,
    {
        assets,
        cards,
        dictionary
    }: {
        assets: ExtensionAssets,
        cards: {
            [CardID]: Card
        },
        dictionary: Dictionary<CardID>
    },
    {
        shouldUnderline = true,
        lowQualityArt = false
    }: { shouldUnderline?: boolean, lowQualityArt?: boolean } = {}
) {
    const nodesToInspect = findNodesToInspect(target);

    // The added highlights will have an ID superior to this one
    const startHighlightId = lastHighlightId;

    // Find and highlight card names in texts
    nodesToInspect.forEach(node => {
        const matches = findAllMatches(dictionary, node.nodeValue);
        if (matches.length === 0) {
            return;
        }

        const span = document.createElement('span');
        span.innerHTML = replaceMatches(node.nodeValue, matches, match => {
            lastHighlightId += 1;

            return `<span class="${HG_HIGHLIGHT_CLASSNAME}" ${HG_HIGHLIGHT_ID_ATTRIBUTE}="${lastHighlightId}" ${CARD_ID_ATTRIBUTE}="${
                match.entryValue
            }" ${
                shouldUnderline ? 'style="border-bottom: 1px dashed"' : ''
            }>${node.nodeValue.slice(match.start, match.end)}</span>`;
        });

        if (node.parentNode) {
            node.parentNode.replaceChild(span, node);
        }
    });

    // Add card tooltips to the DOM
    const allHighlights = document.getElementsByClassName(
        HG_HIGHLIGHT_CLASSNAME
    );

    const newHighlights = (() => {
        const result = [];
        for (let i = 0; i < allHighlights.length; i += 1) {
            const highlight = allHighlights[i];
            const highlightId = parseInt(
                highlight.getAttribute(HG_HIGHLIGHT_ID_ATTRIBUTE) || '0',
                10
            );

            if (highlightId > startHighlightId) {
                result.push(highlight);
            }
        }
        return result;
    })();

    newHighlights.forEach(highlight => {
        const cardId: CardID = (highlight.getAttribute(CARD_ID_ATTRIBUTE): any);
        const card = cards[cardId];

        attachTooltip(card, highlight, assets, { lowQualityArt });
    });
}

function findNodesToInspect(target: Node): Node[] {
    if (shouldIgnore(target)) {
        return [];
    }

    const nodes = [];
    const walker = createWalker(target);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        nodes.push(node);
    }
    return nodes;
}

export default walk;
