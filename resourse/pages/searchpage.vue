<template>
	<div>
		<xheader></xheader>
		<xnav></xnav>
		<xsearch></xsearch>
	</div>
</template>

<script>
	import xheader from '../component/xheader.vue';
	import xnav from '../component/xnav.vue';
	import xsearch from '../component/xsearch.vue';
	
	export default {		
		components:{
			xheader,
			xnav,
			xsearch			
		}
	}

</script>

<style>
</style>