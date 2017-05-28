import Admin  from '../components/Admin.vue';

export default {
    label: 'Administration',
    path: '/setting/admin',
    name: 'admin',
    type: 'page',
    meta: {
        requiresAuth: true,
        showProgressBar: true
    },
    component: Admin
}
