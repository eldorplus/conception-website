import Login  from '../components/Login.vue';

export default {
    label: 'Se connecter',
    path: '/login',
    name: 'login',
    type: 'page',
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: Login
}
