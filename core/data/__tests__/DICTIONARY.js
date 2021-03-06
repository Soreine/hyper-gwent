// @flow
import expect from 'expect';
import removeAccents from 'remove-accents';
import DICTIONARY from '../static/DICTIONARY';
import CARD_LIST from '../static/CARD_LIST';
import CARDS from '../static/CARDS';
import ALIASES from '../static/ALIASES';
import { contains } from '../../dictionary';
import generateDictionaryEntries from '../generateDictionaryEntries';

test('Dictionary was created successfully', () => {
    expect(DICTIONARY).toBeTruthy();
});

// All cards are listed
CARD_LIST.forEach(card => {
    test(`Dictionary contains  "${card.id}": "${card.name}"`, () => {
        const exists = contains(
            DICTIONARY,
            removeAccents(card.name).toLowerCase()
        );
        expect(exists).toBeTruthy();
    });
});

// No extra cards are listed
Object.keys(ALIASES).forEach(id => {
    test(`Card "${id}" still exists"`, () => {
        const exists = CARDS[id];
        expect(exists).toBeTruthy();
    });
});

// There should not be identical entries for different cards
{
    const DICTIONARY_ENTRIES = generateDictionaryEntries(CARD_LIST, ALIASES);

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

    const entryCounts = countEntries(DICTIONARY_ENTRIES);

    Object.keys(entryCounts).forEach(name => {
        test(`No multiple matching cards for name: ${name} ${entryCounts[
            name
        ].join(' ')}`, () => {
            expect(entryCounts[name].length).toEqual(1);
        });
    });
}
