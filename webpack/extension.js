const Path = require('path');
const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'development',
    entry: {
        content: path('extension/content.js'),
        popup: path('extension/popup.js'),
        background: path('extension/background.js')
    },
    output: {
        path: path('dist/chrome'),
        filename: '[name].js'
    },
    plugins: []
});
