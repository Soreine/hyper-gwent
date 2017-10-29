/**
 * @param  {Dictionary} dictionary The dictionary to search in
 * @param  {string} text The text to search for a substring match
 * @param  {number} index The index of the start of the substring
 * @return {boolean} True if the dictionary contains the substring
 */
function contains(dictionary, text, index = 0) {
    const char = text[index];
    if (char === undefined) {
        return dictionary[''];
    }
    const subDict = dictionary[char];
    return subDict && contains(subDict, text, index + 1);
}

export default contains;
