/* global window */

import walk from '../extension/walk';
import app from './app';

const supportsShadowDOMV1 = !!window.HTMLElement.prototype.attachShadow;
const render = () => {
  window.document.body.appendChild(app());
  walk();
};

if (supportsShadowDOMV1) {
  render();
} else {
  Promise.all([
    import('@webcomponents/shadydom'),
    import('@webcomponents/shadycss/scoping-shim.min'),
  ]).then(() => render());
}
