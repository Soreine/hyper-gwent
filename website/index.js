/* global window */
/* @jsx createElement */
// @flow

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import { walk } from '../core';
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

import renderHomepage from './homepage';

// Setup the homepage
async function onLoad() {
    // render
    window.document.body.appendChild(renderHomepage());

    return;
    // fetch card data
    const [cards, dictionary] = await Promise.all([
        fetchJson('./cards.json'),
        fetchJson('./dictionary.json')
    ]);

    // start extension within the page
    walk(
        {
            cards,
            dictionary,
            assets: {
                cardInfoHeader,
                cardInfoBackground,
                Gwent,
                HalisGRRegular,
                HalisGRBold
            }
        },
        { shouldUnderline: true }
    );
}

async function fetchJson(src: string): Promise<Object> {
    const response = await window.fetch(src);
    const json = await response.json();
    return json;
}

onLoad();
