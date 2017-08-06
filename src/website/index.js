/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import walk from '../extension/walk';

const REDDIT = 'https://www.reddit.com/r/gwent/';
const GWENTDB = 'http://www.gwentdb.com/';
const EXT_LINK = '#';

const htmlPage = (
  /* eslint-disable max-len */
  <div>
    <div className="logo">
      <div className="logo-title">Hyper Gwent</div>
      <div className="logo-subtitle">Community Chrome extension for GWENT®: The Witcher Card Game</div>
    </div>
    <div className="download-link">
      <a href={EXT_LINK}>Add to Chrome</a>
    </div>
    <div className="description">
      <p>
        {'None of us cannot reasonably remember every possible Gwent card\'s name and effect. Browsing '}
        <a href={REDDIT}>r/gwent</a>
        {' and reading a deck guide on '}
        <a href={GWENTDB}>GwentDB</a>
        {' can be challenging if you don\'t know half the cards they\'re talking about.'}
      </p>
      <p>
        {'Did you know that...'}
        <ul>
          <li>Xmen are not what they used to be ?</li>
          <li>ADC does not stand for Attack Damage Carry ?</li>
          <li>There <em>are</em> worst names for a dragon than Borkh ?</li>
          <li>Gwent has nothing to do with cooking frogs, mushrooms, or anything remotely related to french cuisine ? 🍷</li>
        </ul>
      </p>
      <p>
        {'Whether you are new to the game, you want to keep up with the latest card changes,'}
        {' or you can\'t remember 💩, you will enjoy the smart card tooltips from Hyper Gwent.'}
      </p>
      <p className="get-it-now">
        <a href={EXT_LINK}>Get it now!</a>
      </p>
    </div>
  </div>
  /* eslint-enable max-len */
);
window.document.body.appendChild(htmlPage);


// Launch extension within the page
walk();
