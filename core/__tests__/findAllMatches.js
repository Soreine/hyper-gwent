// @flow
import test from 'ava';
import DICTIONARY from '../data/static/DICTIONARY';
import findAllMatches from '../findAllMatches';
import splitAndMapMatches from '../splitAndMapMatches';

const Mourntart = '132202';
const Foglet = '132301';
const Avallach = '132105';
const CiriDash = '112110';
const Ciri = '112101';
const Regis = '112104';
const Spotter = '162303';
const ArmoredCavalry = '200296';
const Alzur = '113209';
const Gigni = '112102';
const YenneferConjurer = '112113';
const Yennefer = '112108';
const BitingFrost = '113302';
const Schirru = '142108';

/*
 * Yields results that are simpler to test
 */
function listMatches(text: string): string[] {
    const matches = findAllMatches(DICTIONARY, text);
    return splitAndMapMatches(text, matches, {
        mapMatch: (match, s) => s,
        mapNonMatch: s => null
    }).filter(Boolean);
}

test('Should find several exact matches in a text', t => {
    const text = "I have a Grave Hag, a Foglet, and a Avallac'h in my hand";
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'grave hag',
            entryValue: Mourntart,
            errorDistance: 0,
            start: 9,
            end: 18
        },
        {
            entryKey: 'foglet',
            entryValue: Foglet,
            errorDistance: 0,
            start: 22,
            end: 28
        },
        {
            entryKey: "avallac'h",
            entryValue: Avallach,
            errorDistance: 0,
            start: 36,
            end: 45
        }
    ]);
});

test('Should ignore case', t => {
    const text = "I have a grave hag, a foGleT, and a AVALLAC'H in my hand";
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'grave hag',
            entryValue: Mourntart,
            errorDistance: 0,
            start: 9,
            end: 18
        },
        {
            entryKey: 'foglet',
            entryValue: Foglet,
            errorDistance: 0,
            start: 22,
            end: 28
        },
        {
            entryKey: "avallac'h",
            entryValue: Avallach,
            errorDistance: 0,
            start: 36,
            end: 45
        }
    ]);
});

test('Should find longest match', t => {
    const text = 'Ciri: Dash and Ciri';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'ciri: dash',
            entryValue: CiriDash,
            errorDistance: 0,
            start: 0,
            end: 10
        },
        {
            entryKey: 'ciri',
            entryValue: Ciri,
            errorDistance: 0,
            start: 15,
            end: 19
        }
    ]);
});

test('Should match at beginning of words only', t => {
    const text = 'Regis/Regis prefixRegisSuffix, prefixRegis';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 0,
            end: 5
        },
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 6,
            end: 11
        }
    ]);
});

test('Should match until end of words (and not just prefix)', t => {
    const text = 'Regis, RegisSuffix RegisSuffix2';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 0,
            end: 5
        }
    ]);
});

test('Should consider that non-alphabetical characters mark the end of a word', t => {
    const text = "Regis, Regis's, Regis😇 and Regis";
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 0,
            end: 5
        },
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 7,
            end: 12
        },
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 16,
            end: 21
        },
        {
            entryKey: 'regis',
            entryValue: Regis,
            errorDistance: 0,
            start: 28,
            end: 33
        }
    ]);
});

test('Should work around non-alphabetical characters', t => {
    const text = 'Avallach';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'avallach',
            entryValue: Avallach,
            errorDistance: 0,
            start: 0,
            end: 8
        }
    ]);
});

test('Should accept nothing or any non-word character instead of special characters', t => {
    const text =
        'Old Speartip Asleep, Old Speartip: Asleep, Old Speartip:Asleep';
    const matches = listMatches(text);
    t.deepEqual(matches, [
        'Old Speartip Asleep',
        'Old Speartip: Asleep',
        'Old Speartip:Asleep'
    ]);
});

test('Should detect plurals', t => {
    const text = 'Regises, Spotters and Alba Armored Cavalries';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'spotters',
            entryValue: Spotter,
            errorDistance: 0,
            start: 9,
            end: 17
        },
        {
            entryKey: 'alba armored cavalries',
            entryValue: ArmoredCavalry,
            errorDistance: 0,
            start: 22,
            end: 44
        }
    ]);
});

test('Should detect aliases', t => {
    const text = 'Frost, Yen, YenCon, GIGNI and armored cavalries and ADC';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'frost',
            entryValue: BitingFrost,
            errorDistance: 0,
            start: 0,
            end: 5
        },
        {
            entryKey: 'yen',
            entryValue: Yennefer,
            errorDistance: 0,
            start: 7,
            end: 10
        },
        {
            entryKey: 'yencon',
            entryValue: YenneferConjurer,
            errorDistance: 0,
            start: 12,
            end: 18
        },
        {
            entryKey: 'gigni',
            entryValue: Gigni,
            errorDistance: 0,
            start: 20,
            end: 25
        },
        {
            entryKey: 'armored cavalries',
            entryValue: ArmoredCavalry,
            errorDistance: 0,
            start: 30,
            end: 47
        },
        {
            entryKey: 'adc',
            entryValue: Alzur,
            errorDistance: 0,
            start: 52,
            end: 55
        }
    ]);
});

test('Should work around accentuated letters', t => {
    const text = 'Schirru';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'schirru',
            entryValue: Schirru,
            errorDistance: 0,
            start: 0,
            end: 7
        }
    ]);
});

test('Should find longest match with bad case', t => {
    const text = 'ciri dash and ciri';
    const matchedRanges = findAllMatches(DICTIONARY, text);
    t.deepEqual(matchedRanges, [
        {
            entryKey: 'ciri dash',
            entryValue: CiriDash,
            errorDistance: 0,
            start: 0,
            end: 9
        },
        {
            entryKey: 'ciri',
            entryValue: Ciri,
            errorDistance: 0,
            start: 14,
            end: 18
        }
    ]);
});

test('Should tolerate one missing letter', t => {
    const text = 'Yenefer';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Yenefer']);
});

test('Should tolerate one extra letter', t => {
    const text = 'Yenneffer';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Yenneffer']);
});

test('Should tolerate two switched letters', t => {
    const text = 'Yenenfer';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Yenenfer']);
});

test('Should not accept spaces as extra letters', t => {
    const text = 'a Grave Hag';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Grave Hag']);
});

test('Should not accept special characters as extra letters', t => {
    const text = 'Then -Grave Hag-';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Grave Hag']);
});

test('Should NOT tolerate two missing letters', t => {
    const text = 'Yenfer';
    const matches = listMatches(text);
    t.deepEqual(matches, []);
});

test('Should NOT tolerate two extra letter', t => {
    const text = 'Yenneeffer';
    const matches = listMatches(text);
    t.deepEqual(matches, []);
});

test('Should NOT tolerate two switched letters', t => {
    const text = 'Yenenefr';
    const matches = listMatches(text);
    t.deepEqual(matches, []);
});

test('Should NOT tolerate a missing letter and an extra letters', t => {
    const text = 'Yeneffer';
    const matches = listMatches(text);
    t.deepEqual(matches, []);
});

test('Should not prefer mistake over exact match', t => {
    const text = 'Ciri,';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Ciri']);
});

test('Should prefer longer match with mistake', t => {
    const text = 'Ciri: Dach';
    const matches = listMatches(text);
    t.deepEqual(matches, ['Ciri: Dach']);
});
