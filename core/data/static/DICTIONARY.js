// @flow
import CARD_LIST from './CARD_LIST';
import ALIASES from './ALIASES';

import type { Dictionary } from '../../types';
import generateDictionaryEntries from '../generateDictionaryEntries';
import { create } from '../../dictionary';

const DICTIONARY: Dictionary<CardID> = create(
    generateDictionaryEntries(CARD_LIST, ALIASES)
);

export default DICTIONARY;
