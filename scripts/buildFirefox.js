const path = require('path');
const fs = require('fs');
const manifest = require('../manifest.json');

fs.writeFileSync(
  path.join(__dirname, '../dist/firefox/manifest.json'),
  JSON.stringify(Object.assign({}, manifest, {
    applications: {
      gecko: {
        id: 'extension@hyper-gwent.com',
        strict_min_version: '53.0',
      },
    },
  }), null, 2),
);
