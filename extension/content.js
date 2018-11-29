// @flow
import browser from 'webextension-polyfill';
import walk from '../core/walk';
// $FlowFixMe
import cardInfoHeader from '../assets/tooltip-header-sprite.png';
// $FlowFixMe
import cardInfoBackground from '../assets/tooltip-text-background.png';

browser.storage.sync
    .get({
        shouldUnderline: true
    })
    .then(options => {
        walk(options, {
            cardInfoHeader: browser.extension.getURL(cardInfoHeader),
            cardInfoBackground: browser.extension.getURL(cardInfoBackground)
        });
    });
