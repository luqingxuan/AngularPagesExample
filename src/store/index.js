import Vue from 'vue'
import config from '../config'

var resourceMap = {};

module.exports.getResource = function (name) {
    if (!resourceMap[name]) {
        var path = config.resources[name];
        if (!path) {
            path = config.server + name + '{/id}';
        }
        resourceMap[name] = Vue.resource(path);
    }
    return resourceMap[name];
};