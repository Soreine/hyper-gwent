// @flow
import type { Card, CardJSON } from './types';

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

export default parseCard;
