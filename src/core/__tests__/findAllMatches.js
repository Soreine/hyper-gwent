import test from 'ava';
import DICTIONARY from '../dictionary';
import findAllMatches from '../findAllMatches';

test('Should find several exact matches in a text', (t) => {
  const text = 'I have a Grave Hag, a Foglet, and a Avallac\'h in my hand';
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
      match: 'avallac\'h',
      start: 36,
    },
  ]);
});

test('Should ignore case', (t) => {
  const text = 'I have a grave hag, a foGleT, and a AVALLAC\'H in my hand';
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
      match: 'avallac\'h',
      start: 36,
    },
  ]);
});

test('Should match at beginning of words only', (t) => {
  const text = 'Regis, prefixRegisSuffix, prefixRegis'; // Contains Regis
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      match: 'regis',
      start: 0,
      end: 5,
    },
  ]);
});

test('Should match until end of words (and not just prefix)', (t) => {
  const text = 'Regis, RegisSuffix RegisSuffix2'; // Contains Regis
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      match: 'regis',
      start: 0,
      end: 5,
    },
  ]);
});

test('Should consider that non-alphabetical characters mark the end of a word', (t) => {
  const text = 'Regis, Regis\'s, Regis😇 and Regis'; // Contains Regis
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      match: 'regis',
      start: 0,
      end: 5,
    },
    {
      match: 'regis',
      start: 7,
      end: 12,
    }, {
      match: 'regis',
      start: 16,
      end: 21,
    }, {
      match: 'regis',
      start: 28,
      end: 33,
    },
  ]);
});
