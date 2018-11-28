// @flow
import Immutable from 'seamless-immutable';
import append from './append';

import type { Dictionary } from '../types';

/**
 * @param  {Array<[string, any]>} entries Entries in the dictionary
 * @return {Dictionary} The built dictionary
 */
function create<T>(entries: Array<[string, T]>): Dictionary<T> {
    return entries.reduce(
        (dict: Dictionary<T>, [name, value]) => append(dict, name, value),
        Immutable({})
    );
}

export default create;
