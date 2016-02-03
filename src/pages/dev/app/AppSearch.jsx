<template>
	<div id="cnt">
		<table class="table table-bordered table-striped table-hover">
		    <thead>
		      <tr>
		        <th>ID</th>
		        <th>姓名</th>
		        <th>性别</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr v-if="results.length > 0" v-for="(index,result) in results" class="row-data row-{{index%2==0 ? 'old' : 'even'}}">
		        <td>{{result.id}}</td>
		        <td>{{result.name}}</td>
		        <td>{{result.sex}}</td>
		      </tr>
		    </tbody>
	  	</table>
	  		  	
  		<pager :page-size.sync="pageSize" :page-no.sync="pageNo" :total-records.sync="totalRecords"></pager>
  	
	  	<div v-if="results.length == 0" class="search-empty">抱歉，暂无数据！</div>
	  
  	</div>

</template>

<script>

  import Pager from '../../../components/Pager.vue';
  
  module.exports = {
    props: {
    },
    components:{
    	'pager':Pager
    },
    data : function() {
      return {
      	pageNo:1,
      	pageSize:10,
      	totalRecords:-1,
      	results:[]
      };
    },
    created : function() {

    },
    events:{
    	//注册翻页事件
    	page:function(){
    	
    		this.load();
    	
    	}
    },
    methods:{
   		//遮罩
    	mask:function(){
    		
			$(document.body).mask();
	
    	},
    	//遮罩
    	unmask:function(){
    		
    		$(document.body).unmask();
    	
    	},
    	//加载
    	load:function(params){
 
			this.mask();
		
			params=params || {};
			
			params.pageSize=this.pageSize;
			params.pageNo=this.pageNo;
			
	    	var resource = this.$resource('/v1/dev/apps/{pageNo}/{pageSize}');
			
			resource.get(params).then(function(res){
			
				this.unmask();
				
				var data=res.data;
				
				//Error
				if(data.ret!=1){
					
					return;
				}
		
				//处理结果
				this.totalRecords=300;
				
				this.results=data.result;
				
			},function(){
			
				this.unmask();
				
			});
		
    	}
    },
    ready : function() {
	
		this.load();
		
    },
    beforeDestory:function(){
    
    	this.unmask();
    
    }

  };
</script>

<style lang="less">
	.search-empty{
		height:300px;
	}
</style>