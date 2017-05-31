import { User } from '@/services';

export default {
    label: 'Se déconnecter',
    path: '/logout',
    name: 'logout',
    type: 'page',
    meta: {
        requiresAuth: true,
        showProgressBar: true
    },
    beforeEnter: (to, from, next) => {
        User.logout().then(() => {
            next({name: 'login'})
        })
    }
}

