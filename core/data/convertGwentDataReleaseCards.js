// @flow
import type { Card } from '../types';

/**
 * Extract cards data from gwent-data-release to the format
 * used by hyper-gwent
 */
function convertGwentDataReleaseCards(
    // JSON from gwent-data-release
    inputCardsJson: { [key: string]: CardJSON },
    // List of card id to skip
    ignored: {
        [CardID]: true
    }
) {
    const cards: { [CardID]: Card } = {};

    Object.keys(inputCardsJson).forEach(key => {
        const card = parseCard(inputCardsJson[key]);
        if (!ignored[card.id]) {
            cards[card.id] = card;
        }
    });

    return cards;
}

function parseCard(cardJson: CardJSON): Card {
    const { ingameId: id, faction, categories } = cardJson;
    const variation = cardJson.variations[`${cardJson.ingameId}00`];
    const { rarity, art } = variation;
    const name = cardJson.name['en-US'];
    const info = cardJson.info['en-US'];
    const infoRaw = cardJson.infoRaw['en-US'];

    return {
        name,
        id,
        info,
        infoRaw,
        rarity,
        art,
        faction,
        categories
    };
}

export default convertGwentDataReleaseCards;
