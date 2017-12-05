import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import $ from "jquery";
window.$ = $;
//使用vuex
Vue.use(Vuex);
//使用VueRouter
Vue.use(VueRouter);
window.bus = new Vue();

import indexpage from './resourse/pages/indexpage.vue';
import newsongpage from './resourse/pages/newsongpage.vue';
import searchpage from './resourse/pages/searchpage.vue';
let router = new VueRouter({
	routes:[
	{	path:'/',
		component:indexpage,
		redirect: '/index',
		
	},{
		path:'/index',
		component:indexpage,
	},{
		path:'/newsongpage',
		component:newsongpage,
	},{
		path:'/searchpage',
		component:searchpage,
	}]
});
let store = new Vuex.Store({
	state:{
		id:1,
		//播放状态
		id1:666,
	}
});

let index=new Vue({
	el:'#app',
	router,
	store,
	template:`
	<div>
		<router-view></router-view>
	</div>
	`,
	components:{
		indexpage,
		newsongpage,
		searchpage
	},
});
