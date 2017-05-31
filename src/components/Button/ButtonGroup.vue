<template lang="html">
    <div class="btn-group">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
  /**
   * button
   * @module components/basic/menu
   * @desc Used for button groups
   * @param {string} label - name
   */
  export default {
    name: 'ButtonGroup'
  };
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/button/button-group';
</style>