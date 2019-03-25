/* @flow */
/*
  Run with babel-node

  Generates the different JSON files that need to be served as an API for the extension to fetch.
*/

import RAW_CARDS from 'gwent-data-release/cards';
import path from 'path';
import fs from 'fs';

import { convertGwentDataReleaseCards, generateDictionary } from '../core/data';
import ALIASES from '../core/data/static/ALIASES';
import IGNORED from '../core/data/static/IGNORED';

console.log('> buildCardsData');

/**
 * Write a JSON file in the public website directory
 */
function writePublicJson(json: Object, filename: string) {
    const pathname = path.join(__dirname, `../dist/website/${filename}`);
    fs.writeFileSync(pathname, JSON.stringify(json));

    console.log(`wrote: ${filename}`);
}

const cards = convertGwentDataReleaseCards(RAW_CARDS, IGNORED);
writePublicJson(cards, 'cards.json');

const cardList = Object.keys(cards).map(key => cards[key]);

const dictionary = generateDictionary(cardList, ALIASES);
writePublicJson(dictionary, 'dictionary.json');
