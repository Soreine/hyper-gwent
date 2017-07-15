import Immutable from 'seamless-immutable';

/**
 * @param  {Dictionary} dictionary The dictionary to append to
 * @param  {string} name Name to add to the dictionary
 * @return {Dictionary}  A dictionary with the added entry
 */
function append(dictionary, name) {
  const result = dictionary;

  if (name === '') {
    return Immutable.set(result, '', true);
  }
  const char = name.slice(0, 1);
  const subDict = result[char] || Immutable({});
  const updatedSubDict = append(subDict, name.slice(1));
  return Immutable.set(result, char, updatedSubDict);
}

export default append;
