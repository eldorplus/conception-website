import PriceBox from './PriceBox.vue';

/* istanbul ignore next */
PriceBox.install = function(Vue) {
    Vue.component(PriceBox.name, PriceBox);
};

export default PriceBox;