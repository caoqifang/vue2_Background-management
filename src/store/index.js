import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 信息列表表单初始化
    form: {
      name: "",
      sex: "1",
      age: "",
      father: "",
      mather: "",
      address: "",
      time: "",
      phone: "",
    },
    // 信息列表表单校验规则
    rules: {
      name: [{ required: true, message: "请输入姓名" }],
      sex: [{ required: true }],
      age: [{ required: true, message: "请输入年龄" }],
      address: [{ required: true, message: "请输入地址" }],
      time: [{ required: true, message: "请选择入学时间" }],
      phone: [{ required: true, message: "请输入联系方式" }],
    },
  },
  getters: {
    getForm(state) {
      return state.form;
    },
    getRules(state) {
      return state.rules;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
