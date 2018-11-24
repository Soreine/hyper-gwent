/* global window, document */

import urlParse from 'url-parse';
import findAllMatches from '../core/findAllMatches';
import replaceMatches from '../core/replaceMatches';
import tooltip from '../core/tooltip';
import { CARDS } from '../core/data';
import DICTIONARY from '../core/dictionary';

const CLASSNAME = 'hyper-gwent-card-highlight';
const CARD_NAME_ATTRIBUTE = 'data-card-name';
const GWENTDB_TOOLTIP_ATTR = 'data-tooltip-url';
const GWENTDB_HOSTNAME = 'www.gwentdb.com';

const IGNORED_TAGS = [
    'STYLE',
    'SCRIPT',
    'TEXTAREA',
    'INPUT',
    'SELECT',
    'BUTTON',
    'CANVAS',
    'CODE',
    'EMBED',
    'IFRAME',
    'IMG',
    'META',
    'HEAD',
    'NOSCRIPT',
    'OPTGROUP',
    'OPTION',
    'VIDEO',
    'AUDIO',
    'VAR'
];

// Walk the document and highlight cards
function walk({ shouldUnderline = true } = {}, assets) {
    const HOSTNAME = urlParse(window.location.href).hostname;

    const walker = window.document.createTreeWalker(
        window.document.body,
        window.NodeFilter.SHOW_ELEMENT + window.NodeFilter.SHOW_TEXT,
        // Filter out GwentDB tooltips
        {
            acceptNode(node) {
                const TEXT_NODE = 3;
                const ELEMENT_NODE = 1;

                const {
                    FILTER_ACCEPT,
                    FILTER_REJECT,
                    FILTER_SKIP
                } = window.NodeFilter;

                if (node.nodeType === TEXT_NODE) {
                    return FILTER_ACCEPT;
                }
                if (node.nodeType === ELEMENT_NODE) {
                    // Ignore some tags
                    if (IGNORED_TAGS.indexOf(node.tagName) !== -1) {
                        return FILTER_REJECT;
                    }

                    // on GwentDB, we skip existing tooltips
                    if (
                        HOSTNAME === GWENTDB_HOSTNAME &&
                        node.getAttribute(GWENTDB_TOOLTIP_ATTR)
                    ) {
                        // Skip this node and all its children
                        return FILTER_REJECT;
                    }

                    // Skip the node itself
                    return FILTER_SKIP;
                }
                return FILTER_SKIP;
            }
        }
    );

    const nodes = [];

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const matches = findAllMatches(DICTIONARY, node.nodeValue);

        if (matches.length) {
            nodes.push({
                node,
                matches
            });
        }
    }

    nodes.forEach(({ node, matches }) => {
        const span = window.document.createElement('span');
        span.innerHTML = replaceMatches(
            node.nodeValue,
            matches,
            match =>
                `<span class="${CLASSNAME}" ${CARD_NAME_ATTRIBUTE}="${
                    match.entryValue
                }" ${
                    shouldUnderline
                        ? 'style="border-bottom: 1px dashed; padding-bottom: 0.1em"'
                        : ''
                }>${node.nodeValue.slice(match.start, match.end)}</span>`
        );

        node.parentNode.replaceChild(span, node);
    });

    // Add tooltips
    const highlights = document.getElementsByClassName(CLASSNAME);
    for (let i = 0; i < highlights.length; i += 1) {
        const highlight = highlights[i];
        const cardName = highlight.getAttribute(CARD_NAME_ATTRIBUTE);
        const card = CARDS[cardName];
        tooltip(card, highlight, assets);
    }
}

export default walk;
