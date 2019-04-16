// This is a configuration used to develop the extension popup

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'development',
    optimization: {
        usedExports: true
    },
    entry: path('extension/popup.js'),
    output: {
        path: path('dist/popup'),
        filename: 'popup.js'
    },
    devServer: {
        contentBase: path('dist/popup')
    },
    plugins: [
        new CleanWebpackPlugin([path('dist/popup')], {
            root: process.cwd()
        }),
        new CopyWebpackPlugin([
            {
                from: path('extension/'),
                to: path('dist/popup/')
            }
        ])
    ]
});
