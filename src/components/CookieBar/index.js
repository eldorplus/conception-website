import CookieBar from './CookieBar.vue';

/* istanbul ignore next */
CookieBar.install = (Vue) => {
    Vue.component(CookieBar.name, CookieBar);
};

export default CookieBar;