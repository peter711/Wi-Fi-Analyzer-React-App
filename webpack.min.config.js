const { resolve } = require('path');
const config = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.plugins.push(new CleanWebpackPlugin([resolve(__dirname, 'dist')]),)

module.exports = config;