/* global window */
// @flow
import browser from 'webextension-polyfill';
import { watch } from '../core';
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

import retrieveCardsData from './retrieveCardsData';
import { loadOptions } from './options';
import { isUrlAccepted } from './sitelist';

const ASSETS = {
    cardInfoHeader: browser.extension.getURL(cardInfoHeader),
    cardInfoBackground: browser.extension.getURL(cardInfoBackground),
    Gwent: browser.extension.getURL(Gwent),
    HalisGRRegular: browser.extension.getURL(HalisGRRegular),
    HalisGRBold: browser.extension.getURL(HalisGRBold)
};

const WEBSITE = 'https://soreine.github.io/hyper-gwent';
const VERSION_SRC = `${WEBSITE}/version.json`;
const CARDS_SRC = `${WEBSITE}/cards.json`;
const DICTIONARY_SRC = `${WEBSITE}/dictionary.json`;

async function init() {
    let stopCurrentExecution = null;
    let cards = null;
    let dictionary = null;

    async function runOnCurrentPage() {
        const options = await loadOptions();
        const currentUrl = window.location.href;

        if (
            !isUrlAccepted(
                currentUrl,
                options.enabledSites,
                options.disabledSites
            )
        ) {
            return;
        }

        // Fetch data if needed
        if (!cards || !dictionary) {
            ({ cards, dictionary } = await retrieveCardsData({
                versionSrc: VERSION_SRC,
                cardsSrc: CARDS_SRC,
                dictionarySrc: DICTIONARY_SRC
            }));
        }

        // Interrupt any previous execution
        if (stopCurrentExecution) {
            console.log('Interrupt previous execution');
            stopCurrentExecution();
            stopCurrentExecution = null;
        }

        console.log('Watch current page');
        stopCurrentExecution = watch(
            window.document.body,
            {
                cards,
                dictionary,
                assets: ASSETS
            },
            options
        );
    }

    runOnCurrentPage();

    // on URL change
    onHistoryChange(window.history, runOnCurrentPage);
    // on options change
    browser.storage.onChanged.addListener(runOnCurrentPage);
}

// Callback whenever the history changes and window.location could have changed.
function onHistoryChange(history, callback) {}

init();
