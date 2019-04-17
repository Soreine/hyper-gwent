// @flow
/* @jsx h */

import browser from 'webextension-polyfill';

import { isUrlAccepted } from './sitelist';

import { loadOptions } from './options';
import { getCurrentUrl } from './getCurrentUrl';

/*
 * This background script watch changes in the active tab, or extension options,
 * and update the extension icon to show if it is enabled on the current page
 */

async function init() {
    let options = await loadOptions();

    async function updateBrowserActionIcon() {
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

    browser.tabs.onActivated.addListener(() => {
        updateBrowserActionIcon();
    });

    browser.tabs.onUpdated.addListener(() => {
        updateBrowserActionIcon();
    });

    browser.storage.onChanged.addListener(async () => {
        options = await loadOptions();
        updateBrowserActionIcon();
    });
}

async function toggleIcon(enabled: boolean) {
    if (enabled) {
        await browser.browserAction.setIcon({
            path: {
                '16': 'icon16.png',
                '32': 'icon32.png',
                '40': 'icon40.png',
                '48': 'icon48.png',
                '128': 'icon128.png'
            }
        });
    } else {
        await browser.browserAction.setIcon({
            path: {
                '16': 'icon16-gray.png',
                '32': 'icon32-gray.png',
                '40': 'icon40-gray.png',
                '48': 'icon48-gray.png',
                '128': 'icon128-gray.png'
            }
        });
    }
}

init();
