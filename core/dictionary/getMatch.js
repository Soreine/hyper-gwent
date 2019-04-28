// @flow

import type { Dictionary, Match } from '../types';

type WeightedMatch<T> = Match<T> & {
    errorDistance: number
};

/**
 * Find the longest match at the given index in the text
 */
function getMatch<T>(
    dictionary: Dictionary<T>,
    text: string,
    index: number
): Match<T> | void {
    const potentialMatches = getAllMatches(dictionary, text, index);
    return bestMatch(potentialMatches);
}

/**
 * Find the longest match at the given index in the text
 */
function getAllMatches<T>(
    dictionary: Dictionary<T>,
    text: string,
    // Index in the text where we are looking for a match
    index: number,
    acc: {
        // The length of text matched so far
        matchedStringLength: number,
        // the matched key so far
        key: string,
        // Number of typos so far (missing letter, extra letter, or letter switch)
        errorDistance: number
    } = {
        matchedStringLength: 0,
        key: '',
        errorDistance: 0
    }
): Array<WeightedMatch<T>> {
    const { matchedStringLength, key, errorDistance } = acc;

    if (errorDistance > 1) {
        // This is not a match
        return [];
    }

    const isFirstLetter = matchedStringLength === 0;

    const currentCharIndex = index + matchedStringLength;
    const endOfText = currentCharIndex >= text.length;
    const currentChar = text[currentCharIndex];
    const isWordChar = /\w/.test(currentChar);

    const nextCharIndex = currentCharIndex + 1;
    const hasNextChar =
        nextCharIndex < text.length && /\w/.test(text[nextCharIndex]);
    const nextChar = text[nextCharIndex];

    const endOfWord = currentChar === undefined || !isWordChar;

    const potentialMatches = [];

    // Have we matched a word completely
    const isMatch =
        dictionary[''] &&
        endOfWord &&
        isGoodEnoughMatch(matchedStringLength, errorDistance);
    if (isMatch) {
        const currentMatch = {
            start: index,
            end: index + matchedStringLength,
            entryValue: ((dictionary['']: any): T),
            entryKey: key,
            errorDistance
        };
        potentialMatches.push([currentMatch]);
    }

    if (endOfText) {
        // No more characters to process
        return flatten(potentialMatches);
    }

    // Exact spelling
    if (dictionary[currentChar]) {
        const exactSpellingMatches = getAllMatches(
            dictionary[currentChar],
            text,
            index,
            {
                matchedStringLength: matchedStringLength + 1,
                key: key + currentChar,
                errorDistance
            }
        );
        potentialMatches.push(exactSpellingMatches);
    }

    // Duplicate letter ('Yenneffer' instead of 'Yennefer')
    const previousChar = key[key.length - 1];
    const isDuplicate = previousChar === currentChar;
    if (isDuplicate) {
        const doubledLetterMatches = getAllMatches(dictionary, text, index, {
            matchedStringLength: matchedStringLength + 1,
            key,
            errorDistance
        });
        potentialMatches.push(doubledLetterMatches);
    }

    // Ommitted double letter ('Detlaf' instead of 'Dettlaff')
    const isMissingDoubleLetter =
        !isFirstLetter &&
        dictionary[currentChar] &&
        dictionary[currentChar][currentChar];

    if (isMissingDoubleLetter) {
        const missingDoubleLetterMatches = getAllMatches(
            dictionary[currentChar][currentChar],
            text,
            index,
            {
                matchedStringLength: matchedStringLength + 1,
                key: key + currentChar + currentChar,
                errorDistance
            }
        );
        potentialMatches.push(missingDoubleLetterMatches);
    }

    // Letter switches
    const isSwitch =
        !isFirstLetter &&
        hasNextChar &&
        nextChar !== currentChar &&
        dictionary[nextChar] &&
        dictionary[nextChar][currentChar];

    if (isSwitch) {
        const switchedLetterMatches = getAllMatches(
            dictionary[nextChar][currentChar],
            text,
            index,
            {
                matchedStringLength: matchedStringLength + 2,
                key: key + nextChar + currentChar,
                // Count the two swiched letters as 1 error
                errorDistance: errorDistance + 1
            }
        );
        potentialMatches.push(switchedLetterMatches);
    }

    return flatten(potentialMatches);
}

function flatten<T>(arr: Array<Array<T> | T>): Array<T> {
    return [].concat(...arr);
}

function bestMatch<T>(
    matches: Array<WeightedMatch<T>>
): WeightedMatch<T> | void {
    // For each matched value, pick the one with the least mistakes
    const bestByValue: Map<T, WeightedMatch<T>> = new Map();
    matches.forEach(match => {
        const existing = bestByValue.get(match.entryValue);
        const isBetter =
            !existing || existing.errorDistance > match.errorDistance;
        if (isBetter) {
            bestByValue.set(match.entryValue, match);
        }
    });

    return Array.from(bestByValue.values())
        .sort((a: WeightedMatch<T>, b: WeightedMatch<T>) => {
            const vA = matchRank(a);
            const vB = matchRank(b);

            if (vA < vB) {
                return 1;
            }
            if (vA > vB) {
                return -1;
            }
            return 0;
        })
        .find(match => {
            const { start, end, errorDistance } = match;
            const goodEnough = isGoodEnoughMatch(end - start, errorDistance);
            return goodEnough;
        });
}

function matchRank({ start, end, errorDistance }: WeightedMatch<any>): number {
    return end - start - 0.001 * errorDistance;
}

function isGoodEnoughMatch(textLength: number, errorDistance: number): boolean {
    // Errors must not account for more than a fourth of the text
    return errorDistance / textLength < 0.2;
}

export default getMatch;
