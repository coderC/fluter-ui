<template>
  <transition name="dialog-fade">
    <div class="F-dialog-wrapper" v-show='visible' @click.self="handleClose">
      <div class="F-dialog" :style="{width, marginTop: top}">
        <div class="F-dialog-header">
          <slot name="titles">
            <span class="F-dialog-title">{{title}}</span>
          </slot>
          <button class="F-dialog-headerbtn" @click="handleClose">
            <i class="F-dialog-close">X</i>
          </button>
        </div>
        <div class="F-dialog-body">
          <slot></slot>
        </div>
        <div class="F-dialog-footer" v-if='$slots.footer'>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'F-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss' scoped>
.F-dialog-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background: rgba(0,0,0,.5);
    .F-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        width: 50%;
        &-header {
            padding: 20px 20px 10px;
            .F-dialog-title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .F-dialog-headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .F-dialog-close {
                    color: #909399;
                }
            }
        }
        &-body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &-footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep.F-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation:  fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
