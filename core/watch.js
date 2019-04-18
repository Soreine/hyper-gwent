/* global MutationObserver */
// @flow

import type { ExtensionAssets, Card, Dictionary } from './types';
import walk from './walk';
type StopListeningCallback = () => void;

// Watch the target HTML element and highlight cards inside it
function watch(
    target: HTMLElement,
    data: {
        assets: ExtensionAssets,
        cards: {
            [CardID]: Card
        },
        dictionary: Dictionary<CardID>
    },
    options?: { shouldUnderline?: boolean, lowQualityArt?: boolean }
): StopListeningCallback {
    async function walkNode(node: Node) {
        walk(node, data, options);
    }

    return listenToNodeChanges(target, walkNode);
}

function listenToNodeChanges(
    target: Node,
    onNodeChange: (changedNode: Node) => any | Promise<any>
): StopListeningCallback {
    const mutationObserver = new MutationObserver(mutationList => {
        mutationList.forEach(mutation => {
            switch (mutation.type) {
                case 'childList':
                    mutation.addedNodes.forEach(onNodeChange);
                    break;
                case 'characterData':
                    onNodeChange(mutation.target);
                    break;
                default:
                    break;
            }
        });
    });

    // Call once on the whole target.
    onNodeChange(target);

    mutationObserver.observe(target, {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    });

    return () => mutationObserver.disconnect();
}

export default watch;
