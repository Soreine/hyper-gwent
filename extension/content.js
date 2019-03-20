// @flow
import browser from 'webextension-polyfill';
import walk from '../core/walk';
// $FlowFixMe
import cardInfoHeader from '../assets/tooltip-header-sprite.png';
// $FlowFixMe
import cardInfoBackground from '../assets/tooltip-text-background.png';
// $FlowFixMe
import Gwent from '../assets/fonts/hinted-GWENT-ExtraBold.woff2';
// $FlowFixMe
import HalisGRRegular from '../assets/fonts/hinted-HalisGR-Regular.woff2';
// $FlowFixMe
import HalisGRBold from '../assets/fonts/hinted-HalisGR-Bold.woff2';

browser.storage.sync
    .get({
        shouldUnderline: true
    })
    .then(options => {
        walk(options, {
            images: {
                cardInfoHeader: browser.extension.getURL(cardInfoHeader),
                cardInfoBackground: browser.extension.getURL(cardInfoBackground)
            },
            fonts: {
                Gwent: browser.extension.getURL(Gwent),
                HalisGRRegular: browser.extension.getURL(HalisGRRegular),
                HalisGRBold: browser.extension.getURL(HalisGRBold)
            }
        });
    });
