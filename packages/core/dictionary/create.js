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
  const dict = {};
  names.reduce(append, dict);
  return dict;
}

export default create;
