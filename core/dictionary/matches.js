/**
 * Find the longest match at the given index in the text
 * @param  {Dictionary} dictionary
 * @param  {string} text
 * @param  {number} [index=0]
 * @param  {string} acc.matchedString the piece of text matched so far
 * @param  {string} acc.key the matched key so far
 * @return {Match | undefined} Maybe the key of the found match
 */
function matches(
    dictionary,
    text,
    index = 0,
    acc = { matchedString: '', key: '' }
) {
    const { matchedString, key } = acc;

    const nextChar = text[index];
    const isSpace = !/\w/.test(nextChar);
    const endOfWord = nextChar === undefined || isSpace;
    // Have we found a match yet?
    const isMatch = dictionary[''] && endOfWord;
    const match = {
        start: index - matchedString.length,
        end: index,
        entryValue: dictionary[''],
        entryKey: key
    };

    if (nextChar === undefined) {
        return isMatch && match;
    }

    const subDict = dictionary[nextChar];
    if (!subDict) {
        return isMatch && match;
    }

    const longerMatch = matches(subDict, text, index + 1, {
        matchedString: matchedString + nextChar,
        key: key + nextChar
    });
    // We want the longest match, or the current match
    return longerMatch || (isMatch && match);
}

export default matches;
