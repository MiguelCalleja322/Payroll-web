import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: Home */ './components/Home/Home.vue'),
		children: [
			{
				path: '/payroll',
				component: () => import(/* webpackChunkName: Payroll */ './components/Payroll/Payroll.vue')
			},
			{
				path: '/salesrep',
				component: () => import(/* webpackChunkName: "signup" */ './components/Salesrep/Salesrep.vue')
			}
		]
	},
	{
		path: '/signup',
		component: () => import(/* webpackChunkName: "signup" */ './components/Signup/Signup.vue')
	},
	{
		path: '/:slug',
		name: 'pdf',
		component: () => import(/* webpackChunkName: "PDF" */ './components/PDF/PDF.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import(/* webpackChunkName: "404" */ './components/404/404.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
