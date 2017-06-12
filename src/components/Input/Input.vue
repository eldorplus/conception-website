<template lang="html">
    <div :class="classes">
        <template v-if="type !== 'textarea'">
            <!-- Front element -->
            <div class="input-group-prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <!-- Input icon -->
            <slot name="icon">
                <i class="input-icon"
                   :class="iconClasses"
                   v-if="icon"
                   @click="handleIconClick">
                </i>
            </slot>
            <input v-if="type !== 'textarea'"
                   class="input-inner"
                   v-bind="$props"
                   :autocomplete="autoComplete"
                   :value="currentValue"
                   ref="input"
                   v-mask="mask"
                   :pattern="pattern"
                   :required="required"
                   @input="handleInput"
                   @focus="handleFocus"
                   @blur="handleBlur">
            <i class="input-icon icon-loading" v-if="validating"></i>
            <!-- Post element -->
            <div class="input-group-append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea v-else
                  class="textarea-inner"
                  :value="currentValue"
                  @input="handleInput"
                  :required="required"
                  ref="textarea"
                  v-bind="$props"
                  :style="textareaStyle"
                  @focus="handleFocus"
                  @blur="handleBlur">
        </textarea>
    </div>
</template>

<script type="text/babel">
    import emitter from '@/mixins/emitter';
    import textareaHeight from './TextareaHeight';
    import { merge } from '@/utils';

    export default {
        name: 'MdInput',

        componentName: 'MdInput',

        mixins: [emitter],

        data() {
            return {
                currentValue: this.value,
                textareaCalcStyle: {}
            };
        },

        props: {
            value: [String, Number],
            placeholder: String,
            size: String,
            resize: String,
            readonly: Boolean,
            autofocus: Boolean,
            icon: String,
            pattern: String,
            disabled: Boolean,
            required: {
                type: Boolean,
                default: false
            },
            mask: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: 'text'
            },
            name: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            autoComplete: {
                type: String,
                default: 'off'
            },
            form: String,
            maxlength: Number,
            minlength: Number,
            max: {},
            min: {},
            step: {},
            validateEvent: {
                type: Boolean,
                default: true
            },
            onIconClick: Function
        },

        computed: {
            classes () {
                return [
                    this.type === 'textarea' ? 'textarea' : 'input',
                    this.size ? 'input-' + this.size : '',
                    {
                        'is-disabled': this.disabled,
                        'input-group': this.$slots.prepend || this.$slots.append,
                        'input-group-append': this.$slots.append,
                        'input-group-prepend': this.$slots.prepend
                    }
                ];
            },

            iconClasses () {
                return [
                    'icon-' + this.icon,
                    this.onIconClick ? 'is-clickable' : ''
                ]
            },

            validating() {
                return this.$parent.validateState === 'validating';
            },

            textareaStyle() {
                return merge({}, this.textareaCalcStyle, {resize: this.resize});
            }
        },

        watch: {
            'value'(val, oldValue) {
                this.setCurrentValue(val);
            }
        },

        methods: {
            handleBlur(event) {
                this.$emit('blur', event);
                if (this.validateEvent) {
                    this.dispatch('FormItem', 'form.blur', [this.currentValue]);
                }
            },
            inputSelect() {
                this.$refs.input.select();
            },
            resizeTextarea() {
                if (this.$isServer) return;
                let {autosize, type} = this;
                if (!autosize || type !== 'textarea') return;
                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;
                this.textareaCalcStyle = textareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            handleFocus(event) {
                this.$emit('focus', event);
            },
            handleInput(event) {
                const value = event.target.value;
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('change', value);
            },
            handleIconClick(event) {
                if (this.onIconClick) {
                    this.onIconClick(event);
                }
                this.$emit('click', event);
            },
            setCurrentValue(value) {
                if (value === this.currentValue) return;
                this.$nextTick(_ => {
                    this.resizeTextarea();
                });
                this.currentValue = value;
                if (this.validateEvent) {
                    this.dispatch('FormItem', 'form.change', [value]);
                }
            }
        },

        created() {
            this.$on('inputSelect', this.inputSelect);
        },

        mounted() {
            this.resizeTextarea();
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/input';
</style>