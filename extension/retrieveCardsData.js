/* @flow */
/* global window */
import browser from 'webextension-polyfill';
import type { Dictionary, Card, VersionJson } from '../core/types';
import VERSION from '../core/data/static/VERSION';

// Extension storage keys
const CARDS_KEY = 'cards';
const VERSION_KEY = 'version';
const DICTIONARY_KEY = 'dictionary';

type CardsJson = { [CardID]: Card };
type DictionaryJson = Dictionary<CardID>;

/**
 * Fetch the latest cards data.
 * Optimized to use a cache.
 */
async function retrieveCardsData({
    versionSrc,
    cardsSrc,
    dictionarySrc
}: {
    // URL where the latest data version can be fetched as JSON
    versionSrc: string,
    // URL where the cards data can be fetched as JSON
    cardsSrc: string,
    // URL where the card dictionary can be fetched as JSON
    dictionarySrc: string
}): Promise<{
    cards: { [CardID]: Card },
    dictionary: Dictionary<CardID>
}> {
    const local = await getLocalData();
    const latestVersion: VersionJson = await fetchJson(versionSrc);

    if (
        isCompatible(latestVersion) &&
        isMoreRecent(latestVersion, local.version)
    ) {
        // Fetch updated data
        const [cards, dictionary]: [
            CardsJson,
            DictionaryJson
        ] = await Promise.all([fetchJson(cardsSrc), fetchJson(dictionarySrc)]);

        // Save it locally
        await saveLocally(latestVersion, cards, dictionary);

        return {
            cards,
            dictionary
        };
    }

    if (isCompatible(local.version)) {
        // Use the cached data
        return local;
    }

    // No compatible data.
    throw new Error(
        'Hyper Gwent: Extension out-of-date, upgrade to the latest version to continue using Hyper Gwent.'
    );
}

async function getLocalData(): Promise<{
    cards: CardsJson,
    dictionary: DictionaryJson,
    version: VersionJson
}> {
    const local = await browser.storage.local.get([
        VERSION_KEY,
        CARDS_KEY,
        DICTIONARY_KEY
    ]);

    if (
        local &&
        local[VERSION_KEY] &&
        local[CARDS_KEY] &&
        local[DICTIONARY_KEY]
    ) {
        return local;
    }

    return {
        version: {
            major: -1,
            minor: -1
        },
        cards: {},
        dictionary: {}
    };
}

async function saveLocally(
    version: VersionJson,
    cards: CardsJson,
    dictionary: DictionaryJson
): Promise<void> {
    await browser.storage.local.set({
        [VERSION_KEY]: version,
        [CARDS_KEY]: cards,
        [DICTIONARY_KEY]: dictionary
    });
}

function isCompatible(version: VersionJson): boolean {
    return version.major === VERSION.major;
}

function isMoreRecent(latest: VersionJson, local: VersionJson): boolean {
    return (
        latest.major > local.major ||
        (latest.major === local.major && latest.minor > local.minor)
    );
}

async function fetchJson(src: string): Promise<Object> {
    const response = await window.fetch(src);
    const json = await response.json();
    return json;
}

export default retrieveCardsData;
