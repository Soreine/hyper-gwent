/* global browser */

import 'webextension-polyfill';
import walk from './walk';

browser.storage.sync.get({
  shouldUnderline: true,
}, (options) => {
  walk(options);
});
