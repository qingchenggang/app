// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import home from '@/pages/home/home'
import recent from '@/pages/recent'
import order from '@/pages/order'
import me from '@/pages/me'
import meishi from '@/pages/meishi'
Vue.use(Router)

export default new Router({
	routes: [
				{
					path: '/',
					component: main,
					children: [
					{
					path: '',
					name: 'main',
					component: home
				},
				{
					path: '/home',
					name: 'home',
					component: home
				},
				{
					path: '/recent',
					name: 'recent',
					component: recent
				},
				{
					path: '/order',
					name: 'order',
					component: order
				},
				{
					path: '/me',
					name: 'me',
					component: me
				}
			]
		},
		{
			path: '/meishi',
			name: 'meishi',
			component: meishi
		}
	]
})