// @flow
/* @jsx createElement */
/* global document */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import findAllMatches from './findAllMatches';
import splitAndMapMatches from './splitAndMapMatches';
import { attachTooltip } from './tooltip';
import createWalker from './createWalker';
import type { ExtensionAssets, Card, Dictionary } from './types';
import { shouldIgnore } from './acceptNode';

import { HG_HIGHLIGHT_ATTRIBUTE, CARD_ID_ATTRIBUTE } from './CONSTANTS';

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
    const textsToInspect = findTextNodesToInspect(target);

    // All new highlights made will be pushed here, so that we can
    // create the associated tooltip for them
    const newHighlights: HTMLElement[] = [];

    // Find and highlight card names in texts
    textsToInspect.forEach(textNode => {
        const text = textNode.nodeValue;
        const matches = findAllMatches(dictionary, text);
        if (matches.length === 0) {
            return;
        }

        // The text node will be replaced with this container
        const containerChildren = splitAndMapMatches(text, matches, {
            mapNonMatch(nonMatchedText: string) {
                return document.createTextNode(nonMatchedText);
            },
            mapMatch(match, matchedText) {
                const attrs = {
                    [HG_HIGHLIGHT_ATTRIBUTE]: true,
                    [CARD_ID_ATTRIBUTE]: match.entryValue,
                    style: shouldUnderline ? 'border-bottom: 1px dashed' : ''
                };

                const highlight = <span {...attrs}>{matchedText}</span>;
                newHighlights.push(highlight);
                return highlight;
            }
        });

        const container = <span>{containerChildren}</span>;

        if (textNode.parentNode) {
            textNode.parentNode.replaceChild(container, textNode);
        }
    });

    // Add card tooltips to the DOM
    newHighlights.forEach(highlight => {
        const cardId: CardID = (highlight.getAttribute(CARD_ID_ATTRIBUTE): any);
        const card = cards[cardId];

        attachTooltip(card, highlight, assets, { lowQualityArt });
    });
}

function findTextNodesToInspect(target: Node): Node[] {
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
