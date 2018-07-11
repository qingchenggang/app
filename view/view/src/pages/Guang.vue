<template>
	<div class="hello">
		<router-link id="Home" to="/Home">首页</router-link>
		<router-link id="FirstPage" to="/FirstPage">第一页</router-link>
		<router-link id="SecondPage" to="/SecondPage">第二页</router-link>
	</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted () {
			console.log(this.$store)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.class1 {
		background: #444;
		color: #eee;
	}
	
	.class2 {
		background: red;
		color: #fff;
	}
</style>