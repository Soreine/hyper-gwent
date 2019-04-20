/* @flow */
/* eslint-disable no-console */
/*
  Run with babel-node

  Generates the different JSON files that need to be served as an API for the extension to fetch.
*/

import RAW_CARDS from 'gwent-data-release/cards';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

import {
    convertGwentDataReleaseCards,
    generateDictionaryEntries
} from '../core/data';
import * as Dictionary from '../core/dictionary';
import ALIASES from '../core/data/static/ALIASES';
import IGNORED from '../core/data/static/IGNORED';
import VERSION from '../core/data/static/VERSION';

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
    await writePublicJson(VERSION, 'version.json');

    const cards = convertGwentDataReleaseCards(RAW_CARDS, IGNORED);
    const cardList = Object.keys(cards).map(key => cards[key]);
    const dictEntries = generateDictionaryEntries(cardList, ALIASES);
    const dictionary = Dictionary.create(dictEntries);

    // Associate data with version to avoid issues when `version.json`
    // and `data.json` are updated with a delay between them
    await writePublicJson({ version: VERSION, cards, dictionary }, 'data.json');
}

main();
