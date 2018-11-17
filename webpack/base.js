module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};
