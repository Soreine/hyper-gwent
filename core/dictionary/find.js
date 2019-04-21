// @flow
import type { Dictionary } from '../types';

/**
 * Returns the value stored for the given substring
 */
function find<T>(
    // The dictionary to search in
    dictionary: Dictionary<T>,
    // The text to search for a substring match
    text: string,
    // The index of the start of the substring
    index: number = 0
): ?T {
    const char = text[index];
    if (char === undefined) {
        return dictionary[''];
    }
    const subDict = dictionary[char];
    return subDict && find(subDict, text, index + 1);
}

export default find;
