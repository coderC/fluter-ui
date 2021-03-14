<template>
  <label class="F-radio" :class="{'is-checked': label === model}">
    <span class="F-radio-input">
      <div class="F-radio-inner"></div>
      <input type="radio" class="F-radio-original" :value="label" :name="name" v-model="model">
    </span>
    <span class="F-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'F-radio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang='scss' scoped>
.F-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .F-radio-input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .F-radio-inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &::after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .F-radio-original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            left: 0;
            margin: 0;
        }
    }
    .F-radio-label {
        font-size: 14px;
        padding-left: 10px;
    }
}
.F-radio.is-checked {
    .F-radio-input {
        .F-radio-inner {
            background: #409eff;
            border-color: #409eff;
            &::after {
                transform: translate(-50%,-50%) scale(1);
            }
        }
    }
    .F-radio-label {
        color: #409eff;
    }
}
</style>
