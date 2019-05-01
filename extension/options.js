// @flow
/* @jsx h */

import browser from 'webextension-polyfill';
import { arrayToSet, setToArray } from './sitelist';

export interface Options {
    shouldUnderline: boolean;
    lowQualityArt: boolean;
    enabledSites: Set<string>;
    disabledSites: Set<string>;
}

// Options as saved in the local storage
export interface RawOptions {
    shouldUnderline: boolean;
    lowQualityArt: boolean;
    enabledSites: Array<string>;
    disabledSites: Array<string>;
}

export const DEFAULT_OPTIONS: RawOptions = {
    shouldUnderline: true,
    lowQualityArt: false,
    enabledSites: ['https://www.reddit.com/r/gwent'],
    disabledSites: ['https://www.gwentdb.com']
};

export async function saveOptions({
    shouldUnderline,
    lowQualityArt,
    enabledSites,
    disabledSites
}: Options) {
    if (!browser.storage) {
        console.warn(
            'Current context does not provide browser APIs. Skipping saving options'
        );
        return;
    }
    const rawOptions = {
        shouldUnderline,
        lowQualityArt,
        enabledSites: setToArray(enabledSites),
        disabledSites: setToArray(disabledSites)
    };

    await browser.storage.sync.set(rawOptions);
}

export async function loadOptions(): Promise<Options> {
    let rawOptions: RawOptions;
    if (!browser.storage) {
        console.warn(
            'Current context does not provide browser APIs. Skipping loading options'
        );
        rawOptions = DEFAULT_OPTIONS;
    } else {
        rawOptions = await browser.storage.sync.get(DEFAULT_OPTIONS);
    }

    const options = {
        shouldUnderline: rawOptions.shouldUnderline,
        lowQualityArt: rawOptions.lowQualityArt,
        enabledSites: arrayToSet(rawOptions.enabledSites),
        disabledSites: arrayToSet(rawOptions.disabledSites)
    };

    return options;
}
