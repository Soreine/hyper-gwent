const Path = require('path');
const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'development',
    entry: {
        content: path('extension/content.js'),
        options: path('extension/options.js')
    },
    output: {
        path: path('dist/chrome'),
        filename: '[name].js'
    },
    plugins: []
});
