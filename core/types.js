// @flow

export interface Card {
    name: string;
    id: CardID;
    art: CardArt;
    faction: Faction;
    categories: Array<string>;
    info: string;
    infoRaw: string;
    rarity: CardRarity;
}

// Text search algorithm

// Format of dictionary we use to search for specific words.
// It's a trie.
export type Dictionary<T> = {
    // The empty string as a key indicate that the path of characters
    // so far is a word that exists, and has the corresponding value
    ''?: T,
    // Keys are characters
    [string]: Dictionary<T>
};

// A range of matched text
export interface Match<T> {
    start: number;
    end: number;
    // The matched key path in the dictionary
    entryKey: string;
    // The value at the dictionary's entry
    entryValue: T;
}

// Assets packaged in extension
export type ExtensionAssets = {
    // Images
    cardInfoHeader: string,
    cardInfoBackground: string,
    // Fonts
    Gwent: string,
    HalisGRRegular: string,
    HalisGRBold: string
};

// Format of the card data version object that the extension
// will fetch to update
export type VersionJson = {
    // Starts at 1. Incremented everytime the data format breaks
    major: number,
    // Starts at 0. Incremented everytime the data is updated.
    // Back to 0 on every major increment.
    minor: number
};
