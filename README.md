# hyper-gwent

Chrome extension to preview cards on pages containing GwentⓇ related content.

## Suggesting alternatives for card names

You can suggest new alternate names for cards. The complete list is here: https://github.com/Soreine/hyper-gwent/blob/master/src/core/data/ALIASES.js

These include:

- Acronyms such as "ADC"
- Abbreviations such as "gigni"
- Incomplete names such as "fringilla".

The following don't need to be in this list though:

- Alternate case. For example "cIrI DASH" is automatically handled.
- Plurals. For example "QGs" for Queensguard and "dun banner light cavalries" are automatically handled.
- Alternate accentuation. For example "Schirru" is automatically recognized as Schirrú.

## Installation

1. [Install Node.js](https://nodejs.org/)
2. Install yarn: `npm install yarn --global`

Now, run the following commands to generate the extension code from the sources:

```
yarn
yarn run build
```

The generated code is now available in `dist/chrome` and `dist/firefox`.
Choose the relevant directory in order to load the unpacked extension for development.

Note: you can also build the sources with the regular `npm` command, simply replace `yarn` with `npm`:

```
npm
npm run build
```

## Updating cards

After every Gwent patch release, the cards data need to be updated. Here's how:

- Clear cached data `rm src/core/tmp/cards.json`
- Fetch the new cards list `yarn run dictionary`
- Update the `ALIASES.js` list with missing entries (in the case of new cards).
  You can easily determine differences by running the tests: `yarn run test`. One test checks for missing cards in `ALIASES.js`.
- Check that all tests pass: `yarn run test`.
- Commit the updated data.

## Releasing a new version

To release a new version:

- Make sure all tests pass `yarn run test`.
- Determine the new version number (using SEMVER) and update `CHANGELOG.md`
- Set the new version in `manifest.json`
- Build `yarn run build` and test extensions locally (Chrome and Firefox).
- Release on Chrome (ask @Soreine)
  - `yarn run pack`
  - Upload `chrome.zip` to the Chrome Web Store.
- Release on Firefox (ask @Zhouzi)
  - `yarn run pack`
  - Upload `firefox.zip` to the Firefox store.
