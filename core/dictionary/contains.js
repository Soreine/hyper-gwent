// @flow
import type { Dictionary } from '../types';

/**
 * True if the dictionary contains the substring
 */
function contains(
    // The dictionary to search in
    dictionary: Dictionary<any>,
    // The text to search for a substring match
    text: string,
    // The index of the start of the substring
    index: number = 0
) {
    const char = text[index];
    if (char === undefined) {
        return dictionary[''] !== undefined;
    }
    const subDict = dictionary[char];
    return subDict && contains(subDict, text, index + 1);
}

export default contains;
