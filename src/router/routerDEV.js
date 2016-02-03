import DevIndex from '../pages/dev/index.vue';

import AppLayout from '../pages/dev/app/AppLayout.vue';

import AppOverView from '../pages/dev/app/AppOverView.vue';

import AppCreate from '../pages/dev/app/AppCreate.vue';

import AppUpdate from '../pages/dev/app/AppUpdate.vue';

import AppSearch from '../pages/dev/app/AppSearch.vue';

// 开发者路由配置
export default
{
	'/dev': {
	    component: DevIndex
	  },
	'/dev/app':{
		component:AppLayout,
		subRoutes:{
			'/overview':{
	    		component:AppOverView
	    	},
	    	'/create':{
	    		component:AppCreate
	    	},
	    	'/update':{
	    		component:AppUpdate
	    	},
	    	'/search':{
	    		component:AppSearch
	    	}
		}
  		
  	}
};