const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].dev.bundle.js',
        assetModuleFilename: 'react/images/[name].[hash][ext]',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'react/css/common.css',
        }),
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