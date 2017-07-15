import test from 'ava';
import DICTIONARY, { contains, matches } from '../';
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

test('Matches finds longest match', (t) => {
  [
    'Ciri',
    'Ciri: Dash',
  ]
  .map(name => name.toLowerCase())
  .forEach((name) => {
    const match = matches(DICTIONARY, name);
    t.is(match, name);
  });
});
