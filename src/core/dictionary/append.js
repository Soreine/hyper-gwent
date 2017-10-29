import Immutable from 'seamless-immutable';

/**
 * @param  {Dictionary} dictionary The dictionary to append to
 * @param  {string} name Entry name to add to the dictionary
 * @param  {any} value Value to store at the given entry
 * @return {Dictionary}  A dictionary with the added entry
 */
function append(dictionary, name, value) {
    const result = dictionary;

    if (name === '') {
        return Immutable.set(result, '', value);
    }
    const char = name.slice(0, 1);
    const subDict = result[char] || Immutable({});
    const updatedSubDict = append(subDict, name.slice(1), value);
    return Immutable.set(result, char, updatedSubDict);
}

export default append;
