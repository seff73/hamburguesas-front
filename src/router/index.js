import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Burgers from '../views/Burgers.vue';
import DetailsBurger from '../views/DetailsBurger';
import CreateBurger from '../views/CreateBurger.vue';
import EditBurger from '../views/EditBurger.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/hamburguesas',
		name: 'hamburguesas',
		component: Burgers,
	},
	{
		path: '/hamburguesas/:name',
		name: 'hamburguesas/details',
		component: DetailsBurger,
	},
	{
		path: '/hamburguesas/crear',
		name: 'crear',
		component: CreateBurger,
	},
	{
		path: '/hamburguesas/editar/:id',
		name: 'editar',
		component: EditBurger,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
