import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: Home */ './components/Home/Home.vue'),
		children: [
			{
				path: '/payroll',
				component: () => import(/* webpackChunkName: Payroll */ './components/Payroll/Payroll.vue')
			}
		]
	},
	{
		path: '/login',
		component: () => import(/* webpackChunkName: Login */ './components/Login/Login.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
