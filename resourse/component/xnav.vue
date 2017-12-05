<template>
	<nav class="mod_nav">
        <a :href="m.src" v-for="m in arr" @click="navColor(m.id)" data-nav="recom"  :class="id==m.id?'current':'' " >{{m.title}}</a>
    </nav>
</template>
<script>
	export default {
		data() {
			return {
				arr:[{
				title:"推荐",
				id:1,
				bool:true,
				num:1,
				src:"#/"
				},
				{
					title:"新歌榜",
					id:2,
					bool:false,
					num:2,
					src:"#/newsongpage"
				},
				{
					title:"搜索",
					id:3,
					bool:false,
					num:3,
					src:"#/searchpage"
				}],
				id:this.$parent.$store.state.id,
				}
		},
		mounted(){
			console.log(this.$parent.$store.state.id);
		},
		methods:{
			navColor:function(id){
				console.log(id);			
				this.$parent.$store.state.id = id;
						
			}
		}
		
	}
</script>
<style>
</style>