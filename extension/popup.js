// @flow
/* global document */

import browser from 'webextension-polyfill';

type Options = {
    shouldUnderline: boolean,
    lowQualityArt: boolean,
    enabledDomains: string[]
};

const DEFAULT_OPTIONS: Options = {
    shouldUnderline: true,
    lowQualityArt: false,
    enabledDomains: ['https://reddit.com/gwent']
};

// Access to settings UI elements
const UI = {
    get shouldUnderline(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('underline');
    },

    get lowQualityArt(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('low-quality');
    },

    get enabledSwitch(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('switch');
    },

    get enabledSwitchPin(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('pin');
    },

    toggleSwitch(active: boolean) {
        this.enabledSwitchPin.setAttribute(
            'class',
            active ? 'switch-pin switch-pin-on' : 'switch-pin'
        );
    },

    // Update the UI with the given options state
    updateForOptions(options: Options) {
        UI.shouldUnderline.checked = options.shouldUnderline;
        UI.lowQualityArt.checked = options.lowQualityArt;

        const currentlyActive = true;
        UI.toggleSwitch(currentlyActive);
    }
};

let currentOptions = DEFAULT_OPTIONS;

// Update the options, and propagate it to the UI and the storage
async function mutateOptions(mutator: (prevOptions: Options) => void) {
    log('mutating', { currentOptions });
    mutator(currentOptions);
    UI.updateForOptions(currentOptions);
    saveOptions(currentOptions);
    log('saved', { currentOptions });
}

// Saves options to browser.storage.sync.
async function saveOptions({
    shouldUnderline,
    lowQualityArt,
    enabledDomains
}: Options) {
    await browser.storage.sync.set({
        shouldUnderline,
        lowQualityArt,
        enabledDomains
    });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
async function loadOptions() {
    // Use default value color = 'red' and likesColor = true.
    const options = await browser.storage.sync.get(DEFAULT_OPTIONS);

    currentOptions = options;
    UI.updateForOptions(currentOptions);
}

document.addEventListener('DOMContentLoaded', loadOptions);

UI.shouldUnderline.addEventListener('change', () => {
    mutateOptions(options => {
        options.shouldUnderline = !options.shouldUnderline;
    });
});
UI.lowQualityArt.addEventListener('change', () => {
    mutateOptions(options => {
        options.lowQualityArt = !options.lowQualityArt;
    });
});
UI.enabledSwitch.addEventListener('click', () => {
    mutateOptions(options => {});
});

console.log('Loaded popup.js');

function log(...args) {
    console.log(...args);
}
