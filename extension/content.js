// @flow
import browser from 'webextension-polyfill';
import walk from '../core/walk';

browser.storage.sync
    .get({
        shouldUnderline: true
    })
    .then(options => {
        walk(options, {
            // cardFrame: browser.extension.getURL(cardFrame)
        });
    });
