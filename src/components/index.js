import Vue from 'vue';

import {Button, ButtonGroup} from './Button';
import CookieBar from './CookieBar';
import Footer from './Footer';
import Navbar  from './Navbar';
import { HasError, AlertError, AlertErrors, AlertSuccess } from './Form';
import PageLoader from './PageLoader/PageLoader.vue';
import NotFound from './NotFound';
import Popover from './Popover';
import Row from './Row';
import MdInput from './Input';
import Col from './Column';
import PriceBox from './PriceBox';

const components = [
    Button,
    ButtonGroup,
    CookieBar,
    Footer,
    Navbar,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess,
    PageLoader,
    NotFound,
    Popover,
    Row,
    Col,
    MdInput,
    PriceBox
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