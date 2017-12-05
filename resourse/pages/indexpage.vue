<template>
	<div>
		<xheader></xheader>
		<xnav></xnav>
		<xcarousel></xcarousel>
		<xlist></xlist>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import xheader from '../component/xheader.vue';
	import xnav from '../component/xnav.vue';
	import xlist from '../component/xlist.vue';
	import xcarousel from '../component/xcarousel.vue';
	import xfooter from '../component/xfooter.vue';
	
	export default {
		
		components:{
			xheader,
			xnav,
			xlist,
			xfooter,
			xcarousel
			
		}
	}

</script>

<style>
</style>