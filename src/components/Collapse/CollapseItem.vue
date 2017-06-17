<template lang="html">
    <div class="collapse-item" :class="{'is-active': isActive}">
        <div class="collapse-item-header" @click="handleHeaderClick">
            <i class="collapse-item-header-arrow icon-arrow-right"></i>
            <slot name="title">{{title}}</slot>
        </div>
        <collapse-transition>
            <div class="collapse-item-wrap" v-show="isActive">
                <div class="collapse-item-content">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script type="text/babel">
  import CollapseTransition from '@/utils/CollapseTransition';
  import Emitter from '@/mixins/emitter';
  export default {
    name: 'CollapseItem',
    componentName: 'CollapseItem',
    mixins: [Emitter],
    components: { CollapseTransition },
    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0
      };
    },
    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },
    computed: {
      isActive() {
        return this.$parent.activeNames.indexOf(this.name) > -1;
      }
    },
    watch: {
      'isActive'(value) {
      }
    },
    methods: {
      handleHeaderClick() {
        this.dispatch('Collapse', 'item-click', this);
      }
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/collapse-item';
</style>