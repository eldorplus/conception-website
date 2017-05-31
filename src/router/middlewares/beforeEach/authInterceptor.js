import Firebase from '@/services/Firebase';

const authInterceptor = (router) => {
    router.beforeEach((to, from, next) => {

        if(to.meta.requiresAuth) {
            Firebase.auth().onAuthStateChanged((authenticated) => {
                if(authenticated)
                    return next();
                else
                    return next({
                        name: 'login',
                        query: { redirect: to.fullPath }
                    });
            })
        }
        if(to.meta.requiresGuest) {
            Firebase.auth().onAuthStateChanged((authenticated) => {
                if(!authenticated)
                    return next();
                else
                    return next({name: 'home'});
            });
        }
        next();
    });
};

export default authInterceptor