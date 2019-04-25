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
        expectedSwitchedChar: string | null
    } = {
        matchedStringLength: 0,
        key: '',
        errorDistance: 0,
        expectedSwitchedChar: null
    }
): Array<WeightedMatch<T>> {
    const {
        matchedStringLength,
        key,
        errorDistance,
        expectedSwitchedChar
    } = acc;

    if (errorDistance > 2) {
        // This is not a match
        return [];
    }

    const endOfText = index >= text.length;
    const nextChar = text[index];
    const isSpace = !/\w/.test(nextChar);
    const endOfWord = nextChar === undefined || isSpace;
    const nextKeys: string[] = nextDictKeys(dictionary);

    // Have we matched a word completely
    const isMatch = dictionary[''] && endOfWord;
    const currentMatch = isMatch
        ? [
              {
                  start: index - matchedStringLength,
                  end: index,
                  entryValue: ((dictionary['']: any): T),
                  entryKey: key,
                  errorDistance
              }
          ]
        : [];

    // Exact spelling
    const exactSpellingMatches =
        endOfText || !dictionary[nextChar]
            ? []
            : getAllMatches(dictionary[nextChar], text, index + 1, {
                  matchedStringLength: matchedStringLength + 1,
                  key: key + nextChar,
                  errorDistance,
                  expectedSwitchedChar: null
              });

    // Omitted letter
    const ommittedLetterMatches = isSpace
        ? []
        : flatten(
              nextKeys.map(dictKey =>
                  getAllMatches(dictionary[dictKey], text, index, {
                      matchedStringLength,
                      key: key + dictKey,
                      errorDistance: errorDistance + 1,
                      expectedSwitchedChar: null
                  })
              )
          );

    // Extra letter
    const extraLetterMatches =
        endOfText || isSpace
            ? []
            : getAllMatches(dictionary, text, index + 1, {
                  matchedStringLength: matchedStringLength + 1,
                  key,
                  errorDistance: errorDistance + 1,
                  expectedSwitchedChar: null
              });

    // Different letter
    const differentLetterMatches =
        endOfText || isSpace
            ? []
            : flatten(
                  nextKeys.map(dictKey => {
                      const subdict = dictionary[dictKey];
                      if (!subdict || dictKey === nextChar) {
                          return [];
                      }

                      const previousKey = key[key.length - 1];
                      const isSwitch =
                          dictKey === expectedSwitchedChar &&
                          nextChar === previousKey;

                      if (isSwitch) {
                          return getAllMatches(subdict, text, index + 1, {
                              matchedStringLength: matchedStringLength + 1,
                              key: key + dictKey,
                              // Count the two stiched letters as only 1 error
                              errorDistance,
                              // This different letter could reveal to be switched letter
                              expectedSwitchedChar: null
                          });
                      }
                      return getAllMatches(subdict, text, index + 1, {
                          matchedStringLength: matchedStringLength + 1,
                          key: key + dictKey,
                          errorDistance: errorDistance + 1,
                          // This different letter could reveal to be switched letter
                          expectedSwitchedChar: nextChar
                      });
                  })
              );

    return flatten([
        currentMatch,
        exactSpellingMatches,
        ommittedLetterMatches,
        extraLetterMatches,
        differentLetterMatches
    ]);
}

// Memoized
const nextDictKeysCache: Map<Dictionary, Array<string>> = new Map();
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
