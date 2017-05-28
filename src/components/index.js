import Vue from 'vue';

import Button from './Button';
import CookieBar from './CookieBar';
import Footer from './Footer';
import Navbar  from './Navbar';
import { HasError, AlertError, AlertErrors, AlertSuccess } from './Form';
import PageLoader from './PageLoader/PageLoader.vue';
import NotFound from './NotFound';
import Popover from './Popover';

const components = [
    Button,
    CookieBar,
    Footer,
    Navbar,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
    PageLoader,
    NotFound,
    Popover
];

const install = (Vue, opts = {}) => {
    /* istanbul ignore if */
    if (install.installed) return;
    /**
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
    **/

    components.map(component => {
        Vue.component(component.name, component);
    });

    /**
    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
    **/
};

install(Vue);