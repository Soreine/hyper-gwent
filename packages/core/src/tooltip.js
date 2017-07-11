/* global window */

import { createElement } from 'jsx-dom';
import reset from './reset';

const styles = {
  tooltip: reset({
    display: 'none',
    position: 'absolute',
    zIndex: 9999999999,
    width: '220px',
    transform: 'translateY(-20px)',
  }),
  tooltipName: reset({
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#282828',
    borderRadius: '4px 4px 0 0',
  }),
  tooltipImage: reset({
    display: 'block',
    width: '100%',
    height: 'auto',
    marginTop: '-20px',
    marginBottom: '14px',
  }),
  tooltipInfo: reset({
    padding: '10px',
    backgroundColor: '#282828',
    borderRadius: '0 0 4px 4px',
  }),
};

function createTooltip(card, target) {
  const tooltip = (
    <div style={styles.tooltip}>
      <div style={styles.tooltipName}>
        {card.name}
      </div>

      <img
        src={card.variations[0].art.thumbnailImage}
        alt=""
        style={styles.tooltipImage}
      />

      <div style={styles.tooltipInfo}>
        {card.info}
      </div>
    </div>
  );

  tooltip.hide = () => {
    tooltip.style.display = 'none';
    tooltip.style.top = null;
    tooltip.style.left = null;
  };

  tooltip.show = () => {
    const { top, right } = target.getBoundingClientRect();

    tooltip.style.display = 'block';
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${right}px`;
  };

  return tooltip;
}

function attachTooltip(card, target) {
  const tooltip = createTooltip(card, target);
  window.document.body.appendChild(tooltip);

  target.addEventListener('mouseenter', () => tooltip.show());
  target.addEventListener('mouseleave', () => tooltip.hide());
}

export default attachTooltip;
