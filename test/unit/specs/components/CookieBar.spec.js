import Vue from 'vue'
import CookieBar from '@/components/CookieBar'

describe('CookieBar.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(CookieBar);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.Cookie__content').textContent)
            .to.equal('This website uses cookies to ensure you get the best experience on our website.')
    })
});