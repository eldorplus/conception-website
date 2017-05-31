<template lang="html">
    <div class="pricing-block fl" :class="type">
        <h2 class="plan-title" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </h2>
        <div class="content" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div v-if="$slots.body">
            <slot name="body"></slot>
        </div>
        <div class="price-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'PriceBox',

        props: {
            title: {
                type: String,
                default: 'Formule basic'
            },
            type: {
                type: String,
                default: 'basic',
                validator(value) {
                    return ['basic', 'professional', 'business'].indexOf(value) > -1;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/pricebox';
</style>