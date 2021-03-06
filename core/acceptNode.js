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

const GWENT_DB_TOOLTIP_ATTRIBUTE = 'data-tooltip-url';

const IGNORED_ATTRIBUTES = [
    // Text already highlighted by Hyper Gwent
    HG_HIGHLIGHT_ATTRIBUTE,
    // Hyper Gwent own tooltip
    HG_TOOLTIP_ATTRIBUTE,
    // GwentDB tooltips attribute
    GWENT_DB_TOOLTIP_ATTRIBUTE
];

const currentHost = window.location.host;

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

        if (element.getAttribute('contenteditable')) {
            return FILTER_REJECT;
        }

        if (IGNORED_ATTRIBUTES.some(attr => element.hasAttribute(attr))) {
            // Skip this node and all its children
            return FILTER_REJECT;
        }

        if (ignoreOnPlaygwent(element) || ignoreOnTeamAretuza(element)) {
            // Skip this node and all its children
            return FILTER_REJECT;
        }

        // Skip the node itself, but walk its children
        return FILTER_SKIP;
    }
    return FILTER_SKIP;
}

const PLAYGWENT_CARD = 'Card__';
const PLAYGWENT_TOOLTIP = 'CardTootlp__Popup';
const PLAYGWENT_HOST = 'www.playgwent.com';
const PLAYGWENT_IGNORED_CLASSNAMES = [PLAYGWENT_CARD, PLAYGWENT_TOOLTIP];

// Specific rules for playgwent.com decks
function ignoreOnPlaygwent(element: Element): boolean {
    if (currentHost !== PLAYGWENT_HOST) {
        return false;
    }
    const className = element.getAttribute('class');
    return Boolean(
        className &&
            PLAYGWENT_IGNORED_CLASSNAMES.some(c => className.indexOf(c) !== -1)
    );
}

const TEAMARETUZA_CARD = 'arena-card-parent';
const TEAMARETUZA_TOOLTIP_ID = 'card-hover';
const TEAMARETUZA_HOST = 'teamaretuza.com';
const TEAMARETUZA_IGNORED_CLASSNAMES = [TEAMARETUZA_CARD];

// Specific rules for teamaretuza.com
function ignoreOnTeamAretuza(element: Element): boolean {
    if (currentHost !== TEAMARETUZA_HOST) {
        return false;
    }
    if (element.id === TEAMARETUZA_TOOLTIP_ID) {
        return true;
    }

    const className = element.getAttribute('class');
    return Boolean(
        className &&
            TEAMARETUZA_IGNORED_CLASSNAMES.some(
                c => className.indexOf(c) !== -1
            )
    );
}

/**
 * True if the node and its children should not be searched for card names.
 * This depends on the node's ancestors
 */
function shouldIgnore(node: Node) {
    return (
        acceptNode(node) === FILTER_REJECT ||
        (node.parentNode && shouldIgnore(node.parentNode))
    );
}

export { shouldIgnore, acceptNode };
