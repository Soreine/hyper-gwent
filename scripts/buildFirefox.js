const path = require('path');
const fs = require('fs');
// eslint-disable-next-line import/no-unresolved
const manifest = require('../dist/chrome/manifest.json');

fs.writeFileSync(
    path.join(__dirname, '../dist/firefox/manifest.json'),
    JSON.stringify(
        Object.assign({}, manifest, {
            options_ui: {
                page: 'options.html',
                browser_style: true
            },
            applications: {
                gecko: {
                    id: 'extension@hyper-gwent.com',
                    strict_min_version: '53.0'
                }
            }
        }),
        null,
        2
    )
);
