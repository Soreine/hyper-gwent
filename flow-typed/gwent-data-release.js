// @flow
declare type Faction =
    | 'Neutral'
    | 'Skellige'
    | 'Northern Realms'
    | 'Monster'
    | 'Nilfgaard'
    | 'Scoiatael';

declare type Translations<T> = {
    'de-DE': T,
    'en-US': T,
    'es-ES': T,
    'es-MX': T,
    'fr-FR': T,
    'it-IT': T,
    'ja-JP': T,
    'ko-KR': T,
    'pl-PL': T,
    'pt-BR': T,
    'ru-RU': T,
    'zh-CN': T,
    'zh-TW': T
};

declare type CardID = string;
// The VariationID for a card seems to always be CardID + '00'
declare type VariationID = string;

declare type CardArt = {
    ingameArtId: string,
    high: string,
    low: string,
    medium: string,
    original: string,
    thumbnail: string
};

declare type CardRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

declare type CardJSON = {
    artist: string,
    // cardType: 'Unit',
    categories: string[],
    // categoryIds: ['card_category_31'],
    faction: Faction,
    // flavor:
    info: Translations<string>,
    infoRaw: Translations<string>,
    ingameId: CardID,
    // keywords: [],
    // loyalties: ['Loyal'],
    name: Translations<string>,
    // positions: ['Melee', 'Ranged', 'Siege'],
    provision: number,
    related: CardID[],
    released: boolean,
    strength: number,
    type: 'Gold' | 'Bronze',
    variations: {
        [VariationID]: {
            art: CardArt,
            // availability: 'BaseSet',
            // collectible: true,
            // craft:
            // mill:
            rarity: CardRarity,
            variationId: VariationID
        }
    }
};

declare module 'gwent-data-release/cards' {
    declare export default { [key: string]: CardJSON };
}
