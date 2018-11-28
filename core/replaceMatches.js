// @flow

import type { Match } from './types';

/*
 * Map all match ranges in the string using the given reducer
 */
function replaceMatches<T>(
    str: string,
    matches: Array<Match<T>>,
    reducer: (Match<T>) => string
): string {
    let acc = str;

    for (let i = 0, diff = 0; i < matches.length; i += 1) {
        const match = matches[i];
        const reducedValue = reducer(match);

        acc =
            acc.substr(0, match.start + diff) +
            reducedValue +
            acc.substr(match.end + diff);

        const originalValueLength = match.end - match.start;
        const reducedValueLength = reducedValue.length;

        diff += reducedValueLength - originalValueLength;
    }

    return acc;
}

export default replaceMatches;
