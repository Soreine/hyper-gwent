import test from 'ava';
import removeAccents from 'remove-accents';
import DICTIONARY, { contains, matches } from '..';
import { NAMES } from '../../data';

test('Dictionary was created successfully', t => {
    t.truthy(DICTIONARY);
});

test('Dictionary contains all cards', t => {
    NAMES.forEach(name => {
        const exists = contains(DICTIONARY, removeAccents(name).toLowerCase());

        t.truthy(exists);
    });
});

test('Matches finds longest match', t => {
    ['Ciri', 'Ciri: Dash'].forEach(name => {
        const match = matches(DICTIONARY, name.toLowerCase());
        t.deepEqual(match, {
            start: 0,
            end: name.length,
            entryKey: name.toLowerCase(),
            entryValue: name
        });
    });
});
