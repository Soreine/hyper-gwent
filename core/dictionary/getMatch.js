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
): Match<T> | null {
    const potentialMatches = getAllMatches(dictionary, text, index);
    console.log(potentialMatches);
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
        errorDistance: number,
        // When assuming two chars could have been swithed,
        // what character are we expecting next
        switchedChar: string | null
    } = {
        matchedStringLength: 0,
        key: '',
        errorDistance: 0,
        switchedChar: null
    }
): Array<WeightedMatch<T>> {
    const { matchedStringLength, key, errorDistance, switchedChar } = acc;

    if (errorDistance > 2) {
        // This is not a match
        return [];
    }

    const nextChar = text[index];
    const isSpace = !/\w/.test(nextChar);
    const endOfWord = nextChar === undefined || isSpace;

    const nextKeys = Object.keys(dictionary);

    const potentialMatches: Array<Array<WeightedMatch<T>>> = nextKeys
        .map((dictKey: string) => {
            if (dictKey === '') {
                if (dictionary[''] && endOfWord) {
                    // We have an exact match
                    return [
                        {
                            start: index - matchedStringLength,
                            end: index,
                            entryValue: ((dictionary['']: any): T),
                            entryKey: key,
                            errorDistance
                        }
                    ];
                }

                return null;
            }

            if (nextChar === undefined) {
                return null;
            }

            const subDict: Dictionary<T> = (dictionary[dictKey]: any);

            let newErrorDistance;
            let newSwitchedChar;
            if (dictKey === nextChar) {
                newErrorDistance = errorDistance;
                newSwitchedChar = switchedChar;
            } else if (
                dictKey === switchedChar &&
                key[key.length - 1] === nextChar
            ) {
                newErrorDistance = errorDistance;
                newSwitchedChar = null;
            } else {
                newErrorDistance = errorDistance + 1;
                newSwitchedChar = nextChar;
            }

            return getAllMatches(subDict, text, index + 1, {
                matchedStringLength: matchedStringLength + 1,
                key: key + dictKey,
                errorDistance: newErrorDistance,
                switchedChar: newSwitchedChar
            });
        })
        .filter(Boolean);

    return [].concat(...potentialMatches);
}

function bestMatch<T>(
    matches: Array<WeightedMatch<T>>
): WeightedMatch<T> | null {
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

    return (
        Array.from(bestByValue.values())
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
            .find(isGoodEnoughMatch) || null
    );
}

function matchRank({ entryKey, errorDistance }: WeightedMatch<any>): number {
    return entryKey.length - 0.001 * errorDistance;
}

function isGoodEnoughMatch({
    start,
    end,
    errorDistance
}: WeightedMatch<any>): boolean {
    // Errors must not account for more than a fourth of the text
    return errorDistance / (end - start) < 0.25;
}

export default getMatch;
