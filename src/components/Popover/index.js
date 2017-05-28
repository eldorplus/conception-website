import Popover from './Popover.vue';
import directive from './directive';

/* istanbul ignore next */
Popover.install = function(Vue) {
    Vue.directive('popover', directive);
    Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;