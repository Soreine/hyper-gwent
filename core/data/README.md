The data necessary for the core of the extension to work are:

- **The card list (`Card[]`)**
  This can be generated from the raw `gwent-data-release/cards.json`

- The index of card name aliases (`{ [CardID]: Array<string> }`).
  This one must be maintained manually. It can be empty (no aliases will be considered).
