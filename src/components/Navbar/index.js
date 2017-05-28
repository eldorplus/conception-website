import Navbar from './Navbar.vue';

/* istanbul ignore next */
Navbar.install = (Vue) => {
    Vue.component(Navbar.name, Navbar);
};

export default Navbar;