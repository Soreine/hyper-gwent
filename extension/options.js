// @flow
/* global document */

import browser from 'webextension-polyfill';

// Access to settings UI elements
const UI = {
    get save(): HTMLButtonElement {
        // $FlowFixMe
        return document.getElementById('save');
    },

    get shouldUnderline(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('underline');
    },

    get status(): HTMLElement {
        // $FlowFixMe
        return document.getElementById('status');
    }
};

// Saves options to browser.storage.sync.
function saveOptions() {
    const shouldUnderline = UI.shouldUnderline.checked;

    browser.storage.sync
        .set({
            shouldUnderline
        })
        .then(() => {
            // Update status to let user know options were saved.

            UI.status.setAttribute('class', 'visible');
            setTimeout(() => {
                UI.status.setAttribute('class', 'hidden');
            }, 1000);
        });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
    browser.storage.sync
        .get({
            shouldUnderline: true
        })
        .then(items => {
            UI.shouldUnderline.checked = items.shouldUnderline;
        });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
UI.save.addEventListener('click', saveOptions);
