// @flow
/* @jsx createElement */
/* global window, MutationObserver */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import BigText from 'big-text.js';

import type { Card, ExtensionAssets } from '../types';
import Perimeter from './Perimeter';
import TooltipCSS from './tooltip.less';
import TooltipElement, { loadTooltipArt } from './TooltipElement';
import injectStyles from './injectStyles';
import { HG_TOOLTIP_ATTRIBUTE } from '../CONSTANTS';

const styles = TooltipCSS.locals;

class CardTooltip {
    // Is the tooltip visible ?
    visible = false;

    // Tooltipped element
    anchor = <span />;

    // Outer element used to scope CSS
    outer = <div />;

    // HTML element to live in
    wrapper = <div />;

    assets: ExtensionAssets;

    constructor(
        card: Card,
        anchor: HTMLElement,
        assets: ExtensionAssets,
        options: {
            lowQualityArt: boolean
        }
    ) {
        this.assets = assets;
        this.anchor = anchor;

        const tooltip = (
            <TooltipElement
                card={card}
                assets={assets}
                lowQualityArt={options.lowQualityArt}
            />
        );
        const wrapper = (
            <div
                className={styles.wrapperHidden}
                style={{
                    position: 'fixed',
                    transform: 'translateY(-40%)',
                    pointerEvents: 'none',
                    padding: '0px 16px',
                    zIndex: 999999999
                }}
            />
        );
        // Outer's name attribute is just there for easier inspection
        const outer = (
            <div
                className={styles.outer}
                data-card-name={card.name}
                {...{ [HG_TOOLTIP_ATTRIBUTE]: true }}
            />
        );

        wrapper.appendChild(tooltip);
        outer.appendChild(wrapper);

        this.outer = outer;
        this.wrapper = wrapper;
    }

    // Inject this tooltip in the page
    inject() {
        const { outer, anchor, wrapper } = this;

        window.document.body.appendChild(outer);

        injectStyles(this.assets);

        const perimeter = new Perimeter({
            target: anchor,
            outline: 100,
            debug: true,
            onBreach: () => {
                loadTooltipArt(wrapper);
            }
        });

        anchor.addEventListener('mouseenter', this.show);
        anchor.addEventListener('mouseleave', this.hide);
        anchor.addEventListener('mousemove', this.follow);

        onRemoveElement(anchor, () => {
            anchor.removeEventListener('mouseenter', this.show);
            anchor.removeEventListener('mouseleave', this.hide);
            anchor.removeEventListener('mousemove', this.follow);
            perimeter.destroy();
            this.hide();
            window.document.body.removeChild(outer);
        });
    }

    hide = () => {
        this.wrapper.className = styles.wrapperHidden;
        this.visible = false;
    };

    show = () => {
        const { wrapper } = this;
        loadTooltipArt(wrapper);

        wrapper.className = styles.wrapperVisible;

        this.visible = true;

        autoSizeCardName(this.outer);
    };

    follow = (mouseEvent: MouseEvent) => {
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
    };
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

function onRemoveElement(element, onDetachCallback) {
    // https://stackoverflow.com/questions/31798816/simple-mutationobserver-version-of-domnoderemovedfromdocument
    const observer = new MutationObserver(() => {
        function isDetached(el) {
            // $FlowFixMe
            if (el.parentNode === window.document) {
                return false;
            }
            // $FlowFixMe
            if (el.parentNode === null) {
                return true;
            }
            return isDetached(el.parentNode);
        }

        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });

    observer.observe(window.document, {
        childList: true,
        subtree: true
    });
}

function attachTooltip(
    card: Card,
    anchor: HTMLElement,
    assets: ExtensionAssets,
    options: { lowQualityArt: boolean }
) {
    const tooltip = new CardTooltip(card, anchor, assets, options);
    tooltip.inject();
}

export default attachTooltip;
