// API服务器
const productionEnv = require('./env.json').production;

const extend = require('extend');

const webpack = require('webpack');

const config = extend(true, {}, require('./webpack.common.config.js'));

config.module = config.module || {};
config.module.rules = config.module.rules || [];

config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: ['ts-loader']
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

config.devtool = 'cheap-module-source-map';

module.exports = config;
