/* global window */

import { createElement } from 'jsx-dom';

function createTooltip(card, target) {
  const tooltip = (
    <div
      style={{
        display: 'none',
        position: 'absolute',
        zIndex: 9999999999,
        width: '200px',
        color: '#fff',
        backgroundColor: '#3d3d3d',
      }}
    >
      {card.name}
      <img src={card.variations[0].art.thumbnailImage} alt="" />
      {card.info}
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
