<template>
  <div class="page">
    <strong>可用接口列表:</strong>
    <br><br>
    <br><br>
    <strong>接口参数信息:</strong>
    <div data-v-393c4224=""
         class="list">
      <div class="list-item">
        <p class="chunk"><span>*</span><i>dsAppid</i> <input type="text"
                 placeholder=""
                 maxlength="39"> <samp class="tip-info"> 用户唯一标识 <span class="ds_appid-warn-tip"></span></samp></p>
      </div>
      <div class="list-item">
        <p class="chunk"><span>*</span><i>dsToken</i> <input type="text"
                 placeholder=""
                 maxlength="32"> <samp class="tip-info"> token值(访问令牌) <span class="secret-warn-tip"></span></samp></p>
      </div>
      <div class="list-item">
        <p class="chunk"><span>*</span><i>dsNumber</i> <input type="text"
                 placeholder=""
                 maxlength="16"> <samp class="tip-info"> 打印机编号 <span class="secret-warn-tip"></span></samp></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      List: [{
        path: '/v1.1/jsonWebTokens/getTokens',
        type: 'POST'
      }, {
        path: '/v1.1/jsonWebTokens/getTokens',
        type: 'POST'
      }, {
        path: '/v1.1/jsonWebTokens/getTokens',
        type: 'POST'
      }]
    }
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
}
.ivu-list-item {
  text-decoration: underline;
  cursor: pointer;
}

.list {
  margin-top: 30px;
  flex-direction: row;
  margin-bottom: 26px;
  width: 770px;
  height: 110px;
  background: #fafafa;
}
.list-item {
  font-size: 20px;
}
.chunk {
  color: #333333;
  font-size: 14px;
  line-height: 34px;
}
.chunk > span {
  float: left;
  margin-left: 20px;
  margin-right: 10px;
  color: rgba(216, 15, 15, 0.68);
}
.list-item i {
  display: inline-block;
  font-style: normal;
  width: 85px;
}
input[type="text"] {
  width: 200px;
  height: 20px;
  outline: none;
}
</style>