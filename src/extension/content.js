import browser from 'webextension-polyfill';
import walk from './walk';
import cardFrame from '../core/tooltip/card-frame.png';

browser.storage.sync.get({
  shouldUnderline: true,
}).then((options) => {
  walk(options, {
    cardFrame: browser.extension.getURL(cardFrame),
  });
});
