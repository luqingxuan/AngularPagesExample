const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const {
    entries,
    commonChunks
} = require('./src/js/entries/index.js');

const plugins = [
    new ExtractTextPlugin({ // 提取公用CSS
        filename: './assets/css/[name].css'
    }),
    new CommonsChunkPlugin({ // 注意逆序
        name: commonChunks.reverse(),
        minChunks: Infinity
    })
];

const rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['es3ify-loader', 'babel-loader']
}, { /* Embed files. */
    test: /\.(html|css)$/,
    exclude: /node_modules/,
    use: ['raw-loader']
}, {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?importLoaders=1', 'postcss-loader']
    })
}, {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?importLoaders=1', 'postcss-loader', 'less-loader']
    })
}, {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?importLoaders=1', 'postcss-loader', 'sass-loader']
    })
}, {
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: { // CSS图片目录
            limit: 10000,
            name: 'assets/images/[name].[ext]'
        }
    }]
}, {
    test: /\.(woff|woff2)(\?v=\S+)?$/,
    use: [{
        loader: 'url-loader',
        options: { // CSS图片目录
            limit: 10000,
            name: 'assets/images/[name].[ext]'
        }
    }]
}, {
    test: /\.ttf(\?v=\S+)?$/,
    use: [{
        loader: 'url-loader',
        options: { // CSS图片目录
            limit: 10000,
            name: 'assets/images/[name].[ext]'
        }
    }]
}, {
    test: /\.eot(\?v=\S+)?$/,
    use: [{ // CSS图片目录
        loader: 'file-loader',
        options: {
            limit: 10000,
            name: 'assets/images/[name].[ext]'
        }
    }]
}, {
    test: /\.svg(\?v=\S+)?$/,
    use: [{ // CSS图片目录
        loader: 'file-loader',
        options: {
            limit: 10000,
            name: 'assets/images/[name].[ext]'
        }
    }]
}, { // 如果要加载jQuery插件,解析路径&参数
    test: 'components/jquery/**/*.js$',
    use: [{
        loader: 'imports-loader?this=>window,$=jquery'
    }]
}];

module.exports = {
    context: __dirname,
    entry: entries,
    output: {
        path: path.resolve(__dirname, './dist'),
        // 添加http访问上下文路径
        publicPath: '/',
        // 生成文件放到assets目录下的js文件夹
        filename: './assets/js/[name].js'
    },
    resolveLoader: {},
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ],
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.ts', 'tsx'],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            '@': path.resolve(''),
            css: path.resolve('src/css'),
            images: path.resolve('src/images'),
            externals: path.resolve('src/externals'),
            js: path.resolve('src/js'),
            shim: path.resolve('src/js/shim'),
            modules: path.resolve('src/js/modules'),
            components: path.resolve('src/js/components'),
            pages: path.resolve('src/js/pages'),
            polyfill: path.resolve('src/js/polyfill'),
            entires: path.resolve('src/js/entires'),
            enhance: path.resolve('src/js/enhance'),
            node_modules: path.resolve('node_modules')
        }
    },
    // 当我们想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中
    // 通过引用外部文件的方式引入第三方库 via script tag
    externals: {
        // 'jquery' : 'jQuery'
        // moment: true
    },
    plugins: plugins,
    module: {
        rules: rules
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
