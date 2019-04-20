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
import { loadOptions, type Options } from './options';
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
    // Callback to stop execution when the extension is executing
    let stopCurrentExecution = null;
    let cards = null;
    let dictionary = null;

    // Make sure the extension is running, or is stopped,
    // depending on current options and URL
    async function updateExecution() {
        const options = await loadOptions();
        const currentUrl = window.location.href;

        if (
            !isUrlAccepted(
                currentUrl,
                options.enabledSites,
                options.disabledSites
            )
        ) {
            interrupt();
        } else {
            start(options);
        }
    }

    // Interrupt any current execution
    function interrupt() {
        if (stopCurrentExecution) {
            stopCurrentExecution();
            stopCurrentExecution = null;
        }
    }

    async function start(options: Options) {
        if (stopCurrentExecution) {
            // Already running
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

        stopCurrentExecution = watch(
            window.document.body,
            {
                cards,
                dictionary,
                assets: ASSETS
            },
            { ...options }
        );
    }

    updateExecution();

    // on URL change
    onHistoryChange(updateExecution);
    // on options change
    browser.storage.onChanged.addListener(updateExecution);
}

// Callback whenever the history changes and window.location could have changed.
function onHistoryChange(callback) {
    browser.runtime.onMessage.addListener(message => {
        if (message === 'hyper-gwent/history-changed') {
            callback();
        }
    });
}

init();
