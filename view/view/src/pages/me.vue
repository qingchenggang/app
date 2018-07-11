<template>
	<div class="hello">
	我的
	</div>
</template>
<script>
	export default {
		name: 'hello',
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted () {
			//console.log(this.$store)
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