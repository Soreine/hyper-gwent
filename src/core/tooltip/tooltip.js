/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import styles from './tooltip.css';

function createTooltip(card, target) {
  const wrapper = <hyper-gwent-tooltip style={{
    display: 'none',
    position: 'fixed',
    zIndex: 999999999,
  }} />;
  const shadow = wrapper.attachShadow({
    mode: 'closed',
  });
  wrapper.appendChild(shadow);

  const tooltip = (
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

  shadow.appendChild(tooltip);

  wrapper.hide = () => {
    wrapper.style.display = 'none';
  };
  wrapper.show = () => {
    const { top, right, bottom, left } = target.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    const position = {
      // CSS property set to null actually removes it
      // that way anything that's not set will be removed
      top: null,
      right: null,
      bottom: null,
      left: null,
    };

    if (bottom <= (innerHeight / 2)) {
      // if the bottom side of the target is in the
      // top half of the screen, it means there is more
      // room at the bottom of it
      position.top = top;
      wrapper.style.transform = 'translateY(-20%)';
    } else {
      position.bottom = innerHeight - bottom;
      wrapper.style.transform = 'translateY(20%)';
    }

    if (right <= (innerWidth / 2)) {
      // if the right side of the target is in the
      // left half of the screen, it means there is more
      // room at the right of it
      position.left = right;
    } else {
      position.right = innerWidth - left;
    }

    const img = tooltip.querySelector('[data-src]');
    if (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }

    wrapper.style.display = 'block';

    Object.keys(position).forEach((prop) => {
      wrapper.style[prop] = `${position[prop]}px`;
    });
  };

  return wrapper;
}

function attachTooltip(card, target) {
  const tooltip = createTooltip(card, target);
  window.document.body.appendChild(tooltip);

  target.addEventListener('mouseenter', () => tooltip.show());
  target.addEventListener('mouseleave', () => tooltip.hide());
}

export default attachTooltip;
