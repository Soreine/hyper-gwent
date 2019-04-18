// @flow
/* global window */
import browser from 'webextension-polyfill';

/*
 * Returns the URL of the active tab
 */
export async function getCurrentUrl(): Promise<?URL> {
    if (!browser.tabs) {
        // Executing in a normal page context
        return new URL(window.location.href);
    }
    // Executing in the extension popup menu

    // The only one tab returned should be the active one
    const [activeTab] = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!activeTab) {
        return null;
    }

    const { url } = activeTab;

    if (!url) {
        return null;
    }

    return new URL(activeTab.url);
}
