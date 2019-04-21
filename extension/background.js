// @flow
/* @jsx h */

import browser from 'webextension-polyfill';

import { isUrlAccepted } from './sitelist';

import { loadOptions, type Options } from './options';
import { getCurrentUrl } from './getCurrentUrl';

/*
 * This background script watch changes in the active tab, or extension options,
 * and update the extension icon to show if it is enabled on the current page
 */

async function init() {
    let options = await loadOptions();

    // Watch navigation, to enable/disable content script depending on URL changes.
    // NOTE: This is the only reliable method that I could find, which works for SPA as well.
    // For example, content scripts cannot monkey patch history.pushState because of XRay vision, which prohibits the use of modules like `url-listener`
    browser.webNavigation.onHistoryStateUpdated.addListener(async () => {
        const activeTabs = await browser.tabs.query({
            currentWindow: true,
            active: true
        });

        activeTabs.forEach(tab => {
            browser.tabs.sendMessage(tab.id, 'hyper-gwent/history-changed');
        });
    });

    updateBrowserActionIcon(options);

    browser.tabs.onActivated.addListener(() => {
        updateBrowserActionIcon(options);
    });

    browser.tabs.onUpdated.addListener(() => {
        updateBrowserActionIcon(options);
    });

    browser.storage.onChanged.addListener(async () => {
        options = await loadOptions();
        updateBrowserActionIcon(options);
    });
}

async function updateBrowserActionIcon(options: Options) {
    const currentUrl = await getCurrentUrl();
    if (!currentUrl) {
        return;
    }

    const accepted = isUrlAccepted(
        currentUrl.href,
        options.enabledSites,
        options.disabledSites
    );

    toggleIcon(accepted);
}

async function toggleIcon(enabled: boolean) {
    if (enabled) {
        await Promise.all([
            browser.browserAction.setIcon({
                path: {
                    '16': 'icon16.png',
                    '32': 'icon32.png',
                    '40': 'icon40.png',
                    '48': 'icon48.png',
                    '128': 'icon128.png'
                }
            }),
            browser.browserAction.setTitle({
                title: 'Hyper Gwent (on)'
            })
        ]);
    } else {
        await Promise.all([
            browser.browserAction.setIcon({
                path: {
                    '16': 'icon16-gray.png',
                    '32': 'icon32-gray.png',
                    '40': 'icon40-gray.png',
                    '48': 'icon48-gray.png',
                    '128': 'icon128-gray.png'
                }
            }),
            browser.browserAction.setTitle({
                title: 'Hyper Gwent (off)'
            })
        ]);
    }
}

init();
