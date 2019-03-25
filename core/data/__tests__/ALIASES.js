// @flow
import test from 'ava';
import ALIASES from '../static/ALIASES';

// Shouldtnot have aliases matching multiple cards
{
    const list = Object.keys(ALIASES).map(id => ({ id, aliases: ALIASES[id] }));

    const aliasCount = list.reduce((acc, { id, aliases }) => {
        aliases.forEach(alias => {
            acc[alias] = acc[alias] || [];
            acc[alias].push(id);
        });

        return acc;
    }, {});

    Object.keys(aliasCount).forEach(alias => {
        test(`No multiple matching cards for alias: ${alias} ${
            aliasCount[alias]
        }`, t => {
            t.is(aliasCount[alias].length, 1);
        });
    });
}