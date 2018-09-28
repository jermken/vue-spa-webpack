// Karma configuration
// Generated on Thu Sep 27 2018 11:32:25 GMT+0800 (中国标准时间)
const webpackConfig = require('../webpack.test.config')

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // 下面的测试框架是用来测试js
        frameworks: ['mocha', 'chai'],

        // 下面指的是test.js文件在browsers里面运行
        // 关于test.js其实就是把需要测试的文件都require进来，然后全部在设置的browsers里面跑，使用frameworks测试js,通过reporters输出报告
        files: ['./test.js'],

        // list of files / patterns to exclude
        exclude: [],

        // 下面是为文件制定预处理器，也就是说测试test.js之前用webpack和sourcemap处理一下
        preprocessors: {
            './test.js': ['webpack', 'sourcemap']
        },
        // 下面是覆盖报告
        // coverage是代码测试覆盖率的一个reporter，也就是说告诉你项目的代码有多少测试了
        coverageReporter: {
            dir: './coverage',
            reporters: [
                // 生成 lcov.info 文件， 改文件中包含了详细的每个文件，每行，每个函数的执行信息。
                {
                    type: 'lcov', 'subdir': '.'
                },
                // 在命令行输出简要覆盖率数据
                {
                    type: 'text-summary'
                }
            ]
        },
        // 下面的是用来出报告的
        reporters: ['spec', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // 这里使用的是Chrome作为浏览器测试环境
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
