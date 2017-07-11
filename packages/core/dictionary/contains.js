/**
 * @param  {Dictionary} dictionary The dictionary to search in
 * @param  {string} word The word to search for an exact match
 * @return {boolean} True if the name was matched exactly
 */
function contains(dictionary, word) {
  if (word === '') {
    return dictionary[''];
  }
  const subDict = dictionary[word[0]];
  return subDict && contains(subDict, word.slice(1));
}

export default contains;
