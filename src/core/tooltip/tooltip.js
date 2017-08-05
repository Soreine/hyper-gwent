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
  }

  hide() {
    this.wrapper.style.display = 'none';
  }

  show() {
    const { wrapper, target, tooltip } = this;

    const img = tooltip.querySelector('[data-src]');
    if (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }

    const { top, right, left } = target.getBoundingClientRect();
    const { innerWidth } = window;

    wrapper.style.top = `${top}px`;

    if (right <= (innerWidth / 2)) {
      wrapper.style.left = `${right}px`;
      wrapper.style.right = null;
    } else {
      wrapper.style.right = `${innerWidth - left}px`;
      wrapper.style.left = null;
    }

    wrapper.style.display = 'block';
  }
}

function attachTooltip(card, target) {
  const tooltip = new CardTooltip(card, target);
  tooltip.inject();
}

export default attachTooltip;
