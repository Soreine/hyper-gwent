/* global window */

import { createElement } from 'jsx-dom';

function positionTooltip(target, tooltip) {
  const { top, right } = target.getBoundingClientRect();

  tooltip.style.display = 'block';
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${right}px`;
}

function createTooltip(target, card) {
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
  window.document.body.appendChild(tooltip);

  target.addEventListener('mouseenter', () => positionTooltip(target, tooltip));
  target.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
}

export default createTooltip;
