import test from 'ava';
import ALIASES from '../ALIASES';
import CARDS from '../CARDS.json';

test('Should be defined for every cards', t => {
    t.deepEqual(Object.keys(ALIASES).sort(), Object.keys(CARDS).sort());
});

test('Should be lowercase', t => {
    Object.keys(ALIASES).forEach(key => {
        const aliases = ALIASES[key];
        aliases.forEach(alias => t.true(alias.toLowerCase() === alias));
    });
});
