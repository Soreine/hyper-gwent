const Path = require('path');

const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'production',
    entry: {
        content: path('src/extension/content.js'),
        options: path('src/extension/options.js')
    },
    output: {
        path: path('dist/chrome'),
        filename: '[name].js'
    }
});
