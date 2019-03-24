// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';
import * as dictionary from '../dictionary';

import type { Dictionary, Card } from '../types';

/*
 * Normalize an alias by removing anything that is not needed
 */
function normalizeAlias(alias: string): string {
    return removeAccents(alias).toLowerCase();
}

function generateDictionary(
    // The complete list of cards
    cardList: Card[],
    // All aliases defined for each card
    cardAliases: { [CardID]: Array<string> }
): Dictionary<CardID> {
    const entries = cardList.reduce(
        (array: Array<[string, CardID]>, card: Card) => {
            const { id } = card;
            const aliases = cardAliases[id] || [];

            aliases.forEach(alias => {
                const cleanAlias = normalizeAlias(alias);

                array.push([cleanAlias, id]);
                array.push([pluralize(cleanAlias), id]);
            });

            return array;
        },
        []
    );

    return dictionary.create(entries);
}

export default generateDictionary;
