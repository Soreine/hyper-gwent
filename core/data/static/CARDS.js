// @flow
import RAW_CARDS from 'gwent-data-release/cards';
import IGNORED from '../IGNORED';
import type { Card } from '../../types';
import parseCard from '../parseCard';

const CARDS: {
    [CardID]: Card
} = {};

Object.keys(RAW_CARDS).forEach(key => {
    const card = parseCard(RAW_CARDS[key]);
    if (!IGNORED[card.id]) {
        CARDS[card.id] = card;
    }
});

export default CARDS;
