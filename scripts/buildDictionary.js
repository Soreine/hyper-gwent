#!/usr/bin/env node
/* eslint-disable no-console */

require('isomorphic-fetch');

const fs = require('fs');
const path = require('path');
const pathExists = require('path-exists');
const hash = require('object-hash');
const ora = require('ora');
const GwentAPI = require('gwent-api-client').default;

const OUT_DIR = path.join(__dirname, '../dist/website');
const CARDS_PATH = path.join(OUT_DIR, './cards.json');
const VERSION_PATH = path.join(OUT_DIR, './version.json');
const spinner = ora().start();

Promise.resolve(pathExists(OUT_DIR))
    .then(exists => {
        if (!exists) {
            throw new Error(
                'The website must be built before creating the dump, run `yarn run build:website`'
            );
        }
    })
    .then(() => {
        spinner.text = 'Fetching cards from the Gwent API...';
        return GwentAPI.cards({ offset: 0, limit: 9999 });
    })
    .then(({ results }) => results)
    .then(cards =>
        cards.reduce(
            (promise, card, index) =>
                promise.then(acc =>
                    GwentAPI.one(card, {
                        fields: ['variations']
                    }).then(fullCard => {
                        spinner.text = `Downloading the cards: ${index}/${
                            cards.length
                        }`;
                        return acc.concat([fullCard]);
                    })
                ),
            Promise.resolve([])
        )
    )
    .then(cards => {
        spinner.text = 'Reducing cards disk size...';
        return cards.map(({ name, info, variations }) => ({
            name,
            info,
            variations
        }));
    })
    .then(cards => {
        spinner.text = 'Creating cards version...';
        fs.writeFileSync(
            VERSION_PATH,
            JSON.stringify({ version: hash.MD5(cards) })
        );
        spinner.succeed(`Version created: ${VERSION_PATH}`);

        return cards;
    })
    .then(cards => {
        spinner.text = 'Creating dump...';

        const cardIndex = cards.reduce(
            (acc, card) =>
                Object.assign(acc, {
                    [card.name]: card
                }),
            {}
        );
        fs.writeFileSync(CARDS_PATH, JSON.stringify(cardIndex));

        spinner.succeed(`Dump created: ${CARDS_PATH}`);
    })
    .catch(err => {
        spinner.fail(err.message);
        process.exit(1);
    });
