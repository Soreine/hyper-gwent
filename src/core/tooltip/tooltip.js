/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import styles from './tooltip.css';

const tooltipElement = card => (
  <div className={styles.locals.tooltip}>
    <style>{styles.toString()}</style>

    <img
      className={styles.locals.tooltipImage}
      data-src={card.variations[0].art.thumbnailImage}
      alt=""
    />

    <div className={styles.locals.tooltipBlock}>
      <div className={styles.locals.tooltipName}>
        {card.name}
      </div>
    </div>

    <div className={styles.locals.tooltipBlock}>
      <div className={styles.locals.tooltipInfo}>
        {card.info}
      </div>
    </div>
  </div>
);

class CardTooltip {
  // Is the tooltip visible ?
  visible = false;
  // Tooltipped element
  target = null;
  // HTML element to live in
  wrapper = null;

  constructor(card, target) {
    this.target = target;

    this.wrapper = <hyper-gwent-tooltip style={{
      display: 'none',
      position: 'fixed',
      transform: 'translateY(-40%)',
      pointerEvents: 'none',
      zIndex: 999999999,
    }} />;
    const shadow = this.wrapper.attachShadow({
      mode: 'closed',
    });
    this.wrapper.appendChild(shadow);

    this.tooltip = tooltipElement(card);
    shadow.appendChild(this.tooltip);
  }

    // Inject this tooltip in the page
  inject() {
    const { wrapper, target } = this;
    window.document.body.appendChild(wrapper);
    target.addEventListener('mouseenter', () => this.show());
    target.addEventListener('mouseleave', () => this.hide());
    target.addEventListener('mousemove', e => this.follow(e));
  }

  hide() {
    this.wrapper.style.display = 'none';
    this.visible = false;
  }

  show() {
    const { wrapper, tooltip } = this;

    const img = tooltip.querySelector('[data-src]');
    if (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }

    wrapper.style.display = 'block';

    this.visible = true;
  }

  follow(mouseEvent) {
    const { wrapper, visible, tooltip } = this;
    if (!visible) {
      return;
    }

    const { clientX, clientY } = mouseEvent;

    const { innerWidth, innerHeight } = window;
    const tooltipRect = tooltip.getBoundingClientRect();

    let left;
    if (left > innerWidth - tooltipRect.width) {
      // Too far on the right
      left = clientX - tooltipRect.width;
    } else {
      left = clientX;
    }

    let top = clientY;
    // Do not go below screen
    top = Math.min(
      top,
      innerHeight - (0.6 * tooltipRect.height), // Because of translateY(-40%)
    );
    // Do not go above screen
    top = Math.max(
      top,
      0.4 * tooltipRect.height, // Because of translateY(-40%)
    );

    wrapper.style.top = `${top}px`;
    wrapper.style.left = `${left}px`;
  }
}

function attachTooltip(card, target) {
  const tooltip = new CardTooltip(card, target);
  tooltip.inject();
}

export default attachTooltip;
