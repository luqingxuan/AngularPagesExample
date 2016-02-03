import Router from 'react-router';

var Route = Router.Route;

import App from '../pages/App.vue';

// 路由规则
import RouterADM from './routerADM';
import RouterDEV from './routerDEV';
import RouterADS from './routerADS';

Vue.use(Router);

var router = new Router();

router.map(RouterADM);

router.map(RouterDEV);

router.map(RouterADS);

router.beforeEach(function () {
	
  window.scrollTo(0, 0);

});

// 默认开发者页面
router.redirect({
  '/': '/dev/app/overview'
});

router.start(App, '#app');