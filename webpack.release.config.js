// API服务器
const productionEnv = require('./env.json').production;

const webpack = require('webpack');

const extend = require('extend');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const defaults = require('./webpack.common.config.js');
const config = extend(true, {}, defaults);

config.module = config.module || {};

config.module.rules = config.module.rules || [];
config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{
        loader: 'ts-loader'
    }]
});

config.plugins = config.plugins || [];

config.plugins.push(new webpack.HashedModuleIdsPlugin());

// inject env
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production'),
            'API_SERVER': JSON.stringify(productionEnv.apiServer)
        }
    })
);

// 发布压缩
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exports', 'require']
            // 排除关键字
    },
    comments: false,
    compress: {
        // screw_ie8: true,//IE8
        warnings: false
    }
}));

config.devtool = 'cheap-module-source-map';
config.debug = false;

module.exports = config;
