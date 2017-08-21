require('./gulpfile.tasks.js');

const env = require('./env.json').production;

// to remote web server
const publishServerPath = env.dist;

const extend = require('extend');

const gulp = require('gulp');

const gulpSequence = require('gulp-sequence');

const webpack = require('webpack');

const WebpackProdConfig = require('./webpack.prod.config.js');

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

// 正式打包压缩文件
gulp.task('webpack-build', function(callback) {
    // uglify js file
    WebpackProdConfig.plugins.push(uglifyJsPlugin);

    return webpack(WebpackProdConfig, function(err, stat) {
        callback();
    });
});

// 正式打包源码文件
gulp.task('webpack-build-source', function(callback) {
    return webpack(WebpackProdConfig, function(err, stat) {
        callback();
    });
});

// 正式打包压缩文件
gulp.task('build', function(callback) {
    gulpSequence('clean', 'externals', 'shim', 'html-include', 'webpack-build', 'md5',
        'html-minify', callback);
});

// 正式打包源码文件
gulp.task('build-source', function(callback) {
    gulpSequence('clean', 'externals', 'shim', 'html-include', 'webpack-build-source',
        'md5', callback);
});

// dist目录copy至发布目录
gulp.task('toremote', function(callback) {
    var src = './dist/**/*.*';

    return gulp.src(src).pipe(
        gulp.dest(publishServerPath));
});

// 发布压缩文件
gulp.task('publish', function(callback) {
    gulpSequence('build', 'toremote', callback);
});

// 发布未压缩文件
gulp.task('publish-source', function(callback) {
    gulpSequence('build-source', 'toremote', callback);
});
