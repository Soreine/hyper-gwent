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
        new CopyWebpackPlugin(
            [
                // Copy icons
                {
                    context: '../extensions/',
                    from: 'icon*',
                    to: path('dist/chrome/')
                },
                // Copy options
                {
                    from: path('extension/options.html'),
                    to: path('dist/chrome/')
                }
            ],
            { debug: true }
        )
    ]
});
