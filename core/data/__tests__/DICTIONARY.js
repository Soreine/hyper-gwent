// @flow
import test from 'ava';
import removeAccents from 'remove-accents';
import DICTIONARY from '../DICTIONARY';
import NAMES from '../NAMES';
import { contains } from '../../dictionary';

test('Dictionary was created successfully', t => {
    t.truthy(DICTIONARY);
});

NAMES.forEach(name => {
    test(`Dictionary contains: ${name}`, t => {
        const exists = contains(DICTIONARY, removeAccents(name).toLowerCase());

        t.truthy(exists);
    });
});
