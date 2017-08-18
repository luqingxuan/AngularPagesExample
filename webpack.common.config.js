const path = require('path');

const {
    entries,
    commonChunks
} = require('./src/js/entries/index.js');

module.exports = {
    context: __dirname,
    entry: entries,
    output: {
        // 添加http访问上下文路径
        publicPath: '/',
        // 生成文件放到assets目录下的js文件夹
        filename: './assets/js/[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new(require('extract-text-webpack-plugin'))({ // 提取公用CSS
            filename: './assets/css/[name].css'
        }),
        new(require('webpack/lib/optimize/CommonsChunkPlugin'))({ // 注意逆序
            name: commonChunks.reverse(),
            minChunks: Infinity
        })
    ],
    module: {
        rules: require('./webpack.loaders.js')
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ],
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.ts', 'tsx'],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: require('./webpack.alias.js')
    },
    resolveLoader: {},
    // 当我们想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中
    // 通过引用外部文件的方式引入第三方库 via script tag
    externals: {
        // 'jquery' : 'jQuery'
        // moment: true
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        noInfo: true
    },
    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};
