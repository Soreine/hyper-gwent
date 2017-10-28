require('isomorphic-fetch');
const GwentAPI = require('gwent-api-client').default;

function fetchCardList() {
  return GwentAPI.cards({ offset: 0, limit: 99999 })
  .then(({ results }) => results);
}

module.exports = fetchCardList;
