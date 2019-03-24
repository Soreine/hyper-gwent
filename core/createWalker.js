/* @flow */
import urlParse from 'url-parse';

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

function createWalker(window: any): TreeWalker<Document, Element | Text> {
    const HOSTNAME = urlParse(window.location.href).hostname;

    const walker: TreeWalker<
        Document,
        Element | Text
    > = window.document.createTreeWalker(
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

    return walker;
}

export default createWalker;
