/* global window */
// @flow
import type { Dictionary, Card } from './types';

// eslint-disable-next-line no-unused-vars

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
