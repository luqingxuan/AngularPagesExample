require('jquery');

// window对象无法传递进去，所以我必须修改插件，取消window参数
// 窗口改变多次触发问题
require('imports?jQuery=jquery,$=jquery,this=>window!./lib/jquery/jquery.fixresize.js');

// 鼠标滚轮插件
require('imports?jQuery=jquery,$=jquery,this=>window!./lib/jquery/jquery.mousewheel.js');

// 本地存储插件
require('./lib/jquery/jquery.storage.js');

// 遮罩插件
require('imports?jQuery=jquery,$=jquery,this=>window!./lib/jquery/loadmask/jquery.loadmask.js');
require('./lib/jquery/loadmask/jquery.loadmask.css');

// 弹出提示插件
require('imports?jQuery=jquery,$=jquery,this=>window!./lib/jquery/confirm/jquery.confirm.js');
require('./lib/jquery/confirm/jquery.confirm.css');