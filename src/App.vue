<template lang="html">
    <main id="app" class="app" :class="routeClass">
        <!--<PageLoader/>-->
        <transition name="fade" mode="out-in" appear>
            <Navbar :key="active"/>
        </transition>

        <div class="app-body">
            <transition name="fade" mode="out-in" @before-leave="closeSideMenu" @before-enter="resetScroll" appear>
                <router-view :key="routeKey"></router-view>
            </transition>
        </div>

        <transition name="fade" mode="out-in" appear>
            <Footer :key="active"/>
        </transition>
    </main>
</template>

<script type="text/babel">
    //import setLocale from './languages';

    export default {
        name: 'App',

        computed: {

            active () {
                //return this.$store.getters.lang
            },
            config () {
                //return this.$store.getters.config
            },

            title () {
                //return this.$store.getters.title
            },

            routeClass () {
                let rootRoute = this.$route.name.replace('-more', '');
                return `app-${rootRoute}-view`
            },

            routeKey () {
                // Avoid router-view reload when routing from one part to another in a multiple parts page or post.
                let path = this.$route.path.replace(/\/$/, '');
                if (this.$route.name === 'page-more' || this.$route.name === 'post-more') {
                    // By removing the `part` param, different parts of a multiple parts page or post will share the same key.
                    return path.replace(/\/\d+$/, '')
                }
                let contentRoutes = ['posts', 'posts-more', 'category', 'category-more', 'post', 'post-more', 'page', 'page-more'];
                if (contentRoutes.indexOf(this.$route.name) > -1) {
                    return path
                }
                return path + '@' + this.active
            }

        },

        methods: {
            closeSideMenu () {
                this.$store.dispatch('sideMenu', false)
            },
            setLanguage (lang) {
                //this.$store.dispatch('systemLanguage', lang);
                //setLocale(lang)
            },
            resetScroll () {
                window.scrollTo(0, 0)
            }
        },

        created () {
            if (this.$route.query.lang) {
                this.setLanguage(this.$route.query.lang)
            }
        },

        watch: {
            $route (to, from) {
                if (to.query.lang !== from.query.lang) {
                    this.setLanguage(to.query.lang)
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/base";
</style>
