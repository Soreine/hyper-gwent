// @flow
import CARD_LIST from './CARD_LIST';
import ALIASES from './ALIASES';

import type { Dictionary } from '../types';
import generateDictionary from './generateDictionary';

const DICTIONARY: Dictionary<CardID> = generateDictionary(CARD_LIST, ALIASES);

export default DICTIONARY;
