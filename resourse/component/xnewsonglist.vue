<template>
	<div>
		<div class="count_box">
	    	<div class="count_box__desc">热歌推荐<span class="count_box__number">共100首</span></div>
	    </div>
		<!--<ul>-->
		<transition-group name='list' tag='ul'>
			<li v-for="(a,index) in arr" class="qui_list__item  js_play_song" data-index="0" data-songid="211968915" data-songtype="0" :key="index">
				<div class="qui_list__order">
					<span class="qui_list__decimal">{{index+1}}</span>
				</div>

				<div class="qui_list__bd">
					<div class="qui_list__box">
						<h3 class="qui_list__tit"><span class="qui_list__txt">{{a.songName}}</span></h3>
						<p class="qui_list__desc">
							<span class="qui_list__txt">{{a.singerName}}</span>
						</p>
					</div>
					<div class="qui_list__more">
						<i class="qui_list__dot"></i>
					</div>
				</div>
				<span @click="playmusic(index+1)" :index="index" class="right iconfont icon-kaishi"></span>
				<audio :id="index+1" :src="'http://ws.stream.qqmusic.qq.com/' +a.id+ '.m4a?fromtag=46'"></audio>				
			</li>
		<!--</ul>-->
		</transition-group>	
		<div @click="loadMore" class="count_box">
	    		<div class="count_box__desc">加载更多  ></div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				//用于记录歌曲数字
				arr1: [],
				num: 0,
				m: 5,
				search: "",				
				bool: false,
				bool1:false,
				id:0,
				id1:this.$parent.$store.state.id1,
				//用于存储所有span标签
				ospans:''
			}
		},
		methods: {
			loadMore() {
				var self = this;
				$.ajax({
					type: "get",
					async: false,
					url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js",
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "JsonCallback",
					scriptCharset: 'GBK', //设置编码，否则会乱码
					success: function(data) {
						console.log(data.songlist);
						for(var i = self.num; i < self.m; i++) {
							self.arr = self.arr.concat(data.songlist[i]);
							self.arr1.push(data.songlist[i]);
						}
						//console.log(self.arr1);
						self.m = self.m + 5;
						self.num = self.num + 5;
					},
					error: function() {
						alert('fail');
					}
				});
			},
			playmusic(id) {
				this.bool = !this.bool;
				this.id = id;
				//歌曲的开始播放与停止播放
				if(this.bool) {
					document.getElementById(id).play();
				} else {
					document.getElementById(id).pause();
				}
				//console.log(this.bool);
				
				//播放状态
				this.$parent.$store.state.id1 = id;
				this.id1 = this.$parent.$store.state.id1;
//				console.log(this.$parent.$store.state.id1);
				
				
				this.ospans = $(".right");				
//				console.log(this.ospans[id]);
				
				//设置开关按钮状态
				if(this.bool){
					this.ospans[id-1].setAttribute("class", "iconfont icon-tingzhi right");
				}else{
					this.ospans[id-1].setAttribute("class", "iconfont icon-kaishi right");
				}
				

			}
		},
		components: {

		},
		computed: {
			computedArr() {

			}
		},
		mounted: function() {
			this.loadMore();
//			console.log(this.id1);
		}
	}
</script>

<style lang="scss" scoped>
	.qui_list__item:nth-child(-n+3) .qui_list__decimal {
		color: #FF400B;
	}
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
	
	/*.count_box__desc {
    	font-size: 14px;
    	height: 54px;
    	line-height: 54px;
    }*/
    
    
    
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