// @flow
import Immutable from 'seamless-immutable';
import append from './append';

import type { Dictionary } from '../types';

/**
 * @param  {Array<[string, any]>} entries Entries in the dictionary
 * @return {Dictionary} The built dictionary
 */
function create(entries): Dictionary {
    return entries.reduce(
        (dict, [name, value]) => append(dict, name, value),
        Immutable({})
    );
}

export default create;
