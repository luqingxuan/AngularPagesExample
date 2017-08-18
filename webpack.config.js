const developmentEnv = require('./env.json').development;

// 域名
const webServerDomain = developmentEnv.domain;

// 端口
const webServerPort = developmentEnv.port;

// 后台API服务器
const apiServer = developmentEnv.apiServer;

const webpack = require('webpack');

const extend = require('extend');

const DashboardPlugin = require('webpack-dashboard/plugin');

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
config.entry.jquery.push(require('./bootstrap.js'));

config.plugins = config.plugins || [];

// webpack-dev-server enhancement plugins
config.plugins.push(new DashboardPlugin());
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// for (var key in config.entry) {
//     if (!config.entry.hasOwnProperty(key))
//         continue;

//     if (!(config.entry[key] instanceof Array))
//         config.entry[key] = [config.entry[key]];

//     config.entry[key].unshift('webpack/hot/dev-server');
//     config.entry[key].unshift('webpack-dev-server/client/?http://' + webServerDomain + ':' + webServerPort);
// }

// inject env
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'API_SERVER': JSON.stringify(apiServer)
        }
    })
);

// api proxy for develop
config.devServer.proxy = developmentEnv.apiProxy;

config.devtool = 'source-map';

module.exports = config;
