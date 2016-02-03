import moment from 'moment';

// 解决严格模式下，没有声明就使用的报错
window.moment=moment;

// 国际化支持
moment.locale('zh-CN');

require('bootstrap-webpack!../bootstrap.config.js');

require('font-awesome-webpack!../font-awesome.config.js');

require('./lib/bootstrap/daterangepicker/daterangepicker.js');

require('./lib/bootstrap/daterangepicker/daterangepicker.css');

require('./lib/bootstrap/bootstrap-hack.css');
