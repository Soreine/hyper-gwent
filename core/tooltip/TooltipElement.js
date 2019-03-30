// @flow
/* @jsx createElement */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import intercalate from 'intercalate';
import flatmap from 'flatmap';

import TooltipCSS from './tooltip.less';
import type { Card, ExtensionAssets } from '../types';

const styles = TooltipCSS.locals;

function TooltipElement({
    card,
    assets,
    lowQualityArt
}: {
    card: Card,
    assets: ExtensionAssets,
    lowQualityArt: boolean
}): HTMLElement {
    return (
        <div className={styles.card}>
            <CardArtImage art={card.art} lowQualityArt={lowQualityArt} />
            <div className={styles.tooltip}>
                <TooltipHeader
                    faction={card.faction}
                    name={card.name}
                    categories={card.categories}
                />
                <TooltipInfo infoRaw={card.infoRaw} />
            </div>
        </div>
    );
}

function CardArtImage({
    art,
    lowQualityArt
}: {
    art: CardArt,
    lowQualityArt: boolean
}): HTMLElement {
    const src = lowQualityArt ? art.thumbnail : art.low;

    return (
        <div className={styles.artFrame}>
            <div className={styles.art} data-art-src={src} />
        </div>
    );
}

/*
 * Tooltip's art is not loaded until shown. Call this on the tooltip
 * before showing it to ensure the card art is loaded.
 */
function loadTooltipArt(tooltipWrapper: HTMLElement) {
    const cardArtImage = tooltipWrapper.querySelector('[data-art-src]');
    if (!cardArtImage) return;

    const artSrc: ?string = cardArtImage.getAttribute('data-art-src');
    if (!artSrc) return;

    if (cardArtImage.getAttribute('data-art-loaded')) return;

    cardArtImage.setAttribute('style', `background-image: url(${artSrc})`);
    cardArtImage.setAttribute('data-art-loaded', 'true');
}

function TooltipHeader({
    faction,
    name,
    categories
}: {
    faction: Faction,
    name: string,
    categories: Array<string>
}): HTMLElement {
    const categoryText = categories.join(', ').trim();

    return (
        <div className={styles.tooltipHeader}>
            <div
                className={styles.tooltipHeaderBackground}
                data-card-faction={faction}
            />

            <div className={styles.tooltipHeaderText}>
                {/* Necessary parent block for BigText to work */}
                <div style={{ width: '100%', display: 'block' }}>
                    <span data-card-name-text className={styles.tooltipName}>
                        {name}
                    </span>
                </div>
                {categoryText && (
                    <div>
                        <span className={styles.tooltipCategories}>
                            {categoryText}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

function TooltipInfo({ infoRaw }: { infoRaw: string }): HTMLElement {
    return (
        <div className={styles.tooltipInfo}>
            <div className={styles.tooltipInfoBackground} />
            {infoRawToHtml(infoRaw)}
        </div>
    );
}

function infoRawToHtml(infoRaw: string): Array<string | HTMLElement> {
    const BREAK = {};

    const newLines = /\n/g;
    // Don't intercalate with a `<br />` directly because it would be the
    // same `<br />` instance everywhere
    const lines = intercalate(infoRaw.trim().split(newLines), BREAK);

    return flatmap(
        lines.map(x => (x === BREAK ? <br /> : tagKeywords(x))),
        x => x
    );
}

function tagKeywords(text): Array<string | HTMLElement> {
    const keywordRe = /<keyword=\w*>(.*?)<\/keyword>/g;
    const elements = [];
    let consumedCount = 0;
    // eslint-disable-next-line
    while (true) {
        const result = keywordRe.exec(text);
        if (result == null) {
            break;
        }
        const previousText = text.slice(consumedCount, result.index);
        const keywordText = result[1];
        elements.push(previousText);
        elements.push(<strong>{keywordText}</strong>);
        consumedCount = consumedCount + previousText.length + result[0].length;
    }
    elements.push(text.slice(consumedCount));

    return elements;
}

export default TooltipElement;
export { loadTooltipArt };
