import test from 'ava';
import ALIASES from '../ALIASES';
import CARDS from '../CARDS.json';

test('Should be defined for every cards', (t) => {
  t.deepEqual(
      Object.keys(ALIASES).sort(),
      Object.keys(CARDS).sort(),
  );
});
