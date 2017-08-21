require('./gulpfile.tasks.js');

require('./gulpfile.prod.js');

const env = require('./env.json').development;

// 域名
const webServerDomain = env.domain;

// 端口
const webServerPort = env.port;

const extend = require('extend');

const gulp = require('gulp');

const gulpSequence = require('gulp-sequence');

const browserSync = require('browser-sync');

const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');

const WebpackDevConfig = require('./webpack.config.js');

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exwebServerPorts', 'require']
            // 排除关键字
    },
    comments: false,
    compress: {
        // screw_ie8: true,//IE8
        warnings: false
    }
});

// 开发调试源码环境
gulp.task('webpack-dev', function(callback) {
    var devServer = extend(true, {}, WebpackDevConfig.devServer, {
        hot: true,
        inline: true
    });

    var compiler = webpack(WebpackDevConfig);

    var server = new WebpackDevServer(compiler, devServer);

    server.listen(webServerPort, webServerDomain, function(err) {
        console.log('start at ' + webServerDomain + ':' + webServerPort);
    });

    return server;
});

gulp.task('webpack-dev-minify', function(callback) {
    var devServer = extend(true, {}, WebpackDevConfig.devServer, {
        hot: true,
        inline: true
    });

    // uglify js file
    WebpackDevConfig.plugins.push(uglifyJsPlugin);

    var compiler = webpack(WebpackDevConfig);

    var server = new WebpackDevServer(compiler, devServer);

    server.listen(webServerPort, webServerDomain, function(err) {
        console.log('start at ' + webServerDomain + ':' + webServerPort);
    });

    return server;
});

// 开发源码调试环境
gulp.task('dev', function(callback) {
    gulpSequence('clean', 'externals', 'shim', 'html-images', 'html-include', 'webpack-dev',
        callback);

    // 监听HTML文件变化
    gulp.watch(['./src/js/externals/**/*.*'], ['externals']);
    gulp.watch(['./src/html/**/*.*'], ['html-include']);
    gulp.watch(['./src/images/**/*.*'], ['html-images']);
});

// 开发压缩调试环境
gulp.task('dev-minify', function(callback) {
    gulpSequence('clean', 'externals', 'shim', 'html-images', 'html-include',
        'webpack-dev-minify', callback);

    // 监听HTML文件变化
    gulp.watch(['./src/js/externals/**/*.*'], ['externals']);
    gulp.watch(['./src/html/**/*.*'], ['html-include']);
    gulp.watch(['./src/images/**/*.*'], ['html-images']);
});

gulp.task('default', ['dev']);
