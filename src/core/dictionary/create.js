import Immutable from 'seamless-immutable';
import append from './append';

/*
type Dictionary = {
    [string]: Dictionary | true
}
*/

/**
 * @param  {Array<[string, any]>} entries Entries in the dictionary
 * @return {Dictionary} The built dictionary
 */
function create(entries) {
  return entries.reduce(
      (dict, [name, value]) => append(dict, name, value),
       Immutable({}),
   );
}

export default create;
