import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: import('../views/Dashboard.vue')
	},
	{
		path: '/staff',
		component: () => import('../views/Staff.vue')
	},
	{
		path: '/rapoartestaff',
		component: () => import('../views/RaportStaff.vue')
	},
	{
		path: '/bans',
		component: () => import('../views/Bans.vue')
	},
	{
		path: '/profile/:id',
		name: 'Profile',
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/login',
		name: "Login",
		component: () => import('../views/Login.vue')	
	},
	{
		path: '/rules',
		name: "Regulament",
		component: () => import('../views/Rules.vue')	
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('../views/NotFound.vue')
	}
]

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	// base: process.env.BASE_URL,
	history: createWebHistory(),
	mode: "hash",
	routes,
})

export default router