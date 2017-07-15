/* global window */

import { createElement } from 'jsx-dom';
import tooltip from '../core/tooltip/index';

const target = <span id="target" style="color: blue;">Aeromancy</span>;
const app = (
  <div>
    <p>C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.</p>
    <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
    <p>This paragraph contains a card named {target}.</p>
    <p>It's not a bug - it's an undocumented feature.</p>
    <p>A good programmer is someone who always looks both ways before crossing a one-way street.</p>
    <p>The perfect project plan is possible if one first documents a list of all the unknowns.</p>
  </div>
);
window.document.body.appendChild(app);

tooltip({
  name: 'Aeromancy',
  info: 'Play a Bronze or Silver Weather card from your Deck or Graveyard. Shuffle the others from your Deck back.',
  variations: [
    {
      art: {
        thumbnailImage: 'https://api.gwentapi.com/media/aeromancy-thumbnail.png',
      },
    },
  ],
}, target);
