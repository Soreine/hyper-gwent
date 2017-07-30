/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import styles from './tooltip.css';

function createTooltip(card, target) {
  const wrapper = <hyper-gwent-tooltip style={{
    display: 'none',
    position: 'fixed',
    transform: 'translate(10px, -60px)',
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
    const { top, right } = target.getBoundingClientRect();

    const img = tooltip.querySelector('[data-src]');
    if (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    }

    wrapper.style.display = 'block';
    wrapper.style.top = `${top}px`;
    wrapper.style.left = `${right}px`;
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
