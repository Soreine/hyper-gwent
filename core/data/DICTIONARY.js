// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';
import CARD_LIST from './CARD_LIST';
import ALIASES from './ALIASES';
import { create } from '../dictionary';

import type { Dictionary, Card } from '../types';

/*
 * Normalize an alias by removing anything that is not needed
 */
function normalizeAlias(alias: string): string {
    return removeAccents(alias).toLowerCase();
}

const DICTIONARY: Dictionary<CardID> = create(
    CARD_LIST.reduce((array: Array<[string, CardID]>, card: Card) => {
        const { id } = card;
        const aliases = ALIASES[id] || [];

        aliases.forEach(alias => {
            const cleanAlias = normalizeAlias(alias);

            array.push([cleanAlias, id]);
            array.push([pluralize(cleanAlias), id]);
        });

        return array;
    }, [])
);

export default DICTIONARY;
