// @flow
/* @jsx createElement */
/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import BigText from 'big-text.js';

import type { Card, ExtensionAssets } from '../types';
import TooltipCSS from './tooltip.less';
import TooltipElement from './TooltipElement';

const styles = TooltipCSS.locals;

class CardTooltip {
    // Is the tooltip visible ?
    visible = false;

    // Tooltipped element
    target = <span />;

    // Outer element used to scope CSS
    outer = <div />;

    // HTML element to live in
    wrapper = <div />;

    constructor(card: Card, target: HTMLElement, assets: ExtensionAssets) {
        this.target = target;

        const tooltip = <TooltipElement card={card} assets={assets} />;
        const wrapper = (
            <div
                className={styles.wrapperHidden}
                style={{
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
        this.wrapper.className = styles.wrapperHidden;
        this.visible = false;
    }

    show() {
        const { wrapper } = this;

        const img = wrapper.querySelector('[data-src]');
        if (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.removeAttribute('data-src');
        }

        wrapper.className = styles.wrapperVisible;

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

function attachTooltip(
    card: Card,
    target: HTMLElement,
    assets: ExtensionAssets
) {
    const tooltip = new CardTooltip(card, target, assets);
    tooltip.inject();
}

export default attachTooltip;
