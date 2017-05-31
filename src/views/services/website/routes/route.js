import WebSite  from '../components/WebSite.vue';

export default {
    label: 'Création Site Web',
    path: '/services/creation-site-internet',
    name: 'creation-site-internet',
    type: 'page',
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: WebSite
}
