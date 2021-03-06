const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
 */

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        usedExports: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: 'eidectic.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};