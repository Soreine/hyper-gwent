// @flow
import type { Dictionary } from '../types';
import find from './find';

/**
 * True if the dictionary contains the substring
 */
function contains(
    // The dictionary to search in
    dictionary: Dictionary<any>,
    // The text to search for a substring match
    text: string
): boolean {
    return Boolean(find(dictionary, text));
}

export default contains;
