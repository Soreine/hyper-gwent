// @flow
import pluralize from 'pluralize';
import removeAccents from 'remove-accents';
import flatmap from 'flatmap';

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

    return flatmap(variants, generateSpecialCharactersVariants);
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

        let variants = [...unchanged];

        if (/^[^\s\w]/.test(str)) {
            const withSpace = subvariants.map(subvariant => ` ${subvariant}`);
            const skipped = subvariants;

            variants = variants.concat(withSpace, skipped);
        }
        // When using an actual em-dash instead of the minus sign.
        if (str[0] === '–') {
            const withMinus = subvariants.map(subvariant => `-${subvariant}`);
            variants = variants.concat(withMinus)
        }
        // Followed by a space (like in "Speartip: Asleep")
        if (/^[^\s\w ]/.test(str)) {
            const skipSpaceOnly = variantsOf(str.slice(2)).map(
                subvariant => str[0] + subvariant
            );

            variants = variants.concat(skipSpaceOnly);
        }

        return variants;
    };

    return variantsOf(name);
}

/*
 * Normalize a card name by removing anything that is not needed
 */
function normalizeName(name: string): string {
    return removeAccents(name).toLowerCase();
}

export default generateDictionaryEntries;
