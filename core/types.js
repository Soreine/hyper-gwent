// @flow

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
export type Match<T> = {
    start: number,
    end: number,
    // The matched key path in the dictionary
    entryKey: string,
    // The value at the dictionary's entry
    entryValue: T
};

// Assets packaged in extension
export type ExtensionAssets = {
    images: {
        cardInfoHeader: string,
        cardInfoBackground: string
    },
    fonts: {
        Gwent: string,
        HalisGRRegular: string,
        HalisGRBold: string
    }
};
