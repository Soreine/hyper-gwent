/* global window */
// @flow
import browser from 'webextension-polyfill';
import type { Dictionary, Card, VersionJson } from '../core/types';
import VERSION from '../core/data/static/VERSION';

// Extension storage key
const CARDS_DATA_KEY = 'cards-data';

type CardsJson = { [CardID]: Card };
type DictionaryJson = Dictionary<CardID>;

/**
 * Fetch the latest cards data.
 * Optimized to use a cache.
 */
async function fetchCardsData({
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
    const local = getLocalData();
    const latestVersion: VersionJson = await fetchJson(versionSrc);

    if (
        isCompatible(latestVersion) &&
        isMoreRecent(latestVersion, local.version)
    ) {
        // Fetch updated data
        const [cards, dictionary]: [
            CardsJson,
            DictionaryJson
        ] = await Promise.all([
            fetchJson.get(cardsSrc),
            fetchJson.get(dictionarySrc)
        ]);

        // Save it locally
        saveLocally(latestVersion, cards, dictionary);

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

function getLocalData(): {
    cards: CardsJson,
    dictionary: DictionaryJson,
    version: VersionJson
} {
    const DEFAULT = {
        version: {
            major: -1,
            minor: -1
        },
        cards: {},
        dictionary: {}
    };

    if (browser.storage) {
        return browser.storage.local.get(CARDS_DATA_KEY) || DEFAULT;
    }
    return DEFAULT;
}

function saveLocally(
    version: VersionJson,
    cards: CardsJson,
    dictionary: DictionaryJson
): void {
    if (browser.storage) {
        browser.storage.local.set(CARDS_DATA_KEY, {
            version,
            cards,
            dictionary
        });
    }
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

export default fetchCardsData;
