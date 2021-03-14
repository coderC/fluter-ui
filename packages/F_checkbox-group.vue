<template>
  <div class="F-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'F-checkbox-group',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
