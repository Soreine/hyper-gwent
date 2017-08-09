/* global chrome */

import walk from './walk';

chrome.storage.sync.get({
  shouldUnderline: true,
}, (options) => {
  walk(options);
});
