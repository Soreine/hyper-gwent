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
    assets
}: {
    card: Card,
    assets: ExtensionAssets
}): HTMLElement {
    return (
        <div className={styles.card}>
            <CardArtImage art={card.art} />
            <div className={styles.tooltip}>
                <TooltipHeader
                    faction={card.faction}
                    name={card.name}
                    background={assets.cardInfoHeader}
                    categories={card.categories}
                />
                <TooltipInfo
                    infoRaw={card.infoRaw}
                    background={assets.cardInfoBackground}
                />
            </div>
        </div>
    );
}

function CardArtImage({ art }: { art: CardArt }): HTMLElement {
    return (
        <div className={styles.artFrame}>
            <div
                className={styles.art}
                style={{
                    backgroundImage: `url(${art.thumbnail})`
                }}
            />
        </div>
    );
}

function TooltipHeader({
    faction,
    name,
    categories,
    background
}: {
    faction: Faction,
    name: string,
    categories: Array<string>,
    background: string
}): HTMLElement {
    const categoryText = categories.join(', ').trim();

    return (
        <div className={styles.tooltipHeader}>
            <div
                className={styles.tooltipHeaderBackground}
                style={{ backgroundImage: `url(${background})` }}
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

function TooltipInfo({
    infoRaw,
    background
}: {
    infoRaw: string,
    background: string
}): HTMLElement {
    return (
        <div className={styles.tooltipInfo}>
            <div
                className={styles.tooltipInfoBackground}
                style={{ backgroundImage: `url(${background})` }}
            />
            {infoRawToHtml(infoRaw)}
        </div>
    );
}

function infoRawToHtml(infoRaw: string): Array<string | HTMLElement> {
    const newLines = /\n/g;
    const lines = infoRaw.trim().split(newLines);

    return flatmap(intercalate(lines.map(tagKeywords), <br />), x => x);
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
