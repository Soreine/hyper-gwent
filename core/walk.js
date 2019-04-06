// @flow
/* global window, document */

import findAllMatches from './findAllMatches';
import replaceMatches from './replaceMatches';
import { attachTooltip } from './tooltip';
import createWalker from './createWalker';
import type { ExtensionAssets, Card, Dictionary } from './types';

import { GWENT_HIGHLIGHTED_CLASSNAME, CARD_ID_ATTRIBUTE } from './CONSTANTS';

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

    // Find and highlight card names in texts
    nodesToInspect.forEach(node => {
        const matches = findAllMatches(dictionary, node.nodeValue);
        if (matches.length === 0) {
            return;
        }

        const span = document.createElement('span');
        span.innerHTML = replaceMatches(
            node.nodeValue,
            matches,
            match =>
                `<span class="${GWENT_HIGHLIGHTED_CLASSNAME}" ${CARD_ID_ATTRIBUTE}="${
                    match.entryValue
                }" ${
                    shouldUnderline ? 'style="border-bottom: 1px dashed"' : ''
                }>${node.nodeValue.slice(match.start, match.end)}</span>`
        );

        if (node.parentNode) {
            node.parentNode.replaceChild(span, node);
        }
    });

    // Add card tooltips to the DOM
    const highlights = document.getElementsByClassName(
        GWENT_HIGHLIGHTED_CLASSNAME
    );
    for (let i = 0; i < highlights.length; i += 1) {
        const highlight = highlights[i];
        const cardId: CardID = (highlight.getAttribute(CARD_ID_ATTRIBUTE): any);
        const card = cards[cardId];

        attachTooltip(card, highlight, assets, { lowQualityArt });
    }
}

function findNodesToInspect(target: Node) {
    const nodes = [];
    const walker = createWalker(window, target);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        nodes.push(node);
    }
    return nodes;
}

export default walk;
