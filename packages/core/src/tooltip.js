/* global window */

function positionTooltip(target, tooltip) {
  const { top, right } = target.getBoundingClientRect();

  tooltip.style.display = 'block';
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${right}px`;
}

function createTooltip(target, card) {
  const tooltip = window.document.createElement('div');
  tooltip.style.display = 'none';
  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = '99999999999';
  tooltip.style.width = '200px';

  tooltip.innerHTML =
  `
    <div style="color: #fff; background: #3d3d3d; padding: 10px;">
      <div>${card.name}</div>
      <img src="${card.variations[0].art.thumbnailImage}" alt="" />
      <div>${card.info}</div>
    </div>
  `;
  window.document.body.appendChild(tooltip);

  target.addEventListener('mouseenter', () => positionTooltip(target, tooltip));
  target.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
}

export default createTooltip;
