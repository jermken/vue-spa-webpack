const path = require('path')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const baseConf = require('./webpack.base.config')

module.exports = merge(baseConf, {
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: 'index.[hash].js'
    },
    module: {

    },
    plugins: [
        new htmlWebpackPlugin({
            title: '生产环境',
            filename: '../html/index.html',
            template: './src/entry/index.html',
            chunks: ['index'],
            env: process.env.NODE_ENV,
            inject: true,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),
        new cleanWebpackPlugin(['dist'])
    ]
})
