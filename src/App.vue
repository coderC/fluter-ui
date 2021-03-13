<template>
  <div id="app">
    <!-- <div class="row">
      <F-button >按钮</F-button>
      <F-button type="primary">按钮</F-button>
      <F-button type="success">按钮</F-button>
      <F-button type="info">按钮</F-button>
      <F-button type="warning">按钮</F-button>
      <F-button type="danger">按钮</F-button>
    </div>
    <div class="row">
      <F-button plain >按钮</F-button>
      <F-button plain type="primary">按钮</F-button>
      <F-button plain type="success">按钮</F-button>
      <F-button plain type="info">按钮</F-button>
      <F-button plain type="warning">按钮</F-button>
      <F-button plain type="danger">按钮</F-button>
    </div>
    <div class="row">
      <F-button plain round >按钮</F-button>
      <F-button plain round type="primary">按钮</F-button>
      <F-button plain round type="success">按钮</F-button>
      <F-button plain round type="info">按钮</F-button>
      <F-button plain round type="warning">按钮</F-button>
      <F-button plain round type="danger">按钮</F-button>
    </div>
    <div class="row">
      <F-button plain circle ></F-button>
      <F-button plain circle type="primary"></F-button>
      <F-button plain circle type="success"></F-button>
      <F-button plain circle circletype="info"></F-button>
      <F-button plain circle type="warning"></F-button>
      <F-button plain circle type="danger"></F-button>
    </div>
    <div class="row">
      <F-button plain disabled >按钮</F-button>
      <F-button plain disabled type="primary">按钮</F-button>
      <F-button plain disabled type="success">按钮</F-button>
      <F-button plain disabled type="info">按钮</F-button>
      <F-button plain disabled type="warning">按钮</F-button>
      <F-button plain disabled type="danger">按钮</F-button>
    </div> -->
    <!-- <F-dialog title="温馨提示"></F-dialog> -->
    <!-- <F-dialog>
      <template v-slot:titles>
        <p>我是标题</p>
      </template>
    </F-dialog> -->
    <!-- <F-dialog width='60%' top='200px'></F-dialog> -->
    <!-- <F-dialog>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </F-dialog> -->
    <!-- <F-button type=primary @click="visible=true">按钮</F-button>
    <F-dialog :visible.sync='visible'>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <F-button type='primary' @click="visible=false">确定</F-button>
        <F-button @click="visible=false">取消</F-button>
      </template>
    </F-dialog> -->
    <!-- <F-button @click="visible=true" type='primary'>按钮</F-button>
    <F-dialog :visible.sync='visible'>
      <input type="text">
      <template v-slot:footer>
        <F-button type='primary' @click="visible=false">确定</F-button>
        <F-button @click="visible=false">取消</F-button>
      </template>
    </F-dialog> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin: 20px;
  .F-button {
    margin: 20px;
  }
}
</style>
