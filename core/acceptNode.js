/* global window */
/* @flow */
import { HG_HIGHLIGHT_ATTRIBUTE, HG_TOOLTIP_ATTRIBUTE } from './CONSTANTS';

const { FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP } = window.NodeFilter;

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

const IGNORED_ATTRIBUTES = [
    // Text already highlighted by Hyper Gwent
    HG_HIGHLIGHT_ATTRIBUTE,
    // Hyper Gwent own tooltip
    HG_TOOLTIP_ATTRIBUTE,
    // GwentDB tooltips attribute
    'data-tooltip-url'
];

function acceptNode(node: Node) {
    const TEXT_NODE = 3;
    const ELEMENT_NODE = 1;

    if (node.nodeType === TEXT_NODE) {
        return FILTER_ACCEPT;
    }
    if (node.nodeType === ELEMENT_NODE) {
        // $FlowFixMe node is an Element
        const element: Element = node;
        // Ignore some tags
        if (IGNORED_TAGS.indexOf(element.tagName) !== -1) {
            return FILTER_REJECT;
        }

        if (IGNORED_ATTRIBUTES.some(attr => element.hasAttribute(attr))) {
            // Skip this node and all its children
            return FILTER_REJECT;
        }

        // Skip the node itself, but walk its children
        return FILTER_SKIP;
    }
    return FILTER_SKIP;
}

/* Whether a node or its children should be searched for card names */
function shouldIgnore(node: Node) {
    return acceptNode(node) === FILTER_REJECT;
}

export { shouldIgnore, acceptNode };
