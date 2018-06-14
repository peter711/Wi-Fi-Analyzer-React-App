const webpack = require('webpack');
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { 
                test: /\.ttf$/, 
                loader: 'file-loader' 
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
};

module.exports = config;