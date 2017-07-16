import test from 'ava';
import replaceMatches from '../replaceMatches';

test('it should replace a match', (t) => {
  const actual = replaceMatches('Hey there!', [
    {
      start: 4,
      end: 9,
      match: 'there',
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
      match: 'Hello',
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
      match: 'enjoy',
    },
    {
      start: 16,
      end: 23,
      match: 'weather',
    },
  ], () => 'blabla');
  const expected = 'Let\'s blabla the blabla, while se still can.';

  t.is(actual, expected);
});

test('it should pass the match as argument', (t) => {
  const actual = replaceMatches('Let\'s enjoy the weather, while se still can.', [
    {
      start: 6,
      end: 11,
      match: 'enjoy',
    },
    {
      start: 16,
      end: 23,
      match: 'weather',
    },
  ], (match) => {
    if (match.match === 'enjoy') {
      return 'appreciate';
    }

    return 'sun';
  });
  const expected = 'Let\'s appreciate the sun, while se still can.';

  t.is(actual, expected);
});
