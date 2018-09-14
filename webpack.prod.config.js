const path = require('path')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const baseConf = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConf, {
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/index.[hash:8].js'
    },
    module: {

    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: 'css/main.[hash:8].css',
            chunkFilename: 'css/[name].[hash:8].css'
        }),
        new htmlWebpackPlugin({
            title: '生产环境',
            filename: 'index.html',
            template: './src/entry/index.html',
            chunks: ['index'],
            env: process.env.NODE_ENV,
            inject: true,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})
