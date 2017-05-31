import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

/* istanbul ignore next */
Button.install = (Vue) => {
    Vue.component(Button.name, Button);
};

/* istanbul ignore next */
ButtonGroup.install = (Vue) => {
    Vue.component(ButtonGroup.name, ButtonGroup);
};

export {
    Button,
    ButtonGroup
};