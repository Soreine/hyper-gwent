/* global window */

import tooltip from '../../core/src/tooltip';

const app = window.document.createElement('div');
window.document.body.appendChild(app);

app.innerHTML =
  `
  <p>C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.</p>
  <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
  <p>This paragraph contains a card named <span id="target" style="color: blue;">Aeromancy</span>.</p>
  <p>It's not a bug - it's an undocumented feature.</p>
  <p>A good programmer is someone who always looks both ways before crossing a one-way street.</p>
  <p>The perfect project plan is possible if one first documents a list of all the unknowns.</p>
  `;

const target = window.document.getElementById('target');

tooltip(target, {
  name: 'Aeromancy',
  info: 'Play a Bronze or Silver Weather card from your Deck or Graveyard. Shuffle the others from your Deck back.',
  variations: [
    {
      art: {
        thumbnailImage: 'https://api.gwentapi.com/media/aeromancy_thumbnail.png',
      },
    },
  ],
});
