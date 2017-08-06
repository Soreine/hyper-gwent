/* global window, document */

import findAllMatches from '../core/findAllMatches';
import replaceMatches from '../core/replaceMatches';
import tooltip from '../core/tooltip/index';
import { CARDS } from '../core/data';
import DICTIONARY from '../core/dictionary';

const CLASSNAME = 'hyper-gwent-card-highlight';
const CARD_NAME_ATTRIBUTE = 'data-card-name';

// Walk the document and highlight cards
function walk() {
  const walker = window.document.createTreeWalker(
    window.document.body,
    window.NodeFilter.SHOW_TEXT,
  );
  const nodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const matches = findAllMatches(DICTIONARY, node.nodeValue);

    if (matches.length) {
      nodes.push({
        node,
        matches,
      });
    }
  }

  nodes.forEach(({ node, matches }) => {
    const span = window.document.createElement('span');
    span.innerHTML = replaceMatches(node.nodeValue, matches, match => `<span class="${CLASSNAME}" ${CARD_NAME_ATTRIBUTE}="${match.entryValue}" style="border-bottom: 1px dashed; padding-bottom: 0.1em">${node.nodeValue.slice(match.start, match.end)}</span>`);

    node.parentNode.replaceChild(span, node);
  });

  // Add tooltips
  const highlights = document.getElementsByClassName(CLASSNAME);
  for (let i = 0; i < highlights.length; i += 1) {
    const highlight = highlights[i];
    const cardName = highlight.getAttribute(CARD_NAME_ATTRIBUTE);
    const card = CARDS[cardName];
    tooltip(card, highlight);
  }
}

export default walk;
