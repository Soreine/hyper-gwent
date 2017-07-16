#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fileExists = require('file-exists');
const GwentAPI = require('gwent-api-client').default;

const TMP_DIR = path.join(__dirname, '../tmp/');
const CARDS_PATH = path.join(__dirname, '../tmp/source.json');
const NAMES_PATH = path.join(__dirname, '../dictionary/NAMES.json');

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

Promise.resolve()
// Fetch cards from API if needed
.then(() => {
  if (fileExists.sync(CARDS_PATH)) {
    // eslint-disable-next-line
    return require(CARDS_PATH.slice(0, -5) /* remove .json */);
  }

  return GwentAPI.cards.list({ offset: 0, limit: 99999 })
      .then(res => Promise.all(res.results.map(GwentAPI.cards.one)))
      .then((cards) => {
        try {
          fs.mkdirSync(TMP_DIR);
        } catch (e) {
          // Already exists
        }

        fs.writeFileSync(
              CARDS_PATH,
              JSON.stringify(cards, null, 2),
          );

        return cards;
      });
})
.then((cards) => {
  const dictionary = cards.map(card => card.name);

  fs.writeFileSync(
      NAMES_PATH,
      JSON.stringify(dictionary, null, 2),
  );

  // eslint-disable-next-line no-console
  console.log('Wrote\n', TMP_DIR, '\n', NAMES_PATH);
});
