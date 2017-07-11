import test from 'ava';
import DICTIONARY, { contains } from '../';
import NAMES from '../NAMES.json';

test('Dictionary was created successfully', (t) => {
  t.truthy(DICTIONARY);
});

test('Dictionary contains all cards', (t) => {
  NAMES.forEach((name) => {
    const exists = contains(DICTIONARY, name.toLowerCase());
    t.true(exists);
  });
});
