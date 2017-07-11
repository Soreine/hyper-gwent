import test from 'ava';
import DICTIONARY from '../dictionary';
import findAllMatches from '../findAllMatches';

test('Should find several matches in a text', (t) => {
  const text = 'I have a grave hag, a Foglet, and a Avallac’h in my hand';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      end: 18,
      match: 'grave hag',
      start: 9,
    },
    {
      end: 28,
      match: 'foglet',
      start: 22,
    },
    {
      end: 45,
      match: 'avallac’h',
      start: 36,
    },
  ]);
});
