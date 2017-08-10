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


## Contribute

Install dependencies

```
yarn
```

Start by building the extension:

```
yarn run build
```

To add the development version of the extension:
- In Chrome go to More Tools > Extensions.
- Enable developer mode and click "Load unpacked extension..."
- Select `dist/` in repository folder

The extension should now be installed. To reload the extension from the sources, simply refresh the "Extensions" page. You can also click on "Reload".
