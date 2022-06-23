<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form
        label-width="80px"
        :model="form"
        ref="form"
        status-icon
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="login('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 导入正则验证的模块
import { naemRule, passRule } from "@/utils/vaildate";
// 导入token的模块
import { setToken } from "@/utils/setToken";
// 请求地址
import url from "@/config/url";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: naemRule, trigger: "blur", required: true }],
        password: [{ validator: passRule, trigger: "blur", required: true }],
      },
    };
  },
  methods: {
    // 点击登陆触发的方法
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          // 发请求  登陆
          this.$http.post(url.login, this.form).then((res) => {
            console.log(res);
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .clearfix {
      font-size: 30px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>