/* @flow */
import { GWENT_HIGHLIGHTED_CLASSNAME, HG_TOOLTIP_ATTRIBUTE } from './CONSTANTS';

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
    // Hyper Gwent own tooltip
    HG_TOOLTIP_ATTRIBUTE,
    // GwentDB tooltips attribute
    'data-tooltip-url'
];

function createWalker(
    window: any,
    target: Node
): TreeWalker<Document, Element | Text> {
    const walker: TreeWalker<
        Document,
        Element | Text
    > = window.document.createTreeWalker(
        target,
        window.NodeFilter.SHOW_ELEMENT + window.NodeFilter.SHOW_TEXT,
        // Filter out GwentDB tooltips
        {
            acceptNode(node: Node) {
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
                    const element: Element = node;
                    // Ignore some tags
                    if (IGNORED_TAGS.indexOf(element.tagName) !== -1) {
                        return FILTER_REJECT;
                    }

                    // Reject Hyper Gwent's own highlights
                    if (
                        element.getAttribute('class') ===
                        GWENT_HIGHLIGHTED_CLASSNAME
                    ) {
                        console.log('skip highlight', element);
                        return FILTER_REJECT;
                    }

                    if (
                        IGNORED_ATTRIBUTES.some(attr =>
                            element.hasAttribute(attr)
                        )
                    ) {
                        console.log('skip tooltip', element);
                        // Skip this node and all its children
                        return FILTER_REJECT;
                    }

                    // Skip the node itself, but walk its children
                    return FILTER_SKIP;
                }
                return FILTER_SKIP;
            }
        }
    );

    return walker;
}

export default createWalker;
