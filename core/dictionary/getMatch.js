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
    index: number = 0,
    acc: {
        // the piece of text matched so far, for example "CIRI: da"
        matchedString: string,
        // the matched key so far, for example "ciri: da"
        key: string,
        // Number of typos so far (missing letter, extra letter, or letter switch)
        errorDistance: number,
        // When assuming two chars could have been swithed,
        // what character are we expecting next
        switchedChar: string | null
    } = { matchedString: '', key: '', errorDistance: 0, switchedChar: null }
): WeightedMatch<T> | null {
    const { matchedString, key, errorDistance, switchedChar } = acc;

    if (errorDistance > 2) {
        // This is not a match
        return null;
    }

    const nextChar = text[index];
    const isSpace = !/\w/.test(nextChar);
    const endOfWord = nextChar === undefined || isSpace;

    const potentialMatches: Array<WeightedMatch<T>> = (() => {
        // Have we found a match yet?
        const isMatch = dictionary[''] && endOfWord;
        const match = isMatch
            ? {
                  start: index - matchedString.length,
                  end: index,
                  entryValue: ((dictionary['']: any): T),
                  entryKey: key,
                  errorDistance
              }
            : null;

        if (nextChar === undefined) {
            return [match];
        }

        const subDict = dictionary[nextChar];
        if (!subDict) {
            return [match];
        }

        const longerMatch = getMatch(subDict, text, index + 1, {
            matchedString: matchedString + nextChar,
            key: key + nextChar,
            errorDistance,
            switchedChar
        });

        return [longerMatch, match];
    })().filter(Boolean);

    return bestMatch(potentialMatches);
}

function bestMatch<T>(
    matches: Array<WeightedMatch<T>>
): WeightedMatch<T> | null {
    return (
        matches
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

function matchRank({ start, end, errorDistance }: WeightedMatch<any>): number {
    return end - start + 0.001 * errorDistance;
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
