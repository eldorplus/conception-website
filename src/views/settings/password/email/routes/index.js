import Email  from '../components/Email.vue';

export default {
    label: 'Email',
    path: '/password/reset',
    name: 'password-reset',
    type: 'page',
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: Email
}
