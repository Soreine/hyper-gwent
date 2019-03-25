/* @flow */
/*
  Run with babel-node

  Generates the different JSON files that need to be served as an API for the extension to fetch.
*/

import RAW_CARDS from 'gwent-data-release/cards';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

import { convertGwentDataReleaseCards, generateDictionary } from '../core/data';
import ALIASES from '../core/data/static/ALIASES';
import IGNORED from '../core/data/static/IGNORED';

console.log('> buildCardsData');

/**
 * Write a JSON file in the public website directory
 */
async function writePublicJson(json: Object, filename: string) {
    const cardsDir = path.join(__dirname, '../dist/cards/');

    await exec(`mkdir -p ${cardsDir}`);

    fs.writeFileSync(path.join(cardsDir, filename), JSON.stringify(json));

    console.log(`wrote: dist/cards/${filename}`);
}

async function main() {
    const cards = convertGwentDataReleaseCards(RAW_CARDS, IGNORED);
    await writePublicJson(cards, 'cards.json');

    const cardList = Object.keys(cards).map(key => cards[key]);
    const dictionary = generateDictionary(cardList, ALIASES);
    await writePublicJson(dictionary, 'dictionary.json');
}

main();
