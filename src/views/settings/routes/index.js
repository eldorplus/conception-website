import Setting  from '../components/Setting.vue';
import profile from '../profile/routes/route';
import email from '../email/routes/route';
import admin from '../admin/routes/route';
import logout from '../logout/routes/route';

export default {
    label: 'Paramètres',
    path: '/setting',
    name: 'setting',
    type: 'dropdown',
    redirect: '/setting/profile',
    children: [ profile, admin, email, logout ],
    meta: {
        requiresAuth: true,
        showProgressBar: true
    },
    component: Setting
}
