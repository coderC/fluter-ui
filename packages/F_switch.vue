<template>
  <div class="F-switch" @click="handleClick" :class="{'is-checked': value}">
    <span class="F-switch-core" ref="core">
      <span class="F-switch-button"></span>
    </span>
    <input class="F-switch-input" type='checkbox' :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'F-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang='scss' scoped>
.F-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .F-switch-input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .F-switch-core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .F-switch-button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background: #fff;
        }
    }
}
.F-switch.is-checked {
    .F-switch-core {
        border-color: #409eff;
        background: #409eff;
        .F-switch-button {
            transform: translate(20px);
        }
    }
}
</style>
