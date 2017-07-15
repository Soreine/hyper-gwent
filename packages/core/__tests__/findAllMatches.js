import test from 'ava';
import DICTIONARY from '../dictionary';
import findAllMatches from '../findAllMatches';

test('Should find several exact matches in a text', (t) => {
  const text = 'I have a Grave Hag, a Foglet, and a Avallac’h in my hand';
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

test('Should ignore case', (t) => {
  const text = 'I have a grave hag, a foGleT, and a AVALLAC’H in my hand';
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

test('Should ignore whitespaces and special characters', (t) => {
  const text = 'I have a gravehag, a Fog let, and a Avallach in my hand';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      end: 17,
      match: 'grave hag',
      start: 9,
    },
    {
      end: 28,
      match: 'foglet',
      start: 21,
    },
    {
      end: 44,
      match: 'avallac’h',
      start: 36,
    },
  ]);
});
