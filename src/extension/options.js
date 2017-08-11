/* global document */

import browser from 'webextension-polyfill';

// Saves options to browser.storage.sync.
function saveOptions() {
  const shouldUnderline = document.getElementById('underline').checked;

  browser.storage.sync.set({
    shouldUnderline,
  }).then(() => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.setAttribute('class', 'visible');
    setTimeout(() => {
      status.setAttribute('class', 'hidden');
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
  browser.storage.sync.get({
    shouldUnderline: true,
  }).then((items) => {
    document.getElementById('underline').checked = items.shouldUnderline;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
saveOptions);
