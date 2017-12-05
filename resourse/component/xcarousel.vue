<template>
	<div class="wr_out" id="wr_play">
		<ul class="wr_img">
			<li class="imgOn">
				<a href="https://y.qq.com/m/act/BattleofTeana2/v3/index.html?ADTAG=myqq&from=myqq&channel=10007100"><img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000000qjGnK3tG6Kg.jpg?max_age=2592000"/></a>
				<a class="desc" href="#"></a>
				<a class="number"><span class="num_child">1</span>&nbsp;<span class="num_father">/&nbsp;5</span></a>
			</li>
			<li class="imgOn">
				<a href="https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=428052&ADTAG=myqq&from=myqq&channel=10007100"><img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000002riXuH3EJu05.jpg?max_age=2592000"/></a>
				<a class="desc" href="#"></a>
				<a class="number"><span class="num_child">2</span>&nbsp;<span class="num_father">/&nbsp;5</span></a>
			</li>
			<li class="imgOn">
				<a href="https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq&from=myqq&channel=10007100"><img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000001wKi1p2HfTgr.jpg?max_age=2592000" /></a>
				<a class="desc" href="#"></a>
				<a class="number"><span class="num_child">3</span>&nbsp;<span class="num_father">/&nbsp;5</span></a>
			</li>
			<li class="imgOn">
				<a href="https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=422229&ADTAG=myqq&from=myqq&channel=10007100"><img src="https://y.gtimg.cn/music/photo_new/T003R720x288M0000020Huds2t7PXc.jpg?max_age=2592000" /></a>
				<a class="desc" href="#"></a>
				<a class="number"><span class="num_child">4</span>&nbsp;<span class="num_father">/&nbsp;5</span></a>
			</li>
			<li class="imgOn">
				<a href="https://y.qq.com/msa/cdreview/0_4478.html?ADTAG=myqq&from=myqq&channel=10007100"><img src="https://y.gtimg.cn/music/photo_new/T003R720x288M000002NayJn0dZFMd.jpg?max_age=2592000" /></a>
				<a class="desc" href="#"></a>
				<a class="number"><span class="num_child">5</span>&nbsp;<span class="num_father">/&nbsp;5</span></a>
			</li>	
		</ul>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				num:1
			}
		},
		methods: {
			carousel() {
				//代码初始化
				//var size = $(".wr_img li").size();
				var size = 5;	
				var self = this;
				
				for(var i = 1; i <= size; i++) {	
					var li = "<li>" + "</li>";
					$(".num").append(li);
				};

				//手动控制轮播效果
				$(".wr_img li").eq(0).show();
				$(".num li").eq(0).addClass("active");
				//自动
				var i = 0;
				var t = setInterval(move, 2000);
				//核心向右的函数
				function move() {
					i++;
					//num代表轮播图的第几张图片
					self.num = i;
					if(i == size) {
						i = 0;
					}
					$(".num li").eq(i).addClass("active").siblings().removeClass("active");
					$(".wr_img li").eq(i).fadeIn(1500).siblings().fadeOut(1500);

				}
			}
		},
		mounted() {
			this.carousel();			
		}
	}
</script>

<style lang="scss" scoped>
	.wr_out {
		height:128px;
		width: 100%;
		position: relative;	
		
	}	
	.wr_out .wr_img li {
		height:128px;
		width:100%;
		list-style: none;
		position: absolute;
		left: 0;
		top: 0;
		a{
			text-decoration: none;
		}
	}
	.wr_out .wr_img .desc{
		display: block;
		font-size: 0.5rem;
		z-index: 20;	
		text-indent: 0.31rem;
		color:white;
		font-size: 0.4rem;;	
	}
	.wr_out .wr_img .number{
		display: block;
		position: absolute;
		bottom: 0;
		font-size: 0.5rem;
		z-index: 20;
		margin-left: 280px;
		color: white;
		.num_child{
			color:#31c27c;
			font-size:16px;
		}
		.num_father{
			font-size:16px;
		}
	}
	.wr_out .wr_img img {
		width: 100%;
		height:128px;
	}
	.wr_out .num li {
		width: 10px;
		height: 10px;
		line-height: 20px;
		border-radius: 50%;
		background: #666;
		color: #fff;
		text-align: center;
		display: inline-block;
		font-size: 16px;
		margin: 0 3px;
		cursor: pointer;
	}
	.wr_out .num li .active {
		border: 2px solid #666;
		background: #fff;
	}	
</style>