<template>
  <div class="userInfo page">
    <div class="list-item">
      <div class="title_s">
        <div>
          <p><span>用户类型:</span><span>(个人版)</span></p>
        </div>
      </div>
      <div class="otherInfo">
        <div class="otherInfo_list">
          <p><span>用户秘钥:</span><span>*********************</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>注册时间:</span><span>2020-03-19</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>身份有效时间:</span><span>2020-03-19 <span style="margin-left: 133px;margin-right: 30px;">当前可用天数:5</span>
              <el-select v-model="value" placeholder="申请可用天数">
                        <el-option
                          v-for="item in dayList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
              <el-button type="primary" style="margin-left:10px;">确定</el-button>
            </span>

          </p>
        </div>
        <div class="otherInfo_list">
          <p><span>身份失效时间:</span><span>2020-03-24</span></p>
        </div>
      </div>
      <br>
      <p style="font-size:20px;">用户信息:</p>
      <br>
      <div class="otherInfo">
        <div class="otherInfo_list">
          <p><span>用户名:</span><span>dsyun_ada</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>密码:</span><span>***********</span></p>
        </div>
        <div class="otherInfo_list">
          <p><span>身份失效时间:</span><span>2020-03-24</span></p>
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
        },],
        value:''
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
}
.title_s {
  margin-bottom: 30px;
}
.title_s div span:nth-child(1) {
  font-size: 19px;
}
.title_s div span:nth-child(2) {
  font-size: 16px;
  margin-left: 5px;
}
.otherInfo {
  padding: 0 30px;
}
.otherInfo_list p {
  display: flex;
  font-size: 16px;
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