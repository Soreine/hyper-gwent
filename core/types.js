// @flow

export type Faction =
    | 'Neutral'
    | 'Skellige'
    | 'Northern Realms'
    | 'Monster'
    | 'Nilfgaard'
    | 'Scoiatael';

export type Translations<T> = {
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

export type CardID = string;
// The VariationID for a card seems to always be CardID + '00'
export type VariationID = string;

export type CardArt = {
    ingameArtId: string,
    high: string,
    low: string,
    medium: string,
    original: string,
    thumbnail: string
};

export type CardRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export type CardJSON = {
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

export type Card = {
    name: string,
    id: CardID,
    art: CardArt,
    faction: Faction,
    categories: Array<string>,
    info: string,
    infoRaw: string,
    rarity: CardRarity
};

// Text search algorithm

// Format of dictionary we use to search for specific words.
// It's a trie.
export type Dictionary<T> = {
    // The empty string as a key indicate that the path of characters
    // so far is a word that exist, and has the corresponding value
    ''?: T,
    // Keys are characters
    [string]: Dictionary<T>
};

// A range of matched text
export type Match = {
    start: number,
    end: number,
    // The matched key path in the dictionary
    entryKey: string,
    // The exact name of the card matched
    entryValue: string
};
