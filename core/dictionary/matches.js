// @flow

import type { Dictionary, Match } from '../types';

/**
 * Find the longest match at the given index in the text
 */
function matches(
    dictionary: Dictionary,
    text: string,
    index: number = 0,
    acc: {
        // the piece of text matched so far
        matchedString: string,
        // the matched key so far
        key: string
    } = { matchedString: '', key: '' }
): ?Match {
    const { matchedString, key } = acc;

    const nextChar = text[index];
    const isSpace = !/\w/.test(nextChar);
    const endOfWord = nextChar === undefined || isSpace;
    // Have we found a match yet?
    const isMatch = dictionary[''] && endOfWord;
    const match = isMatch
        ? {
              start: index - matchedString.length,
              end: index,
              entryValue: dictionary[''],
              entryKey: key
          }
        : null;

    if (nextChar === undefined) {
        return match;
    }

    const subDict = dictionary[nextChar];
    if (!subDict) {
        return match;
    }

    const longerMatch = matches(subDict, text, index + 1, {
        matchedString: matchedString + nextChar,
        key: key + nextChar
    });
    // We want the longest match, or the current match
    if (longerMatch) {
        return longerMatch;
    }

    return match;
}

export default matches;
