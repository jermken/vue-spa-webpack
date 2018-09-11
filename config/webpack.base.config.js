const path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        index: path.join(__dirname, '../src/entry/index.js')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}