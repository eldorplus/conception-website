import Password  from '../components/Password.vue';

export default {
    label: 'Password',
    path: '/password/reset/:token?',
    name: 'password-verify',
    type: 'page',
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: Password
}
