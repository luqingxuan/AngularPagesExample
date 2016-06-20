import {Component,Class} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

require('css/pages/index.css');

(function(app) {
  app.AppComponent =
    Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
      bootstrap(app.AppComponent);
    });
  })(window.app || (window.app = {}));