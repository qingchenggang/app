<template>
	<div>
		<daohang></daohang>
		<lunbo></lunbo>
		<lanmu></lanmu>
		<guanggao></guanggao>
		<shop></shop>
		
	</div>
</template>
<script>
	import axios from 'axios'
	import daohang from './daohang';
	import lunbo from './lunbo';
	import lanmu from './lanmu';
	import guanggao from './guanggao';
	import shop from './shop';

	export default {
		components: {
			daohang,
			lunbo,
			lanmu,
			guanggao,
			shop
		},
		created: function() {
			axios.get('/api/getUsers')
				.then(function(response) {
					console.log(response.data.data[1].age);
				})
				.catch(function(err) {
					console.log(err);
				});
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>