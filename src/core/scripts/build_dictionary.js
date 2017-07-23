#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const fileExists = require('file-exists');

const fetchCardList = require('./fetchCardList');
const fetchCardListDetail = require('./fetchCardListDetail');

const TMP_PATH = path.join(__dirname, '../tmp/cards.json');
const CARDS_PATH = path.join(__dirname, '../data/CARDS.json');


/*
type Card = {
    categories: [
        {
            href: string,
            name: string
        }
    ],
    faction: {
        href: string,
        name: string
    },
    flavor: string,
    group: {
        href: string,
        name: string
    },
    href: string,
    info: string,
    name: string,
    positions: string[],
    strength: number,
    uuid: string,
    variations: [
        {
            availability: string,
            href: string,
            rarity: {
                href: string,
                name: string
            }
        }
    ]
}
*/

// Fetch cards from API if needed
Promise.resolve()
.then(() => {
  if (fileExists.sync(TMP_PATH)) {
    console.log('Reusing cards found at ', TMP_PATH);
    return Promise.resolve(
      // eslint-disable-next-line
      require(TMP_PATH.slice(0, -5)) // remove .json
    );
  }

  return fetchCardList()
  .then(fetchCardListDetail)
  .then((cards) => {
    fs.writeFileSync(
      TMP_PATH,
      JSON.stringify(cards, null, 2),
    );
    // eslint-disable-next-line no-console
    console.log('Dump updated at ', TMP_PATH);

    return cards;
  });
})
.then((cards) => {
  const cardIndex = {};
  cards.forEach((card) => {
    cardIndex[card.name] = card;
  });

  fs.writeFileSync(
    CARDS_PATH,
    JSON.stringify(cardIndex, null, 2),
  );

  // eslint-disable-next-line no-console
  console.log('Wrote ', CARDS_PATH);
})
.catch(console.log);
