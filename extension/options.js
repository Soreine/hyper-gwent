// @flow
/* global document */

import browser from 'webextension-polyfill';

// Access to settings UI elements
const UI = {
    get saveButton(): HTMLButtonElement {
        // $FlowFixMe
        return document.getElementById('save');
    },

    get shouldUnderline(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('underline');
    },

    get lowQualityArt(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('low-quality');
    },

    get status(): HTMLElement {
        // $FlowFixMe
        return document.getElementById('status');
    }
};

// Saves options to browser.storage.sync.
async function saveOptions() {
    const shouldUnderline = UI.shouldUnderline.checked;
    const lowQualityArt = UI.lowQualityArt.checked;

    await browser.storage.sync.set({
        shouldUnderline,
        lowQualityArt
    });

    // Update status to let user know options were saved.
    UI.status.setAttribute('class', 'visible');

    setTimeout(() => {
        UI.status.setAttribute('class', 'hidden');
    }, 1000);
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
    browser.storage.sync
        .get({
            shouldUnderline: true,
            lowQualityArt: false
        })
        .then(items => {
            UI.shouldUnderline.checked = items.shouldUnderline;
            UI.lowQualityArt.checked = items.lowQualityArt;
        });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
UI.saveButton.addEventListener('click', saveOptions);
