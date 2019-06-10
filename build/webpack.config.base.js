const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const utils = require('./utils')

module.exports = {
    
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'assets': utils.resolve('assets'),
          'pages': utils.resolve('src/pages'),
          'static': utils.resolve('static'),
          'components': utils.resolve('src/components'),
          'vue$': 'vue/dist/vue.common.js'
        }
    },
  
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                  
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        name: utils.assetsPath('img/[name].[ext]')
                    }   
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('font/[name].[ext]')
                    }   
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[ext]')
                    }   
                }
            },
           
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: utils.resolve('index.html')
        }),
        
    ],

}