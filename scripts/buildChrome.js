const path = require('path');
const fs = require('fs');
const manifest = require('../manifest.json');

const assets = fs.readdirSync(path.join(__dirname, '../dist/chrome'))
  .filter(file => /\.png$/.test(file) && file.indexOf('icon') === -1);

fs.writeFileSync(
  path.join(__dirname, '../dist/chrome/manifest.json'),
  JSON.stringify(Object.assign({}, manifest, {
    web_accessible_resources: assets,
  }), null, 2),
);
