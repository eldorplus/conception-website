import Vue from 'vue';
import target from './_target';
import { event } from '@/utils';

const listen_types = { click: true };

Vue.directive('modal', {
    bind(el, binding) {
        target(el, binding, listen_types, ({targets, vm}) => {
            targets.forEach(target => {
                event.$root.$emit('show::modal', target);
            });
        });
    }
});