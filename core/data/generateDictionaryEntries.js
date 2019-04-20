// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';

import type { Card } from '../types';

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

        const entries = generateVariants(aliases).map(variant => [variant, id]);

        return array.concat(entries);
    }, []);
}

/**
 * Generate all orthographic variants for the provided card names
 */
function generateVariants(names: string[]): string[] {
    const variants = [];

    names.forEach(name => {
        const cleanName = normalizeName(name);
        variants.push(cleanName);
        variants.push(pluralize(cleanName));
    });

    return flatMap(variants, generateSpecialCharactersVariants);
}

/*
 * Generate all variants where special characters
 * are skipped, or replaced by a space.
 */
function generateSpecialCharactersVariants(name: string): string[] {
    const hasSpecialCharacters = /[^\s\w]/.test(name);
    if (!hasSpecialCharacters) {
        return [name];
    }

    const variantsOf = (str: string): string[] => {
        if (!str) {
            return [str];
        }
        const subvariants = variantsOf(str.slice(1));
        const unchanged = subvariants.map(subvariant => str[0] + subvariant);

        if (/^[^\s\w]/.test(str)) {
            const withSpace = subvariants.map(subvariant => ` ${subvariant}`);
            const skipped = subvariants;

            return [...unchanged, ...withSpace, ...skipped];
        }

        return unchanged;
    };

    return variantsOf(name);
}

/*
 * Normalize a card name by removing anything that is not needed
 */
function normalizeName(name: string): string {
    return removeAccents(name).toLowerCase();
}

function flatMap(arr: *, fn: any) {
    return arr.reduce((acc, x) => acc.concat(fn(x)), []);
}

export default generateDictionaryEntries;
