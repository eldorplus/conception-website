import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../views';
import Middleware from './middlewares'
import Analytics from '../plugins/Analytics';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes
});

Middleware(router);

Analytics(router, 'UA-100644098-1');

export default router;
