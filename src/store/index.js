import Vue from 'vue'
import Vuex from 'vuex'
// 导入正则校验规则
import { queryStudent, getNumber, checkName, checkPhone } from '@/utils/vaildate'
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
      name: [{ validator: checkName, trigger: "blur", required: true, }],
      sex: [{ required: true }],
      age: [{ validator: getNumber, required: true, trigger: "blur", }],
      address: [{ required: true, message: "请输入地址" }],
      time: [{ required: true, message: "请选择入学时间" }],
      phone: [{ validator: checkPhone, required: true, trigger: "blur", }],
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
