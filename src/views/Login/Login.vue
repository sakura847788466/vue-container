<template>
  <el-container>
    <el-header style="height:80px;padding:0;">
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="200px">
      <!-- 侧边栏 -->
        <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#fff"
        text-color="#409EFF"
        active-text-color="#409EFF"
        style="height: 100%;">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>用户主页</span>
          </template>
          <el-menu-item-group>
            <router-link to="/userInfo"> 
            <el-menu-item index="/index/DataCount">用户类型</el-menu-item>
            </router-link>
            <router-link to="/secretKey">
            <el-menu-item index="/index/UserManagement">用户秘钥</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-upload"></i>
            <span>文档信息</span>
          </template>
          <el-menu-item-group>
            <router-link to="/document"> 
            <el-menu-item index="/index/CompanyInfo">文档</el-menu-item>
            </router-link>
            <router-link to="/interFace"> 
            <el-menu-item index="/index/CompanyInfo">接口</el-menu-item>
            </router-link>
            <router-link to="/document"> 
            <el-menu-item index="/index/NewsMoving">部署</el-menu-item>
            </router-link>
          </el-menu-item-group>
 
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
          <i class="el-icon-document"></i>
          <span>下载中心</span>
          </template>
           <el-menu-item-group>
            <router-link to="/download"> 
            <el-menu-item index="">下载</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <!-- 侧边栏 -->
      </el-aside>
      <el-main>
        <!-- 中间内容 -->
        <router-view/>
        <!-- 中间内容 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
    name:'home',
    mounted(){
      console.log(this.$route.path)
    },
    data(){
      return{

      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components:{Header}
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 80px;
}
.el-container {
  height: 1000px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>