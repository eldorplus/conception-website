<template lang="html">
    <transition name="notification-fade">
        <div
                class="notification"
                :class="customClass"
                v-show="visible"
                :style="{ top: top ? top + 'px' : 'auto' }"
                @mouseenter="clearTimer()"
                @mouseleave="startTimer()"
                @click="click">
            <i
                    class="notification-icon"
                    :class="[ typeClass, iconClass ]"
                    v-if="type || iconClass">
            </i>
            <div class="notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
                <h2 class="notification-title" v-text="title"></h2>
                <div class="notification-content"><slot>{{ message }}</slot></div>
                <div class="notification-close-btn icon-close" @click.stop="close"></div>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
    let typeMap = {
        success: 'circle-check',
        info: 'information',
        warning: 'warning',
        error: 'circle-cross'
    };
    export default {
        data() {
            return {
                visible: false,
                title: '',
                message: '',
                duration: 4500,
                type: '',
                customClass: '',
                iconClass: '',
                onClose: null,
                onClick: null,
                closed: false,
                top: null,
                timer: null
            };
        },
        computed: {
            typeClass() {
                return this.type && typeMap[this.type] ? `icon-${ typeMap[this.type] }` : '';
            }
        },
        watch: {
            closed(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },
        methods: {
            destroyElement() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            click() {
                if (typeof this.onClick === 'function') {
                    this.onClick();
                }
            },
            close() {
                this.closed = true;
                if (typeof this.onClose === 'function') {
                    this.onClose();
                }
            },
            clearTimer() {
                clearTimeout(this.timer);
            },
            startTimer() {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close();
                        }
                    }, this.duration);
                }
            }
        },
        mounted() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/notification';
</style>