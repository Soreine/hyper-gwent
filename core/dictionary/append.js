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
    let result = dictionary;

    if (name === '') {
        return Immutable.set(result, '', value);
    }
    const char = name.slice(0, 1);

    const possibleChars = [char];
    if (isSpecialCharacter(char)) {
        // Allow skipping special characters...
        result = append(result, name.slice(1), value);

        // ...or having a space instead
        possibleChars.push(' ');
    }

    return possibleChars.reduce((res: Dictionary<T>, c) => {
        const subDict = res[c] || Immutable({});
        const updatedSubDict = append(subDict, name.slice(1), value);
        return Immutable.set(res, c, updatedSubDict);
    }, result);
}

function isSpecialCharacter(char: string): boolean {
    return /[^\s\w]/.test(char);
}

export default append;
