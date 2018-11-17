const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = require('./base');

function path(p) {
    return Path.resolve(__dirname, '../', p);
}

module.exports = Object.assign({}, baseConfig, {
    mode: 'production',
    optimization: {
        usedExports: true
    },
    entry: path('src/website'),
    output: {
        path: path('dist/website'),
        filename: 'website.js'
    },
    devServer: {
        contentBase: path('dist/website')
    },
    plugins: [
        new CleanWebpackPlugin([path('dist/website')]),
        new HtmlWebpackPlugin({
            title: 'Hyper Gwent',
            favicon: path('src/website/favicon.ico')
        })
    ]
});
