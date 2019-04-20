// @flow
import test from 'ava';
import removeAccents from 'remove-accents';
import DICTIONARY from '../static/DICTIONARY';
import CARD_LIST from '../static/CARD_LIST';
import ALIASES from '../static/ALIASES';
import { contains } from '../../dictionary';
import generateDictionaryEntries from '../generateDictionaryEntries';

test('Dictionary was created successfully', t => {
    t.truthy(DICTIONARY);
});

CARD_LIST.forEach(card => {
    test(`Dictionary contains  "${card.id}": "${card.name}"`, t => {
        const exists = contains(
            DICTIONARY,
            removeAccents(card.name).toLowerCase()
        );

        t.truthy(exists);
    });
});

// There should not be identical entries for different cards
{
    const dictEntries = generateDictionaryEntries(CARD_LIST, ALIASES);

    function countEntries(
        entries: Array<[string, CardID]>
    ): { [string]: CardID[] } {
        return entries.reduce((acc, [name, id]) => {
            const existing = acc[name] || [];
            const existingId = existing[0];
            if (existingId !== id) {
                acc[name] = existing.concat([id]);
            }
            return acc;
        }, {});
    }

    const entryCounts = countEntries(dictEntries);

    Object.keys(entryCounts).forEach(name => {
        test(`No multiple matching cards for name: ${name} ${entryCounts[
            name
        ].join(' ')}`, t => {
            t.is(entryCounts[name].length, 1);
        });
    });
}
