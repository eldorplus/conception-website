/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */
import Vue from 'vue';
//import PageLoader from '@/components/PageLoader';
import MetaHead from '@/plugins/MetaHead';
import isMobile from '@/plugins/isMobile';
import Warn from '@/plugins/Warn';
import Firebase from '@/services/Firebase';
import { Select, Option, OptionGroup } from 'element-ui';

Vue.use(Warn);
Vue.use(MetaHead);
Vue.use(isMobile);
//Vue.use(PageLoader);

// configure language
import lang from 'element-ui/lib/locale/lang/fr';
import locale from 'element-ui/lib/locale';
locale.use(lang);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);

Vue.config.productionTip = false;
Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.silent = process.env.NODE_ENV === 'production';
Vue.config.devtools = process.env.NODE_ENV !== 'production';

import App from './App.vue'
import store from '@/stores';
import router from './router';
import {jwtToken} from '@/utils';
import {user} from '@/services';


/**
 * Register the global
 */
import '@/components';
import '@/directives';

//const progress = new PageLoader({ parent: '.page-loader' });

/**
 * @type {Vue}
 */
/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    store,
    //progress,
    template: '<App/>',
    components: {App},
    watch: {
        "$route": 'checkAuth'
    },
    methods: {
        checkAuth () {
            Firebase.auth().onAuthStateChanged((authenticated) => {

                if(authenticated) {
                    console.log('authenticated true')
                }
                else {
                    console.log('authenticated false')
                }
            });
        }
    }
});

window.app = app;