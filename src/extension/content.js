/* global window */

import findAllMatches from '../core/findAllMatches';
import replaceMatches from '../core/replaceMatches';
import DICTIONARY from '../core/dictionary';

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
  span.innerHTML = replaceMatches(node.nodeValue, matches, match => `<span style="outline: 2px solid red;">${match.entryValue}</span>`);

  node.parentNode.replaceChild(span, node);
});
