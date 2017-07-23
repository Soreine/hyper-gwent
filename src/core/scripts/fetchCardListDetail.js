/* eslint-disable no-console */
const GwentAPI = require('gwent-api-client').default;

function fetchCardListDetail(cardList) {
  // One at a time to not be rejected by GwentAPI...
  return cardList.reduce(
    (promise, cardResult) => promise.then(cards =>
      GwentAPI.cards.one(cardResult, { fields: ['variations'] }).then(
        (card) => {
          console.log(card.name);
          return cards.concat([card]);
        },
      ),
    ),
    Promise.resolve([]),
  );
}

module.exports = fetchCardListDetail;
