/**
 * @param  {Dictionary} dictionary The dictionary to append to
 * @param  {string} name Name to add to the dictionary
 * @return {Dictionary}  The mutated dictionary
 */
function append(dictionary, name) {
  const result = dictionary;
  const char = name[0];

  if (name.length === 1) {
    result[char] = true;
  } else {
    result[char] = result[char] || {};
    append(result[char], name.slice(1));
  }
}

export default append;
