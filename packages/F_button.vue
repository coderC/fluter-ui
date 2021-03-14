<template>
  <button class="F-button" :class="[`F-button--${type}`, {
  'is-plain': plain,
  'is-round': round,
  'is-circle': circle,
  'is-disabled': disabled
  }]"
  :disabled= "disabled"
  @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'F-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
.F-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover, &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.F-button--primary {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
    &:hover, &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}
.F-button--success {
    color: #fff;
    background: #67c23a;
    border-color: #67c23a;
    &:hover, &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
}
.F-button--info {
    color: #fff;
    background: #909399;
    border-color: #909399;
    &:hover, &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}
.F-button--warning {
    color: #fff;
    background: #e6a23c;
    border-color: #e6a23c;
    &:hover, &:focus {
        background: #8a857d;
        border-color: #ebb563;
        color: #fff;
    }
}
.F-button--danger {
    color: #fff;
    background: #f56c6c;
    border-color: #f56c6c;
    &:hover, &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
.F-button.is-plain {
    &:hover, &:focus {
        background: #fff;
        border-color: #409eff;
        color: #409eff;
    }
}
.F-button--primary.is-plain {
    color: #409eff;
    background: #ecf5f5;
    border-color: #b3b8ff;
    &:hover, &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}
.F-button--success {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover, &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}
.F-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover, &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}
.F-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover, &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}
.F-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover, &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}
.F-button.is-round {
    border-radius: 20px;
    padding: 12px;
}
.F-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
.F-button.is-disabled {
    cursor: no-drop;
}
</style>
