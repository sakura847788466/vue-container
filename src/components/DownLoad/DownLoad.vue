<template>
<div class="page" >
 <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="中间件下载包" name="1">
    <div>
      <el-checkbox v-model="checked"></el-checkbox>
      <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/link">https://element.eleme.cn/#/zh-CN/component/link</el-link>
    </div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="中间件下载包" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="中间件下载包" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="中间件下载包" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
  <el-button type="primary" style="position: absolute;right: 40px;bottom: 30px;width: 100px;">下载</el-button>
</div>
  
</template>
<script>
export default {
  data () {
    return {
       activeName: '1',
       checked:true
    }
  },
  methods: {
   
  }
}
</script>
<style scoped>
.page {
    box-sizing: border-box;
    margin: 20px auto 20px;
    padding: 30px;
    /* width: 1200px; */
    min-height: 833px;
    border-radius: 20px;
    background-color: #ffffff;
    position: relative;
}
.down_list {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
}
.down_list a {
  text-decoration: underline;
}
.down_list button {
  height: 30px;
}
</style>