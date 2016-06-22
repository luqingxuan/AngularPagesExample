import {Component,Class} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import HelloWorld from 'components/HelloWorld.ts';

import Img from 'images/alert.png';

require('css/pages/index.css');

(function(app) {
  app.AppComponent =
    Component({
      selector: 'app',
      template: 'App:<hello-world></hello-world>',
      directives:[HelloWorld]
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