
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal"
              theme="dark"
              active-name="1">
          <div class="layout-logo">
            <img src="../../assets/img/logo.png"
                 alt="">
            <span>得实云中间件管理</span>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            用户
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            文档
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            下载
            </MenuItem>
            <MenuItem name="4">
            <img src="../../assets/img/user.gif"
                 alt=""
                 style="    height: 30px;width: 30px;margin-top: 13px;">

            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger
               :style="{background: '#fff'}">
          <Menu active-name="1-2"
                theme="light"
                width="auto"
                :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                用户
              </template>
              <MenuItem name="1-1"
                        @click.native="type('类型')">类型</MenuItem>
              <MenuItem name="1-2"
                        @click.native="type('秘钥')">秘钥</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                文档
              </template>
              <MenuItem name="2-1"
                        @click.native="type('接口')">接口</MenuItem>
              <MenuItem name="2-2">部署</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                下载
              </template>
              <MenuItem name="3-1"
                        @click.native="type('下载')">中间件包</MenuItem>
              <MenuItem name="3-2">中间件包</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>用户</BreadcrumbItem>
            <BreadcrumbItem>信息</BreadcrumbItem>
            <BreadcrumbItem>类型</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <UserInfo v-show="this.$store.state.type=='类型'" />
            <!-- 用户信息组件 -->
            <DownLoad v-show="this.$store.state.type=='下载'" />
            <!-- 下载组件 -->
            <InterFace v-show="this.$store.state.type=='接口'" />
            <!-- 接口列表组件 -->
            <SecretKey v-show="this.$store.state.type=='秘钥'" />
            <!-- 秘钥 -->
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import UserInfo from '../../components/UserInfo/UserInfo'
import DownLoad from '../../components/DownLoad/DownLoad'
import InterFace from '../../components/InterFace/InterFace'
import SecretKey from '../../components/SecretKey/SecretKey'

import { MapState, mapState } from 'vuex'

export default {
  name: 'index',
  mounted () {
    this.type()
    const info = JSON.parse(localStorage.getItem('info'))
    this.userName = info.userName

  },
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    type (type) {
      this.$store.commit('edit', type)
    }
  },
  components: { UserInfo, DownLoad, InterFace, SecretKey },
  computed: {
    // ...mapState(['type'])
  }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-layout {
  height: 1000px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>