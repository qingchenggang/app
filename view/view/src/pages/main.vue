<template>
	<div id="app">
		<router-view></router-view>
		<mu-container id='footer'>
			<mu-bottom-nav>
				<mu-bottom-nav-item to='home' title="首页" color='success' icon="restore"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='recent' title="附近" icon="room"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='order' title="订单" icon="assignment"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="我的" icon="perm_identity"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="我的" icon="perm_identity"></mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-container>
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
			
		},
		methods: {

		},
		mounted() {
			this.$router.push({//刷新回到首页
				name: 'home'
			});
			console.log(this.$route.path)
		}

	}
</script>

<style scoped>
	#footer {
		position: fixed;
		bottom: 0;
	}
	
	#footer .mu-bottom-item {
		min-width: 62px !important;
	}
	
	.mint-indicator-mask {
		top: 0;
		left: 0;
		position: fixed;
		width: 0 !important;
		height: 0 !important;
		opacity: 0;
		background: transparent;
	}
	
	.mu-bottom-item-active {
		padding-top: 6px;
		padding-bottom: 5px;
		color: #24b7ab !important;
	}
	
	.mu-bottom-item-active .mu-bottom-item-text {
		font-size: 14px;
		color: #24b7ab !important;
	}
	
	a {
		color: gray !important;
	}

</style>