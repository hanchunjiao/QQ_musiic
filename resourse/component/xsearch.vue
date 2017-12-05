<template>
	<div>
		<div class="mod_search_bar">
	        <div id="input_wrap" class="search_bar_cont">
	            <form id="search_form" method="get" action="#" onsubmit="return false">
	                <input v-model="content" id="search_input" class="search_input" type="search" autocomplete="off" style="-webkit-appearance: textfield;" autocorrect="off" placeholder="搜索歌曲、歌单、专辑">
	                <span class="icon icon_search">搜索</span>
	                <span id="del_btn" class="icon icon_delete" style="display: none;">删除</span>
	            </form>
	        </div>
	        <div id="cancel_btn" class="search_bar_tip_text" style="display: none;">取消</div>
    	</div>
    	
    	<!--搜索出来的列表-->
    	<!--<ul>-->
    	<transition-group name='list' tag='ul'>
			<li v-for="(a,index) in arr" class="qui_list__item  js_play_song" data-index="0" data-songid="211968915" data-songtype="0" :key="index">
				<div class="qui_list__order">
					<span class="qui_list__decimal">{{index+1}}</span>
				</div>

				<div class="qui_list__bd">
					<div class="qui_list__box">
						<h3 class="qui_list__tit"><span class="qui_list__txt" v-html="a.album_title"></span></h3>
						<p class="qui_list__desc">
							<span class="qui_list__txt" v-html="a.author"></span>
						</p>
					</div>
					<div class="qui_list__more">
						<i class="qui_list__dot"></i>
					</div>
				</div>
				<span @click="play(a.song_id,index+1)" :index="index" :id="a.song_id" class="right iconfont icon-kaishi"></span>
				<audio :id="index+1"></audio>				
			</li>
		<!--</ul>-->
		</transition-group>	
    	
     	
	    <div id="hot_keys" class="mod_search_result" style="">
			<h3 class="result_tit">热门搜索</h3>
			<div class="result_tags">
			    <a @click="addtext" class="tag_s tag_hot">梦想的声音第二季</a>
			    
			    
			    <a @click="addtext" class="js_keyword tag_s">RED VELVET</a>
			    
			    
			    <a @click="addtext" class="js_keyword tag_s">FANTASTIC BABY BIGBANG</a>
			    
			    
			    <a @click="addtext" class="js_keyword tag_s">野子</a>
			    
			    
			    <a @click="addtext" class="js_keyword tag_s">我的滑板鞋 网络歌手</a>
			    
			    
			    <a @click="addtext" class="js_keyword tag_s">FIREWORK</a>
			    
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {			
				num:10,
				content:'',
				arr:[],
				bool:false,
				src:'',			
			}
		},
		methods: {
			play(src,index) {
				var self = this;
				$.ajax({
					type: "get",
					async: true,
					url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid='+src ,
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "JsonCallback",
					scriptCharset: 'GBK', //设置编码，否则会乱码
					success: function(data) {						
						//console.log(data.song_list);
						self.src = data.bitrate.file_link;			
					}
				});
//				e.target.id=='src'
//				console.log(e);
				this.bool = !this.bool;
				//歌曲的开始播放与停止播放
				if(this.bool) {
					document.getElementById(index).setAttribute("src",this.src);
					document.getElementById(index).play();
				} else {
					document.getElementById(index).setAttribute("src",this.src);
					document.getElementById(index).pause();
				}
				
				//设置开关按钮状态
				this.ospans = $(".right");	
				if(this.bool){
					this.ospans[index-1].setAttribute("class", "iconfont icon-tingzhi right");
				}else{
					this.ospans[index-1].setAttribute("class", "iconfont icon-kaishi right");
				}
			},
			addtext(e){
				this.content = e.target.innerHTML;
			}
	
		},
		components: {

		},
		computed: {
			computedArr() {

			}
		},
		mounted: function() {
		

		},
		watch: {
			content: function(value, oldvalue) {
				var self = this;
				
				$.ajax({
					type: "get",
					data:{
						query:value,
						page_size:20
					},
					async: true,
					url: "http://musicapi.qianqian.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.search.common&format=jsonp&callback=search_common",
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "JsonCallback",
					scriptCharset: 'GBK', //设置编码，否则会乱码
					success: function(data) {						
						//console.log(data.song_list);
						if(data.song_list){
							self.arr=data.song_list;
							
						}else{
							self.arr=[]
						}						
					}
				});


			}
		}
	}
</script>


<style lang="scss" scoped>
	.right{
		line-height: 62px;
		margin-right: 14px;
	}
	.iconfont{
		font-size: 20px;
	}
	.icon-tingzhi{
		color: #31c27c;
		font-size:25px;
	}
	
	
	
	/*动画*/
	.list-item {
	  display: inline-block;
	  margin-right: 10px;
	}
	.list-enter-active, .list-leave-active {
  	transition: all 1s;
	}
	.list-enter, .list-leave-to
	/* .list-leave-active for below version 2.1.8 */ {
	  opacity: 0;
	  transform: translateY(30px);
	}
</style>