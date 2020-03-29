<template>
  <div class="header"
       :class="{isFiexd:!isUser}">
    <header>
      <img src="../../assets/img/logo.png"
           alt=""
           class="logo_img">
      <div class="logo">得实云中间件管理</div>
      <ul class="nav">
      </ul>
      <div class="login"
           v-if="!isUser">
        <el-button type="danger"
                   size="small">注册</el-button>
        <el-button type="primary"
                   size="small">登录</el-button>
      </div>
      <div class="login"
           v-else>
        <el-button type="danger"
                   icon="el-icon-user-solid"
                   size="small"
                   circle
                   plain />
        <span class="userName">{{user.data.userMobile}}</span>
        <span class="set_ada"><img src="../../assets/img/set.png"
               style="margin-right: 8px;"
               alt="">修改信息</span>
        <span class="back_ada"><img src="../../assets/img/back.png"
               style="margin-right: 8px;"
               alt="">退出系统</span>
        <div v-show="isShowUser">
          <ul class="popover">
            <li><a href="">修改信息</a></li>
            <li><a>退出登录</a></li>
            <li>
              <a">返回首页</a">
            </li>
          </ul>
          <div class="modal"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

export default {
  name: "Header",
  mounted () {
  },
  data () {
    return {
      isShowLogin: false,
      activeNames: 'login',
      isShowUser: false,//
      dialogVisible: false,
      isUser: false
    }
  },
  methods: {

  }



}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #5c77deff;
  border-bottom: 1px solid #dddddd;
  box-shadow: 0 2px 5px #dddddd;
  z-index: 1;
}
.isFiexd {
  position: static;
}
header {
  display: flex;
  margin: 0 auto;
  width: 90%;
  line-height: 80px;
}

.logo {
  font-family: Arial !important;
  font-size: 24px;
  color: #ffffff;
}

.nav {
  display: flex;
  align-items: center;
  margin-left: 100px;
  font-size: 16px;
  color: #f09999;
}

.nav li {
  margin-right: 10px;
  padding-bottom: 2px;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.nav li:hover {
  border-bottom: 2px solid lightcoral;
  color: lightcoral;
}

.active {
  border-bottom: 2px solid lightcoral;
  color: lightcoral;
}

.login {
  position: relative;
  margin-left: auto;
  font-size: 14px;
  color: #fff;
}

/*登录成功 开始*/
/*模态框*/
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  opacity: 0;
  background-size: 100% 100%;
}

.popover {
  position: absolute;
  /*display: none;*/
  top: 30px;
  left: 36px;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  z-index: 1;
}

.popover li {
  width: 100%;
  line-height: 30px;
}

.popover li a {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.popover li a:hover {
  color: lightcoral;
  background-color: #fff;
}

.userName {
  height: 20px;
  line-height: 20px;
  display: inline-block;
  width: 130px;
  text-align: center;
  border-right: 1px solid #000;
  margin-right: 24px;
}
.set_ada,
.back_ada {
  height: 20px;
  display: inline-block;
  line-height: 20px;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
}
.logo_img {
  display: inline-block;
  height: 40px;
  width: 40px;
  line-height: 50px;
  margin-top: 19px;
  margin-right: 10px;
}
</style>