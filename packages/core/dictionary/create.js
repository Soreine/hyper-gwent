import Immutable from 'seamless-immutable';
import append from './append';

/*
type Dictionary = {
    [string]: Dictionary | true
}
*/

/**
 * @param  {Array<string>} names Entries in the dictionary
 * @return {Dictionary} The built dictionary
 */
function create(names) {
  return names.reduce(append, Immutable({}));
}

export default create;
