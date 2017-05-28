<template lang="html">
    <div class="navbar-wrap">
        <header class="navbar"
                ref="header"
                :style="headerStyle"
                :class="{'navbar-home': isHome}">
            <div class="container">
                <h1 class="navbar-brand">
                    <router-link :to="{ name: 'home' }">
                        <img src="../../assets/images/logo.svg"
                             alt="CWS Logo"
                             class="navbar-brand-logo">
                        <img src="../../assets/images/logo-small.svg"
                                alt="CWS Logo"
                                class="navbar-brand-logo-small">
                    </router-link>
                </h1>
                <nav class="navbar-menu">
                    <ul>
                        <li v-for="item in navigation" class="navbar-menu-item" :class="{'navbar-dropdown-container': item.type === 'dropdown'}">
                            <span v-if="item.type === 'dropdown' && !item.path" v-text="item.label"></span>
                            <router-link v-if="item.type === 'dropdown' && item.path && item.meta.requiresGuest" :to="{ name: item.name }" v-text="item.label" exact></router-link>
                            <ul v-if="item.type === 'dropdown' && item.meta.requiresGuest" class="navbar-dropdown">
                                <li v-for="child in item.children" v-if="item.meta.requiresGuest">
                                    <a v-if="child.type === 'outgoing'" :href="child.path" v-text="child.label" target="_blank" rel="noopener noreferrer"></a>
                                    <router-link v-if="child.type !== 'outgoing'" :to="{ name: child.name }" v-text="child.label" exact></router-link>
                                </li>
                            </ul>
                            <a v-if="item.type === 'outgoing'" :href="item.path" target="_blank" rel="noopener noreferrer" v-text="item.label"></a>
                            <router-link v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" :to="item.path" v-text="item.label" exact></router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <img class="menu-icon" src="../../assets/images/menu.svg" @click="toggleSideMenu">
        <div class="side-menu" :class="{'side-menu-open': menu}">
            <ul>
                <li class="side-brand"><h2 v-text="config.brand"></h2></li>
                <li v-for="item in navigation" class="side-menu-item" :class="{'side-dropdown-container': item.type === 'dropdown'}">
                    <span v-if="item.type === 'dropdown' && !item.path" v-text="item.label"></span>
                    <router-link v-if="item.type === 'dropdown' && item.path && item.meta.requiresGuest" :to="{ name: item.name }" v-text="item.label" exact></router-link>
                    <ul v-if="item.type === 'dropdown' && item.meta.requiresGuest" class="side-dropdown">
                        <li v-for="child in item.children" v-if="item.meta.requiresGuest">
                            <a v-if="child.type === 'outgoing'" :href="child.path" v-text="child.label" target="_blank" rel="noopener noreferrer"></a>
                            <router-link v-if="child.type !== 'outgoing'" :to="{ name: child.name }" v-text="child.label" exact></router-link>
                        </li>
                    </ul>
                    <a v-if="item.type === 'outgoing'" :href="item.path" target="_blank" rel="noopener noreferrer" v-text="item.label"></a>
                    <router-link v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" :to="item.path" v-text="item.label" exact></router-link>
                </li>
            </ul>
        </div>
        <transition name="fade">
            <div class="side-menu-backdrop" v-if="menu"></div>
        </transition>
    </div>
</template>

<script type="text/babel">
    import {retrieveByLanguage} from '@/utils';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'Navbar',

        replace: true,

        data() {
            return {
                isHome: false,
                headerStyle: {}
            };
        },

        watch: {
            '$route.path': {
                immediate: true,
                handler() {
                    this.isHome = /^home/.test(this.$route.name);
                    this.headerStyle.backgroundColor = `rgba(32, 160, 255, ${ this.isHome ? '0' : '1' })`;
                }
            }
        },

        computed: {

            navigation () {
                let routes = new Array;
                this.$router.options.routes.map((route) => {
                    if (route.meta.requiresGuest || route.name === 'home') {
                        if (route.name !== 'password-reset' && route.name !== 'password-verify') {
                            routes.push(route)
                        }
                    }
                });

                return routes;
            },

            ...mapGetters({
                config: 'getConfig',
                menu: 'getSideMenu',
                active: 'getLanguage'
            })
        },

        methods: {
            ...mapActions(['setSideMenu']),

            closeSideMenu () {
                this.setSideMenu(false)
            },

            toggleSideMenu () {
                this.setSideMenu(!this.menu)
            }
        },

        mounted () {
            function scroll(fn) {
                window.addEventListener('scroll', () => {
                    fn();
                }, false);
            }

            scroll(() => {
                if (this.isHome) {
                    const threshold = 200;
                    let alpha = Math.min((document.documentElement.scrollTop || document.body.scrollTop), threshold) / threshold;
                    this.$refs.header.style.backgroundColor = `rgba(32, 160, 255, ${ alpha })`;
                }
            });

            let menuIcon = this.$el.querySelector('.menu-icon');
            let sideMenu = this.$el.querySelector('.side-menu');
            document.body.addEventListener('click', e => {
                if (this.menu && e.target !== menuIcon && !sideMenu.contains(e.target)) {
                    this.closeSideMenu()
                }
            });
            document.body.addEventListener('touchmove', e => {
                if (this.menu) {
                    e.preventDefault()
                }
            })
        }
    }
</script>

<style lang="scss">
    @import '../../assets/styles/components/navbar';
</style>