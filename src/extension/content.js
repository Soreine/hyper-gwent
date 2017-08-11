import browser from 'webextension-polyfill';
import walk from './walk';

browser.storage.sync.get({
  shouldUnderline: true,
}).then((options) => {
  walk(options);
});
