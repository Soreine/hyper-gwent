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

    const endOfText = index >= text.length;
    const currentChar = text[index];
    const isWordChar = /\w/.test(currentChar);
    const endOfWord = currentChar === undefined || !isWordChar;
    const nextKeys: string[] = nextDictKeys(dictionary);

    const potentialMatches = [];

    // Have we matched a word completely
    const isMatch =
        dictionary[''] &&
        endOfWord &&
        isGoodEnoughMatch(matchedStringLength, errorDistance);
    if (isMatch) {
        const currentMatch = {
            start: index - matchedStringLength,
            end: index,
            entryValue: ((dictionary['']: any): T),
            entryKey: key,
            errorDistance
        };
        potentialMatches.push([currentMatch]);
    }

    // Exact spelling
    if (!endOfText && dictionary[currentChar]) {
        const exactSpellingMatches = getAllMatches(
            dictionary[currentChar],
            text,
            index + 1,
            {
                matchedStringLength: matchedStringLength + 1,
                key: key + currentChar,
                errorDistance
            }
        );
        potentialMatches.push(exactSpellingMatches);
    }

    // Omitted letter
    const ommittedLetterMatches = flatten(
        nextKeys.map(dictKey =>
            getAllMatches(dictionary[dictKey], text, index, {
                matchedStringLength,
                key: key + dictKey,
                errorDistance: errorDistance + 1
            })
        )
    );
    potentialMatches.push(ommittedLetterMatches);

    // Extra letter
    if (!endOfText && isWordChar) {
        const extraLetterMatches = getAllMatches(dictionary, text, index + 1, {
            matchedStringLength: matchedStringLength + 1,
            key,
            errorDistance: errorDistance + 1
        });
        potentialMatches.push(extraLetterMatches);
    }

    // Different letter
    const nextChar = text[index + 1];
    if (!endOfText && isWordChar) {
        const differentLetterMatches = flatten(
            nextKeys.map(dictKey =>
                getAllMatches(dictionary[dictKey], text, index + 1, {
                    matchedStringLength: matchedStringLength + 1,
                    key: key + dictKey,
                    errorDistance: errorDistance + 1
                })
            )
        );
        potentialMatches.push(differentLetterMatches);
    }

    // Letter switches
    const hasNextChar = index + 1 >= text.length && /\w/.test(text[index + 1]);
    const isSwitch =
        hasNextChar &&
        nextChar !== currentChar &&
        dictionary[nextChar] &&
        dictionary[nextChar][currentChar];

    if (isSwitch) {
        const switchedLetterMatches = getAllMatches(
            dictionary[nextChar][currentChar],
            text,
            index + 2,
            {
                matchedStringLength: matchedStringLength + 2,
                key: key + nextChar + currentChar,
                // Count the two swiched letters as only 1 error
                errorDistance: errorDistance + 1
            }
        );
        potentialMatches.push(switchedLetterMatches);
    }

    return flatten(potentialMatches);
}

// Memoized
const nextDictKeysCache: WeakMap<
    Dictionary<any>,
    Array<string>
> = new WeakMap();
function nextDictKeys<T>(dict: Dictionary<T>): Array<string> {
    const cached = nextDictKeysCache.get(dict);
    if (cached) {
        return cached;
    }
    const computed = Object.keys(dict).filter(key => key !== '');
    nextDictKeysCache.set(dict, computed);

    return computed;
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

function matchRank({ entryKey, errorDistance }: WeightedMatch<any>): number {
    return entryKey.length - 0.001 * errorDistance;
}

function isGoodEnoughMatch(textLength: number, errorDistance: number): boolean {
    // Errors must not account for more than a fourth of the text
    return errorDistance / textLength < 0.2;
}

export default getMatch;
