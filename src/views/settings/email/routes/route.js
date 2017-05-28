import Email  from '../components/Email.vue';

export default {
    label: 'Email',
    path: '/setting/email',
    name: 'email',
    type: 'page',
    meta: {
        requiresAuth: true,
        showProgressBar: true
    },
    component: Email
}
