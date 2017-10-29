import removeAccents from 'remove-accents';
import { matches } from './dictionary';

/*
type Match = {
    start: number,
    end: number,
    // The matched key path in the dictionary
    entryKey: string
    // The exact name of the card matched
    entryValue: string
}
*/

/**
 * @param  {Dictionary} dictionary
 * @param  {string} text
 * @return {Array<Match>} The ranges of matched text.
 */
function findAllMatches(dictionary, text) {
    const cleanText = removeAccents(text).toLowerCase();
    const result = [];

    // Only match at beginning of words
    let wasNotWord = true;
    for (let i = 0; i < cleanText.length; i += 1) {
        const isWord = /\w/.test(cleanText[i]);
        if (wasNotWord && isWord) {
            const match = matches(dictionary, cleanText, i);
            if (match) {
                result.push(match);

                // Fast forward
                i = match.end - 1;
            }
        }

        wasNotWord = /[^\w]/.test(cleanText[i]);
    }

    return result;
}

export default findAllMatches;
