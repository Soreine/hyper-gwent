require('isomorphic-fetch');
const GwentAPI = require('gwent-api-client').default;

function fetchCardListDetail(cardList) {
    // One at a time to not be rejected by GwentAPI...
    return cardList.reduce(
        (promise, cardResult) =>
            promise.then(cards =>
                GwentAPI.one(cardResult, {
                    fields: ['variations']
                }).then(card => cards.concat([card]))
            ),
        Promise.resolve([])
    );
}

module.exports = fetchCardListDetail;
