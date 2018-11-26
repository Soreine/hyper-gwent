// @flow
import RAW_CARDS from 'gwent-data-release/cards';

import type { Card } from '../types';
import parseCard from './parseCard';

const CARDS: {
    [CardID]: Card
} = {};

Object.keys(RAW_CARDS).forEach(key => {
    const card = parseCard(RAW_CARDS[key]);
    CARDS[card.id] = card;
});

export default CARDS;
