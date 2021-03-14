<template>
  <div class="F-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'F-radio-group',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang='scss' scoped>

</style>
