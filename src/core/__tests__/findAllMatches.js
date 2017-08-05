import test from 'ava';
import DICTIONARY from '../dictionary';
import findAllMatches from '../findAllMatches';

test('Should find several exact matches in a text', (t) => {
  const text = 'I have a Grave Hag, a Foglet, and a Avallac\'h in my hand';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'grave hag',
      entryValue: 'Grave Hag',
      start: 9,
      end: 18,
    },
    {
      entryKey: 'foglet',
      entryValue: 'Foglet',
      start: 22,
      end: 28,
    },
    {
      entryKey: 'avallac\'h',
      entryValue: 'Avallac\'h',
      start: 36,
      end: 45,
    },
  ]);
});

test('Should ignore case', (t) => {
  const text = 'I have a grave hag, a foGleT, and a AVALLAC\'H in my hand';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'grave hag',
      entryValue: 'Grave Hag',
      start: 9,
      end: 18,
    },
    {
      entryKey: 'foglet',
      entryValue: 'Foglet',
      start: 22,
      end: 28,
    },
    {
      entryKey: 'avallac\'h',
      entryValue: 'Avallac\'h',
      start: 36,
      end: 45,
    },
  ]);
});

test('Should find longest match', (t) => {
  const text = 'Ciri: Dash and Ciri';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'ciri: dash',
      entryValue: 'Ciri: Dash',
      start: 0,
      end: 10,
    },
    {
      entryKey: 'ciri',
      entryValue: 'Ciri',
      start: 15,
      end: 19,
    },
  ]);
});

test('Should match at beginning of words only', (t) => {
  const text = 'Regis/Regis prefixRegisSuffix, prefixRegis'; // Contains Regis
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 0,
      end: 5,
    },
    {
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 6,
      end: 11,
    },
  ]);
});

test('Should match until end of words (and not just prefix)', (t) => {
  const text = 'Regis, RegisSuffix RegisSuffix2'; // Contains Regis
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'regis',
      entryValue: 'Regis',
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
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 0,
      end: 5,
    },
    {
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 7,
      end: 12,
    }, {
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 16,
      end: 21,
    }, {
      entryKey: 'regis',
      entryValue: 'Regis',
      start: 28,
      end: 33,
    },
  ]);
});

test('Should detect plurals', (t) => {
  const text = 'Regises, Queensguards and Dun Banner Light Cavalries';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'queensguards',
      entryValue: 'Queensguard',
      start: 9,
      end: 21,
    }, {
      entryKey: 'dun banner light cavalries',
      entryValue: 'Dun Banner Light Cavalry',
      start: 26,
      end: 52,
    },
  ]);
});

test('Should detect aliases', (t) => {
  const text = 'Frost, Yen, YenCon, QG and light cavalries, Schirru';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'frost',
      entryValue: 'Biting Frost',
      start: 0,
      end: 5,
    }, {
      entryKey: 'yen',
      entryValue: 'Yennefer',
      start: 7,
      end: 10,
    }, {
      entryKey: 'yencon',
      entryValue: 'Yennefer: The Conjurer',
      start: 12,
      end: 18,
    }, {
      entryKey: 'qg',
      entryValue: 'Queensguard',
      start: 20,
      end: 22,
    }, {
      entryKey: 'light cavalries',
      entryValue: 'Dun Banner Light Cavalry',
      start: 27,
      end: 42,
    },
  ]);
});

test('Should work around accentuated letters', (t) => {
  const text = 'Schirru';
  const matchedRanges = findAllMatches(DICTIONARY, text);
  t.deepEqual(matchedRanges, [
    {
      entryKey: 'schirru',
      entryValue: 'Schirrú',
      start: 0,
      end: 7,
    },
  ]);
});
