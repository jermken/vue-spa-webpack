const path = require('path')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const baseConf = require('./webpack.base.config')

module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {

    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        hot: true,
        port: 8080,
        open: true,
        inline: true,
        progress: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: '测试环境',
            filename: './index.html',
            template: './src/entry/index.html',
            chunks: ['index'],
            env: 'development',
            inject: false,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})
