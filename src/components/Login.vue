<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
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
export default {
  data() {
    const validateName = (rule, value, callback) => {
      // 请输入4-10位用户名
      console.log(value);
      let reg = /^[a-zA-Z0-9]{4,10}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      // 6-12位密码 需要包含大小写字母  和数字以及特殊符号
      let pass =
        /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!pass.test(value)) {
        callback(
          new Error("请输入6-12位密码，需要包含大小写字母和数字以及特殊符号")
        );
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 点击登陆触发的方法
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
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