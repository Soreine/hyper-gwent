// @flow

import type { Match } from './types';

/*
 * Split a string according to matches, then map matches and non-matches substrings.
 *
 * For example, if we have a match for `dog` in this string:
 * 'The dog is good',
 * the result split will be
 * ['The ', 'dog', ' is good'],
 * and 'The ' and ' is good' will be mapped as non-matches,
 * and 'dog' will be mapped as a match
 */
function splidAndMapMatches<M, Output>(
    str: string,
    matches: Array<Match<M>>,
    {
        mapMatch,
        mapNonMatch
    }: {
        mapNonMatch: (nonMatchedText: string) => Output,
        mapMatch: (match: Match<M>, matchedText: string) => Output
    }
): Output[] {
    // Keep track of how much of the string we have processed
    let processedChars = 0;

    // The returned array
    const result = [];

    matches.forEach(match => {
        const unmatchedChars = match.start - processedChars;
        if (unmatchedChars > 0) {
            const unmatchedText = str.slice(processedChars, match.start);
            // We have some unmatched chars
            result.push(mapNonMatch(unmatchedText));
        }

        const matchedText = str.slice(match.start, match.end);
        result.push(mapMatch(match, matchedText));

        processedChars = match.end;
    });

    const remainingText = str.slice(processedChars);
    if (remainingText) {
        // We have some unmatched chars at the end
        result.push(mapNonMatch(remainingText));
    }

    return result;
}

export default splidAndMapMatches;
