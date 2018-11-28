// @flow
import removeAccents from 'remove-accents';
import { matches } from './dictionary';

import type { Dictionary, Match } from './types';

function findAllMatches<T>(
    dictionary: Dictionary<T>,
    text: string
): Array<Match<T>> {
    const cleanText = removeAccents(text).toLowerCase();
    const result = [];

    // Only match at beginning of words
    let wasNotWord = true;
    for (let i = 0; i < cleanText.length; i += 1) {
        const isWord = /\w/.test(cleanText[i]);
        if (wasNotWord && isWord) {
            const match = matches(dictionary, cleanText, i);
            if (match) {
                result.push(match);

                // Fast forward
                i = match.end - 1;
            }
        }

        wasNotWord = /[^\w]/.test(cleanText[i]);
    }

    return result;
}

export default findAllMatches;
