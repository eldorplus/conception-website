import Services from '../components/Services.vue';
import WebSite from '../website/routes/route';
import Referecement from '../referecement/routes/route';

export default {
    label: 'Services',
    path: '/services',
    name: 'services',
    type: 'dropdown',
    redirect: '/services/creation-site-internet',
    children: [ WebSite, Referecement ],
    meta: {
        requiresGuest: true,
        showProgressBar: true
    },
    component: Services
}