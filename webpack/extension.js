const Path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'development',
    node: {
        global: false
    },
    plugins: [
        new webpack.DefinePlugin({
            global: require.resolve('./global.js')
        })
    ],
    entry: {
        content: path('extension/content.js'),
        popup: path('extension/popup.js'),
        background: path('extension/background.js')
    },
    output: {
        path: path('dist/chrome'),
        filename: '[name].js'
    }
});
