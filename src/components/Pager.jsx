<template>
	<div v-show="totalRecords > 0" class="pagination-bar clearfix">
		<div class="pull-left pagination-summary">
			第 {{startRecord}}到 {{endRecord}} 条，共 {{totalRecords}} 条记录
		</div>
		<ul class="pull-right pagination">
			<li :class="{first:true,disabled:pageNo==1}">
				<a href="javascript:void(0);" @click="page(1,$event)">&lt;&lt;</a>
			</li>
			<li :class="{prev:true,disabled:pageNo==1}">
				<a href="javascript:void(0);" @click="page(pageNo-1,$event)">&lt;</a>
			</li>
			<li v-for="index in (endPage-startPage+1)" :class="{page:true,active:pageNo==(startPage+index)}">
				<a href="javascript:void(0);" @click="page(startPage+index,$event)">{{startPage+index}}</a>
			</li>
			<li :class="{next:true,disabled:pageNo==totalPages}">
				<a href="javascript:void(0);" @click="page(pageNo+1,$event)">&gt;</a>
			</li>
			<li :class="{last:true,disabled:pageNo==totalPages}">
				<a href="javascript:void(0);" @click="page(totalPages,$event)">&gt;&gt;</a>
			</li>
		</ul>
	</div>
</template>

<script>

	module.exports = {
	    name: 'Pager',
	    replace : true,
		props : {
			"pageNo":{//页码
				type:Number,
				default:1
			}, 
			"pageSize":{//分页大小
				type:Number,
				default:10
			},  
			"totalRecords":{//总共记录数
				type:Number,
				default:0
			}, 
			"visiblePages":{//显示页码数
				type:Number,
				default:5
			},
			"pageChange":{//分页回调
				type:Function,
				default:function(evt,pageNo){}
			} 
		},
		data : function() {
			return {
			};
		},
		computed : {
			// 计算出来总共多少页
			totalPages : function() {
	
				var totalPages = this.totalRecords
						/ this.pageSize;
	
				if (this.totalRecords % this.pageSize != 0)
					totalPages = parseInt(totalPages) + 1;
	
				return totalPages;
			},
			// 渲染页码开始号
			startPage : function() {
	
				if (this.totalPages < this.visiblePages)
					return 1;
	
				var half = this.visiblePages / 2;
				if (this.visiblePages % 2 != 0)
					half = parseInt(half);
	
				// 页码显示范围
				var range = [ this.pageNo - half,
						this.pageNo + half ];
	
				var delta = range[0] > 0 ? 0 : 1 - range[0];
	
				range[0] = range[0] + delta;
	
				range[1] = range[1] + delta;
	
				if (range[1] > this.totalPages)
					range[0] = range[0]
							- (range[1] - this.totalPages);
	
				return Math.max(range[0], 1);
	
			},
			// 渲染页码结束号
			endPage : function() {
	
				if (this.totalPages < this.visiblePages)
					return this.totalPages;
	
				var half = this.visiblePages / 2;
				if (this.visiblePages % 2 != 0)
					half = parseInt(half);
	
				// 页码显示范围
				var range = [ this.pageNo - half,
						this.pageNo + half ];
	
				var delta = range[0] > 0 ? 0 : 1 - range[0];
	
				range[1] = range[1] + delta;
	
				return Math.min(range[1], this.totalPages);
			},
			// 显示记录开始号
			startRecord : function() {
	
				return (this.pageNo - 1) * this.pageSize + 1;
			},
			// 显示记录结束号
			endRecord : function() {
	
				return Math.min(this.pageNo * this.pageSize,
						this.totalRecords);
			}
		},
		methods : {
			page : function(page, event) {
	
				// 禁用
				if (/disabled/
						.test(event.target.parentNode.className))
					return;
	
				this.pageNo = page;

				this.$dispatch('page', page);

				this.pageChange.call(this, event,page);
			}
		}
	};
</script>

<style lang="less">
	.pagination-bar {
		margin: 15px 0;
	}

	.pagination {
		margin: 0;
	}
	
	.pagination-summary {
		margin: 7px 0 0;
	}
</style>