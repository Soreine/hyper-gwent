// @flow
import Immutable from 'seamless-immutable';

import type { Dictionary } from '../types';

/**
 * Add an entry to a dictionary
 */
function append<T>(
    //  The dictionary to append to
    dictionary: Dictionary<T>,
    //  Entry name to add to the dictionary
    name: string,
    //  Value to store at the given entry
    value: T
): Dictionary<T> {
    const result = dictionary;

    if (name === '') {
        return Immutable.set(result, '', value);
    }
    const char = name.slice(0, 1);

    const subDict = result[char] || Immutable({});
    const updatedSubDict = append(subDict, name.slice(1), value);
    return Immutable.set(result, char, updatedSubDict);
}

export default append;
