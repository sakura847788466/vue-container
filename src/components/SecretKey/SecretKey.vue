<template>
  <div class="userInfo page">
    <div class="list-item">
      <div class="title_s">
        <div>
          <p><span>秘钥信息:</span></p>
        </div>
      </div>
      <div class="otherInfo">
        <div class="otherInfo_list">
          <p><span>用户秘钥:</span><span>*********************</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>生成时间:</span><span>2020-03-19</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>有效时间:</span><span>2020-03-19</span>
          </p>
        </div>
        <div class="otherInfo_list">
          <p><span>失效时间:</span><span>2020-03-24</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      model1: '',
      dayList: [
        {
          value: '5',
          label: '5'
        },
        {
          value: '4',
          label: '4'
        },]
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
.userInfo {
  width: 100%;
  height: 400px;
  background-color: antiquewhite;
  padding: 10px;
}
.title_s {
  margin-bottom: 30px;
}
.title_s div span:nth-child(1) {
  font-size: 23px;
  font-family: "楷体";
  font-weight: bold;
}
.otherInfo {
  padding: 0 30px;
}
.otherInfo_list p {
  display: flex;
  font-size: 21px;
  height: 30px;
  line-height: 30px;
}
.otherInfo_list p span:nth-child(1) {
  flex: 1;
}
.otherInfo_list p span:nth-child(2) {
  flex: 2;
}
</style>