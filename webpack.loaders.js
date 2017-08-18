const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    test: /font-awesome\.config\.js/,
    use: ['style-loader', 'font-awesome-loader']
}, { // Bootstrap 4
    test: /bootstrap\/dist\/js\/umd\//,
    use: [{
        loader: 'imports-loader',
        options: {
            jQuery: 'jquery'
        }
    }]
}, { // Bootstrap 3
    test: /bootstrap-sass\/assets\/javascripts\//,
    use: [{
        loader: 'imports-loader',
        options: {
            jQuery: 'jquery'
        }
    }]
}, {
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
}];
