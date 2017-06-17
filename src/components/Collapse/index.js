import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';

/* istanbul ignore next */
Collapse.install = function(Vue) {
    Vue.component(Collapse.name, Collapse);
};

/* istanbul ignore next */
CollapseItem.install = function(Vue) {
    Vue.component(CollapseItem.name, CollapseItem);
};

export {
    Collapse,
    CollapseItem
};
