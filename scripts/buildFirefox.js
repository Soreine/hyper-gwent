const path = require('path');
const fs = require('fs');
// eslint-disable-next-line
const manifest = require('../dist/chrome/manifest.json');

fs.writeFileSync(
    path.join(__dirname, '../dist/firefox/manifest.json'),
    JSON.stringify(
        Object.assign({}, manifest, {
            applications: {
                gecko: {
                    id: 'extension@hyper-gwent.com',
                    strict_min_version: '57.0'
                }
            }
        }),
        null,
        2
    )
);
