/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import BigText from 'big-text.js';

import TooltipCSS from './tooltip.less';
import NEW_CARD from './NEW_CARD';

// Convert a card from gwent-data to our own format
function formatCard(cardJson) {
    const variation = cardJson.variations[`${cardJson.ingameId}00`];

    const { rarity, art } = variation;
    const name = cardJson.name['en-US'];
    const info = cardJson.info['en-US'];
    const infoRaw = cardJson.infoRaw['en-US'];
    const { faction, categories } = cardJson;

    return {
        name,
        info,
        infoRaw,
        rarity,
        art,
        faction,
        categories
    };
}

const styles = TooltipCSS.locals;

function TooltipElement({ card }) {
    return (
        <div className={styles.card}>
            <CardArt art={card.art} />
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

function CardArt({ art }) {
    return (
        <div className={styles.artFrame}>
            <div
                className={styles.art}
                style={{
                    backgroundImage: `url(${art.low})`
                }}
            />
        </div>
    );
}

function TooltipHeader({ faction, name, categories }) {
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

function TooltipInfo({ infoRaw }) {
    const keywordRe = /<keyword=\w*>(.*?)<\/keyword>/g;
    const children = [];
    let result;
    let consumedCount = 0;
    // eslint-disable-next-line
    while ((result = keywordRe.exec(infoRaw)) !== null) {
        const previousText = infoRaw.slice(consumedCount, result.index);
        const keywordText = result[1];
        children.push(previousText);
        children.push(<strong>{keywordText}</strong>);
        consumedCount = consumedCount + previousText.length + result[0].length;
    }
    children.push(infoRaw.slice(consumedCount));

    return (
        <div className={styles.tooltipInfo}>
            <div className={styles.tooltipInfoBackground} />
            {children}
        </div>
    );
}

class CardTooltip {
    // Is the tooltip visible ?
    visible = false;

    // Tooltipped element
    target = null;

    // Outer element used to scope CSS
    outer = null;

    // HTML element to live in
    wrapper = null;

    constructor(card, target, assets) {
        this.target = target;

        const tooltip = <TooltipElement card={card} />;
        const wrapper = (
            <div
                style={{
                    display: 'block',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translateY(-40%)',
                    // pointerEvents: 'none',
                    zIndex: 999999999
                }}
            />
        );
        // Outer's name attribute is just there for easier inspection
        const outer = (
            <div className={styles.outer} data-card-name={card.name} />
        );

        wrapper.appendChild(tooltip);
        outer.appendChild(wrapper);

        this.outer = outer;
        this.wrapper = wrapper;
    }

    // Inject this tooltip in the page
    inject() {
        const { outer, target } = this;

        window.document.body.appendChild(outer);

        injectStylesIfNeeded();

        target.addEventListener('mouseenter', () => this.show());
        target.addEventListener('mouseleave', () => this.hide());
        target.addEventListener('mousemove', e => this.follow(e));
    }

    hide() {
        // this.wrapper.style.display = 'none';
        this.visible = false;
    }

    show() {
        const { wrapper } = this;

        const img = wrapper.querySelector('[data-src]');
        if (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.removeAttribute('data-src');
        }

        wrapper.style.display = 'block';

        this.visible = true;

        autoSizeCardName(this.outer);
    }

    follow(mouseEvent) {
        const { wrapper, visible } = this;
        if (!visible) {
            return;
        }

        const { clientX, clientY } = mouseEvent;

        const { innerWidth, innerHeight } = window;
        const wrapperRect = wrapper.getBoundingClientRect();

        let left = clientX;
        if (left > innerWidth - wrapperRect.width) {
            // Too far on the right
            left = clientX - wrapperRect.width;
        }

        let top = clientY;
        // Do not go below screen
        top = Math.min(
            top,
            innerHeight - 0.6 * wrapperRect.height // Because of translateY(-40%)
        );
        // Do not go above screen
        top = Math.max(
            top,
            0.4 * wrapperRect.height // Because of translateY(-40%)
        );

        wrapper.style.top = `${top}px`;
        wrapper.style.left = `${left}px`;
    }
}

function autoSizeCardName(tooltipElement) {
    const nameText = tooltipElement.querySelector('[data-card-name-text]');
    window.requestAnimationFrame(() =>
        BigText(nameText, {
            limitingDimension: 'width',
            maximumFontSize: 24
        })
    );
}

function injectStylesIfNeeded() {
    const STYLE_ID = 'hyperGwentStyle';
    if (window.document.getElementById(STYLE_ID) == null) {
        const style = (
            <style type="text/css" id={STYLE_ID}>
                {TooltipCSS.toString()}
            </style>
        );
        window.document.head.appendChild(style);
    }
}

function attachTooltip(card, target, assets) {
    const tooltip = new CardTooltip(formatCard(NEW_CARD), target, assets);
    tooltip.inject();
}

export default attachTooltip;
