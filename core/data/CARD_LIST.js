// @flow
import type { Card } from '../types';
import CARDS from './CARDS';

const CARD_LIST: Card[] = Object.keys(CARDS).map(key => CARDS[key]);

export default CARD_LIST;
