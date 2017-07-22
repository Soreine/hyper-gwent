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
  const lowcaseText = text.toLowerCase();
  const result = [];

  // Only match after every space character
  let wasSpace = true;
  for (let i = 0; i < lowcaseText.length; i += 1) {
    if (wasSpace) {
      const match = matches(dictionary, lowcaseText, i);
      if (match) {
        result.push(match);

        // Fast forward
        i = match.end - 1;
      }
    }

    wasSpace = /\s/.test(lowcaseText[i]);
  }

  return result;
}

export default findAllMatches;
