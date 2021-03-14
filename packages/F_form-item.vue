<template>
    <div class="F-form-item">
        <label class="F-form-item-label" :style="{width: this.Form.labelWidth}">{{label}}</label>
        <div class="F-form-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'F-form-item',
  props: {
    label: String
  },
  inject: {
    Form: {
    }
  }
}
</script>

<style lang='scss' scoped>
.F-form-item {
    margin-bottom: 25px;
    .F-form-item-label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .F-form-item-content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
        display: inline-block;
    }
}
</style>
