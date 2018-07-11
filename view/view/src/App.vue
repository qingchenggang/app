<template>
	<div id="app">
		<router-view></router-view>
		

	</div>
</template>

<script>
	
	export default {
		name: 'app',
		data() {
			return {
				
			}
		},

		computed: {
			num() {
				return this.$store.state.num
			}
		},
		methods: {
			
		},
		mounted() {
			//console.log(this.$store.state)
		}

	}
	/*$(function() {
		$("#footer").click(function() {
			alert("123")
		})
	})*/
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		color: #2c3e50;
	}
	
	

</style>