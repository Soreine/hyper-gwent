/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import styles from './tooltip.css';
import NEW_CARD from './NEW_CARD';

const tooltipElement = (card, { cardFrame = null } = {}) => {
    const variation = card.variations[`${card.ingameId}00`];

    const { rarity } = variation;
    const name = card.name['en-US'];
    const info = card.info['en-US'];

    return (
        <div className={styles.locals.hyperGwentTooltip}>
            {/* <img
                className={styles.locals.hyperGwentTooltipImage}
                data-src={variation.art.low}
                alt=""
            /> */}

            <div
                className={`${styles.locals.hyperGwentTooltipBlock} ${styles
                    .locals.hyperGwentTooltipBlock + rarity}`}
            >
                <div className={styles.locals.hyperGwentTooltipName}>
                    {name}
                </div>
            </div>

            <div
                className={`${styles.locals.hyperGwentTooltipBlock} ${styles
                    .locals.hyperGwentTooltipBlock + rarity}`}
            >
                <div className={styles.locals.hyperGwentTooltipInfo}>
                    {info}
                </div>
            </div>
        </div>
    );
};

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

        const tooltip = tooltipElement(card, assets);
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
            <div
                className={styles.locals.hyperGwentTooltipOuter}
                data-card-name={card.name}
            />
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

        const STYLE_ID = 'hyperGwentStyle';
        if (window.document.getElementById(STYLE_ID) == null) {
            const style = (
                <style type="text/css" id={STYLE_ID}>
                    {styles.toString()}
                </style>
            );
            window.document.head.appendChild(style);
        }

        target.addEventListener('mouseenter', () => this.show());
        target.addEventListener('mouseleave', () => this.hide());
        target.addEventListener('mousemove', e => this.follow(e));
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

function attachTooltip(card, target, assets) {
    const tooltip = new CardTooltip(NEW_CARD, target, assets);
    tooltip.inject();
}

export default attachTooltip;
