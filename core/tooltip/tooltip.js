// @flow
/* @jsx createElement */
/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import BigText from 'big-text.js';
import intercalate from 'intercalate';
import flatmap from 'flatmap';

import TooltipCSS from './tooltip.less';
import type { Card } from '../types';

const styles = TooltipCSS.locals;

function TooltipElement({ card }: { card: Card }): HTMLElement {
    return (
        <div className={styles.card}>
            <CardArtImage art={card.art} />
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

function CardArtImage({ art }: { art: CardArt }): HTMLElement {
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

class CardTooltip {
    // Is the tooltip visible ?
    visible = false;

    // Tooltipped element
    target = <span />;

    // Outer element used to scope CSS
    outer = <div />;

    // HTML element to live in
    wrapper = <div />;

    constructor(card: Card, target: HTMLElement) {
        this.target = target;

        const tooltip = <TooltipElement card={card} />;
        const wrapper = (
            <div
                style={{
                    display: 'none',
                    position: 'fixed',
                    transform: 'translateY(-40%)',
                    pointerEvents: 'none',
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
        target.addEventListener('mousemove', (e: MouseEvent) => this.follow(e));
    }

    hide() {
        this.wrapper.style.display = 'none';
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

    follow(mouseEvent: MouseEvent) {
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
    const nameElement = tooltipElement.querySelector('[data-card-name-text]');
    // This makes sure any redraw was performed
    window.requestAnimationFrame(() =>
        BigText(nameElement, {
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

function attachTooltip(card: Card, target: HTMLElement) {
    const tooltip = new CardTooltip(card, target);
    tooltip.inject();
}

export default attachTooltip;
