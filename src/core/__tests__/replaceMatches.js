import test from 'ava';
import replaceMatches from '../replaceMatches';

test('it should replace a match', (t) => {
  const actual = replaceMatches('Hey there!', [
    {
      start: 4,
      end: 9,
      entryKey: 'there',
      entryValue: 'There',
    },
  ], () => 'mate');
  const expected = 'Hey mate!';

  t.is(actual, expected);
});

test('it should replace a different match', (t) => {
  const actual = replaceMatches('Hello world', [
    {
      start: 0,
      end: 5,
      entryKey: 'hello',
      entryValue: 'Hello',
    },
  ], () => 'Hi');
  const expected = 'Hi world';

  t.is(actual, expected);
});

test('it should replace a several matches', (t) => {
  const actual = replaceMatches('Let\'s enjoy the weather, while se still can.', [
    {
      start: 6,
      end: 11,
      entryKey: 'enjoy',
      entryValue: 'Enjoy',
    },
    {
      start: 16,
      end: 23,
      entryKey: 'weather',
      entryValue: 'Weather',
    },
  ], () => 'blabla');
  const expected = 'Let\'s blabla the blabla, while se still can.';

  t.is(actual, expected);
});

test('it should pass the matched value as argument', (t) => {
  const actual = replaceMatches('Let\'s enjoy the weather, while se still can.', [
    {
      start: 6,
      end: 11,
      entryKey: 'enjoy',
      entryValue: 'Enjoy',
    },
    {
      start: 16,
      end: 23,
      entryKey: 'weather',
      entryValue: 'Weather',
    },
  ], (match) => {
    if (match.entryValue === 'Enjoy') {
      return 'appreciate';
    }

    return 'sun';
  });
  const expected = 'Let\'s appreciate the sun, while se still can.';

  t.is(actual, expected);
});
