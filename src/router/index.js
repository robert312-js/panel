import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/bans',
		component: () => import('../views/Bans/Bans.vue')
	},
	{
		path: '/',
		name: 'Dashboard',
		component: import('../views/Dashboard/Dashboard.vue')
	},
	{
		path: '/login',
		name: "Login",
		component: () => import('../views/Login/Login.vue')	
	},
	{
		path: '/profile/:id',
		name: 'Profile',
		component: () => import('../views/Profile/Profile.vue')
	},
	{
		path: '/rapoartestaff',
		component: () => import('../views/Raport-Staff/RaportStaff.vue')
	},
	{
		path: '/rules',
		name: "Regulament",
		component: () => import('../views/Rules/Rules.vue')	
	},
	{
		path: '/staff',
		component: () => import('../views/Staff/Staff.vue')
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