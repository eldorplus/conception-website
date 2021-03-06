import Profile  from '../components/Profile.vue';

export default {
    label: 'Mon profil',
    path: '/setting/profile',
    name: 'profile',
    type: 'page',
    meta: {
        requiresAuth: true,
        showProgressBar: true
    },
    component: Profile
}
