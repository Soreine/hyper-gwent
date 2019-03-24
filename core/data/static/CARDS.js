// @flow
import RAW_CARDS from 'gwent-data-release/cards';
import type { Card } from '../../types';
import convertGwentDataReleaseCards from '../convertGwentDataReleaseCards';
import IGNORED from './IGNORED';

const CARDS: {
    [CardID]: Card
} = convertGwentDataReleaseCards(RAW_CARDS, IGNORED);

export default CARDS;
