/* global window */

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';
import walk from '../extension/walk';
import Logo from './hyper-gwent.svg';
import style from './website.css';

const REDDIT = 'https://www.reddit.com/r/gwent/';
const GWENTDB = 'http://www.gwentdb.com/';
const EXT_LINK = '#';

const htmlPage = (
  /* eslint-disable max-len */
  <div className="content">
    <style type="text/css">{style.toString()}</style>

    <div className="logo">
      <div className="logo-title"
        innerHTML={Logo} />
      <div className="logo-subtitle">{'Chrome extension for GWENT®: The Witcher Card Game'}</div>
    </div>

    <a className="download-link" href={EXT_LINK}>{'Add to Chrome'}</a>

    <div className="description">
      <p>
        {'None of us can reasonably remember every possible Gwent card\'s name and effect. Browsing '}
        <a href={REDDIT}>{'r/gwent'}</a>
        {' and reading deck guides on '}
        <a href={GWENTDB}>{'GwentDB'}</a>
        {' can be challenging if you don\'t know half the cards people are talking about.'}
      </p>

      <p>
        <em>{'You might find this shocking:'}</em>
        <ul>
          <li>{'Xmen are not what they used to be.'}</li>
          <li>{'ADC does not stand for Attack Damage Carry.'}</li>
          <li>{'There '}<em>{'are'}</em>{' worst names for a dragon than Borkh.'}</li>
          <li>{'Gwent has nothing to do with cooking frogs, mushrooms, or anything remotely related to french cuisine.'}</li>
        </ul>
      </p>

      <div className="emote">
        <div className="avatar geralt"></div>
        <div className="emote-text">
          {'Not bad. Not bad at all.'}
        </div>
      </div>

      <p>
        {'Whether you are new to the game, or you want to keep up with the latest card changes, or you can\'t remember crap, Hyper Gwent is here to save the day. Hyper Gwent automatically detects card names or acronyms in the pages you visit, highlights them and shows a tooltip when hovering them.'}
      </p>

      <p>
        {'Feature list:'}
        <ul>
          <li>{'Up to date with all existing cards'}</li>
          <li>{'Support acronyms, plurals, lowercase, and missing accents'}</li>
          <li>{'Lightweight'}</li>
        </ul>
      </p>

      <p>{'What do you think of that, Dandelion?'}</p>

      <div className="emote">
        <div className="avatar dandelion"></div>
        <div className="emote-text">
          {'That… was actually rather impressive. Congratulations.'}
        </div>
      </div>

    </div>

    <a className="download-link" href={EXT_LINK}>{'Add to Chrome'}</a>

  </div>
  /* eslint-enable max-len */
);
window.document.body.appendChild(htmlPage);


// Launch extension within the page
walk();
