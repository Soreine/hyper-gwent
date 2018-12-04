const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    plugins: [
        new CleanWebpackPlugin([path('dist/chrome')], {
            root: process.cwd()
        }),
        new CopyWebpackPlugin([
            {
                from: path('assets/'),
                to: path('dist/chrome/assets')
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path('assets/icon*.png'),
                to: path('dist/chrome/')
            }
        ])
    ]
});
