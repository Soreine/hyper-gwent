// @flow
/* global window, document */

import findAllMatches from './findAllMatches';
import replaceMatches from './replaceMatches';
import { attachTooltip } from './tooltip';
import { CARDS, DICTIONARY } from './data';
import createWalker from './createWalker';
import type { ExtensionAssets, Card, Dictionary } from './types';

const CLASSNAME = 'hyper-gwent-card-highlight';
const CARD_ID_ATTRIBUTE = 'data-card-id';

// Walk the document and highlight cards
function walk(
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
    { shouldUnderline = true }: { shouldUnderline?: boolean } = {}
) {
    // Find and highlight card names in texts
    forEachNodes(node => {
        const matches = findAllMatches(DICTIONARY, node.nodeValue);
        if (matches.length === 0) {
            return;
        }

        const span = window.document.createElement('span');
        span.innerHTML = replaceMatches(
            node.nodeValue,
            matches,
            match =>
                `<span class="${CLASSNAME}" ${CARD_ID_ATTRIBUTE}="${
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
    const highlights = document.getElementsByClassName(CLASSNAME);
    for (let i = 0; i < highlights.length; i += 1) {
        const highlight = highlights[i];
        const cardId: CardID = (highlight.getAttribute(CARD_ID_ATTRIBUTE): any);
        const card = CARDS[cardId];

        attachTooltip(card, highlight, assets);
    }
}

function forEachNodes(callback) {
    const walker = createWalker();
    while (walker.nextNode()) {
        const node = walker.currentNode;
        callback(node);
    }
}

export default walk;
