// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';

import type { Card } from '../types';

/*
 * Normalize an alias by removing anything that is not needed
 */
function normalizeAlias(alias: string): string {
    return removeAccents(alias).toLowerCase();
}

/*
 * Generate all entries to build a dictionary from
 * a card list and aliases.
 */
function generateDictionaryEntries(
    // The complete list of cards
    cardList: Card[],
    // All aliases defined for each card
    cardAliases: { [CardID]: Array<string> }
): Array<[string, CardID]> {
    return cardList.reduce((array: Array<[string, CardID]>, card: Card) => {
        const { id } = card;
        const aliases = cardAliases[id] || [];

        aliases.forEach(alias => {
            const cleanAlias = normalizeAlias(alias);

            array.push([cleanAlias, id]);
            array.push([pluralize(cleanAlias), id]);
        });

        return array;
    }, []);
}

export default generateDictionaryEntries;
