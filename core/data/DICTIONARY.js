// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';
import CARD_LIST from './CARD_LIST';
import ALIASES from './ALIASES';
import { create } from '../dictionary';

import type { Dictionary, Card } from '../types';

const DICTIONARY: Dictionary<CardID> = create(
    CARD_LIST.reduce((array: Array<[string, CardID]>, card: Card) => {
        const { id, name } = card;
        const cleanName: string = removeAccents(name).toLowerCase();

        // Standard
        array.push([cleanName, id]);
        // Plural
        array.push([pluralize(cleanName), id]);

        // Aliases
        const aliases = ALIASES[id] || [];
        aliases.forEach(alias => {
            array.push([alias, id]);
            array.push([pluralize(alias), id]);
        });

        return array;
    }, [])
);

export default DICTIONARY;
