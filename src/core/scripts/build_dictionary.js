#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const fileExists = require('file-exists');
const GwentAPI = require('gwent-api-client').default;

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

function fetchCardList() {
  if (fileExists.sync(TMP_PATH)) {
    console.log('Reusing cards found at ', TMP_PATH);
    return Promise.resolve(
      // eslint-disable-next-line
      require(TMP_PATH.slice(0, -5)) // remove .json
    );
  }

  console.log('Fetching cards from API...');
  return GwentAPI.cards.list({ offset: 0, limit: 99999 })
  .then((cards) => {
    fs.writeFileSync(
      TMP_PATH,
      JSON.stringify(cards, null, 2),
    );

    // eslint-disable-next-line no-console
    console.log('Dump updated at ', TMP_PATH);
  });
}

// Fetch cards from API if needed
fetchCardList()
.then((cards) => {
  const cardIndex = {};
  cards.forEach((card) => {
    cardIndex[card.name] = card.href;
  });

  fs.writeFileSync(
    CARDS_PATH,
    JSON.stringify(cardIndex, null, 2),
  );

  // eslint-disable-next-line no-console
  console.log('Wrote ', CARDS_PATH);
})
.catch(console.log);
