/*
* 直接更新state的多个方法的对象
* */
import Vue from 'vue'

export default {
  edit (state, type) {
    state.type = type
  },
  isShow (state, status) {
    state.status = status

  }
}
