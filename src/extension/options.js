/* global chrome, document */

// Saves options to chrome.storage.sync.
function saveOptions() {
  const shouldUnderline = document.getElementById('underline').checked;

  chrome.storage.sync.set({
    shouldUnderline,
  }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.setAttribute('class', 'visible');
    setTimeout(() => {
      status.setAttribute('class', 'hidden');
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    shouldUnderline: true,
  }, (items) => {
    document.getElementById('underline').checked = items.shouldUnderline;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
saveOptions);
