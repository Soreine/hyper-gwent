/* global window */
// @flow
import browser from 'webextension-polyfill';
import type { Dictionary, Card } from './types';

const VERSION_KEY = 'version';
const CARDS_KEY = 'cards';
const DICTIONARY_KEY = 'dictionary';

/**
 * Fetch the latest cards data.
 * Optimized to use a cache.
 */
async function fetchCardsData({
    cardsSrc,
    dictionarySrc
}: {
    // URL where the cards data can be fected as JSON
    cardsSrc: string,
    // URL where the card dictionary can be fected as JSON
    dictionarySrc: string
}): Promise<{
    cards: { [CardID]: Card },
    dictionary: Dictionary<CardID>
}> {
    let cachedVersion: string = 'none';
    if (browser.storage) {
        cachedVersion = browser.storage.local.get(VERSION_KEY);
    }

    const cards = await fetchJson(cardsSrc);
    const dictionary = await fetchJson(dictionarySrc);

    return {
        cards,
        dictionary
    };
}

async function fetchJson(src: string): Promise<Object> {
    const response = await window.fetch(src);
    const json = await response.json();
    return json;
}

export default fetchCardsData;
