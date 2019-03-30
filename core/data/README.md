The data necessary for the core of the extension to work are:

- **The card list (`Card[]`)**
  This can be generated from the raw `gwent-data-release/cards.json`

- **The dictionary of card name and aliases (`Dictionary<CardID>`)**.
  This one can be generated from the list of cards and a list of aliases.
