const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const utils = require('./utils')

module.exports = merge(baseConfig,{

    output: {
        filename:utils.assetsPath('js/[name].js'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:  MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:  MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: '../../'
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
			filename: utils.assetsPath('css/[name].css'),//直接引用的css文件
        }),
        new CleanWebpackPlugin(),
    ],
    optimization:{
        splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all",
              },
            },
          },
        minimizer: [
            new OptimizeCSSAssetsPlugin()
        ],
        usedExports: true,
        removeAvailableModules: true,//当这些模块已包含在所有父项中时，告诉webpack检测并从块中删除模块
        removeEmptyChunks: true,//告诉webpack检测并删除空的块
        mergeDuplicateChunks: true,//告诉webpack合并包含相同模块的块
    }
})