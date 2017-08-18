const polyfill = require('./polyfill.js');

const jquery = require('./jquery.js');

const moment = require('./moment.js');

const angular = require('./angular.js');

const plugins = require('./plugins.js');

const pages = require('./pages.js');

const entries = {};

const commonChunks = [];

for (let it of polyfill) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

for (let it of jquery) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

for (let it of moment) {
    commonChunks.push(it.id);

    entries[it.id] = it.contains;
}

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
