/**
 * Find the longest match at the given index in the text
 * @param  {Dictionary} dictionary
 * @param  {string} text
 * @param  {number} [index=0]
 * @return {string | undefined} Maybe the key of the found match
 */
function matches(dictionary, text, index = 0, matchedString = '') {
  const nextChar = text[index];
  const endOfWord = nextChar === undefined || !/\w/.test(nextChar);
  // Have we found a match yet?
  const isMatch = dictionary[''] && (endOfWord);

  if (nextChar === undefined) {
    return isMatch && matchedString;
  }

  const subDict = dictionary[nextChar];
  if (!subDict) {
    return isMatch && matchedString;
  }

  const longerMatch = matches(subDict, text, index + 1, matchedString + nextChar);
  // We want the longest match, or the current match
  return longerMatch || (isMatch && matchedString);
}

export default matches;
