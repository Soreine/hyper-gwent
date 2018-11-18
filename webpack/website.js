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
        new CopyWebpackPlugin([
            {
                from: path('src/website/public/'),
                to: path('dist/website/')
            }
        ])
        // new HtmlWebpackPlugin({
        //     title: 'Hyper Gwent',
        //     favicon: path('src/website/favicon.ico'),
        //     chunks: [path('src/website/website.css')]
        // })
    ]
});
