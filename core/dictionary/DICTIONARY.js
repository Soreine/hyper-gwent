// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';
import { NAMES, ALIASES } from '../data';
import create from './create';

import type { Dictionary } from '../types';

type CardName = string;

const DICTIONARY: Dictionary<CardName> = create(
    NAMES.reduce((array, name) => {
        const cleanName: string = removeAccents(name).toLowerCase();

        // Standard
        array.push([cleanName, name]);
        // Plural
        array.push([pluralize(cleanName), name]);

        // Aliases
        const aliases = ALIASES[name] || [];
        aliases.forEach(alias => {
            array.push([alias, name]);
            array.push([pluralize(alias), name]);
        });
        return array;
    }, [])
);

export default DICTIONARY;
