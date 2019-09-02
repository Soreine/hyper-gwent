/* @flow */
/* eslint-disable no-console */
/*
  Run with babel-node

  Log the list of new (missing) cards to be added in ALIASES.js
*/

import RAW_CARDS from 'gwent-data-release/cards';

import { convertGwentDataReleaseCards } from '../core/data';
import ALIASES from '../core/data/static/ALIASES';
import IGNORED from '../core/data/static/IGNORED';

function printAliasesEntry(card) {
    console.log(`'${card.id}': ['${card.name}'],`);
}

const cards = convertGwentDataReleaseCards(RAW_CARDS, IGNORED);
const cardList = Object.keys(cards).map(key => cards[key]);
const missingCardsList = cardList.filter(
    card => !ALIASES[card.id] || IGNORED[card.id]
);

missingCardsList.forEach(printAliasesEntry);
