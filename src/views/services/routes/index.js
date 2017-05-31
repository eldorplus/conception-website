import Services from '../components/Services.vue';
import WebSite from '../website/routes/route';

export default {
    label: 'Services',
    path: '/services',
    name: 'services',
    type: 'dropdown',
    redirect: '/services/creation-site-internet',
    children: [ WebSite ],
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: Services
}