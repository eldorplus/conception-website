<template lang="html">
    <button v-if="isDesktop"
            :disabled="disabled"
            class="btn"
            @click="handleClick"
            :autofocus="autofocus"
            :type="nativeType"
            :class="classes">
        <i class="btn-icon-loading" v-if="loading"></i>
        <i :class="'btn-icon-' + icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>

    <button v-else
            :type="nativeType"
            :class="classes"
            @click="handleClick"
            :disabled="disabled">
        <span class="btn-icon-md" v-if="icon || $slots.icon">
            <slot name="icon">
                <i v-if="icon" class="icon" :class="'md-' + icon"></i>
            </slot>
        </span>
        <label class="md-button-text"><slot></slot></label>
    </button>
</template>

<script type="text/babel">
    /**
     * md-header
     * @module components/button
     * @desc Button
     * @param {string} [type=primary] - Display type accepted : primary, primary, danger, warning, hollow, disabled
     * @param {boolean} [disabled=false] - Disabled
     * @param {boolean} [plain=false] - Ghost button
     * @param {string} [size=normal] - Size accepted : normal, small, large
     * @param {string} [native-type] - Nativity type attributes
     * @param {string} [icon] - Icon, provide more, back, or custom icons (pass in the prefix without the icon class name, and finally stitched into. icon-xxx)
     * @param {slot} - Show text
     * @param {slot} [icon] Display icon
     *
     * @example
     * <md-button size="large" icon="back" type="primary">Text button</md-button>
     */
    import { event } from '@/utils';

    export default {
        name: 'MdButton',

        props: {
            icon: {
                type: String,
                default: ''
            },
            disabled: Boolean,
            nativeType: {
                type: String,
                default: 'button'
            },
            plain: Boolean,
            type: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                default: 'normal',
                validator(value) {
                    return ['small', 'normal', 'large'].indexOf(value) > -1;
                }
            },
            loading: Boolean,
            autofocus: Boolean
        },

        methods: {
            handleClick(evt) {
                event.emit('click', evt);
            }
        },

        computed: {
            classes() {
                return [
                    'btn',
                    this.type ? 'btn-' + this.type : '',
                    this.size ? 'btn-' + this.size : '',
                    {
                        'is-disabled': this.disabled,
                        'is-loading': this.loading,
                        'is-plain': this.plain
                    }];
            },
            isDesktop () {
                return this.isMobile.isPhone();
            }
        }
    }
</script>

<style lang="scss">
    @import '../../assets/styles/components/button/button';
</style>