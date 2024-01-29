const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/index.jsx'
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            }
        ],
    },
    devServer: {
        port: 8080,
        hot: true,
        server: {
            type: 'https',
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            Pages: path.resolve(__dirname, 'src/components/pages'),
            Common: path.resolve(__dirname, 'src/components/common'),
            Images: path.resolve(__dirname, 'src/assets/images'),
            Utilities: path.resolve(__dirname, 'src/utilities')
        },
    },
};