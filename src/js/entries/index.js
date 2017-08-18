const polyfill = require('./polyfill.js');

const angular = require('./angular.js');

const plugins = require('./plugins.js');

const pages = require('./pages.js');

const entries = {};

const commonChunks = [];

for (let it of polyfill) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

commonChunks.push('jquery');
entries['jquery'] = ['expose-loader?$!expose-loader?jQuery!jquery'];

commonChunks.push('moment');
entries['moment'] = ['expose-loader?moment!moment'];

for (let it of angular) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

for (let it of plugins) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

for (let it of pages)
    entries[it.id] = it.contains;

module.exports = {
    entries: entries,
    commonChunks: commonChunks
}
