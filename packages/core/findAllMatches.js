import { matches } from './dictionary';

/*
type Match = {
    start: number,
    end: number,
    // The matched key path in the dictionary
    key: string
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

  for (let i = 0; i < lowcaseText.length; i += 1) {
    const match = matches(dictionary, lowcaseText, i);
    if (match) {
      const end = i + match.length;
      result.push({
        start: i,
        end,
        match,
      });

      i = end - 1;
    }
  }

  return result;
}

export default findAllMatches;
