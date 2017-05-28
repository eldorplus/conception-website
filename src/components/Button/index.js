import Button from './Button.vue'

/* istanbul ignore next */
Button.install = (Vue) => {
    Vue.component(Button.name, Button);
};

export  default Button;