/* global window */
/* @flow */
import { acceptNode } from './acceptNode';

function createWalker(target: Node) {
    return window.document.createTreeWalker(
        target,
        window.NodeFilter.SHOW_ELEMENT + window.NodeFilter.SHOW_TEXT,
        // Filter out GwentDB tooltips
        {
            acceptNode
        }
    );
}

export default createWalker;
