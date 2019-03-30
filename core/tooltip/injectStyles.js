/* @flow */
/* global window */
/* @jsx createElement */
// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import type { ExtensionAssets } from '../types';
import TooltipCSS from './tooltip.less';

// ID of the <style> tag used by Hyper Gwent
const STYLE_ID = 'hyper-gwent-style';

function fontDeclarations(assets: ExtensionAssets): string {
    return `
@font-face {
    font-family: "Gwent";
    src: url("${assets.Gwent}") format("woff2");
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    text-rendering: optimizeLegibility;
}

@font-face {
    font-family: "HalisGR";
    src: url("${assets.HalisGRRegular}") format("woff2");
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    text-rendering: optimizeLegibility;
}

@font-face {
    font-family: "HalisGR";
    src: url("${assets.HalisGRBold}") format("woff2");
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    text-rendering: optimizeLegibility;
}
`;
}

function cssVariablesDeclarations(assets: ExtensionAssets): string {
    return `
:root {
    --hyperGwent-cardInfoHeader: url("${assets.cardInfoHeader}");
    --hyperGwent-cardInfoBackground: url("${assets.cardInfoBackground}");      
}
`;
}

/*
 * Inject Hyper Gwent styles in the page if it's not done already
 */
function injectStyles(assets: ExtensionAssets) {
    if (window.document.getElementById(STYLE_ID) != null) {
        return;
    }

    window.document.head.appendChild(
        <style type="text/css" id={STYLE_ID}>
            {fontDeclarations(assets)}
            {cssVariablesDeclarations(assets)}
            {TooltipCSS.toString()}
        </style>
    );
}

export default injectStyles;
