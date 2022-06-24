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
// 导入封装后的登陆接口
import { login } from "@/api/api";
import { getToken } from '@/utils/setToken';
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
  created() {
    // 判断本地如果有token就跳转到首页
    if (getToken("token")) {
      this.$router.push("/home");
    }
  },
  methods: {
    // 点击登陆触发的方法
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          // 发请求  登陆
          // this.$http.post(url.login, this.form).then((res) => {
          //   console.log(res);//登录后  将服务器返回的token信息和用户id存储到本地 （存token 为了服务器验证 存用户id 为了在页面上显示）  //// 此处已封装模块
          //   if(res.status === 200){
          //     // 存token
          //     setToken('token',res.data.token)
          //     // 存ueserid
          //     setToken('username',res.data.username)
          //     // 提示信息
          //     this.$message({message:'登陆成功！',type:'success'})
          //     // 跳转到登陆后的页面
          //     this.$router.push('')
          //   }
          // });
          // 使用封装后的登陆方法
          login(this.form).then((res) => {
            if (res.status === 200) {
              // 存token
              setToken("token", res.data.token);
              // 存ueserid
              setToken("username", res.data.username);
              // 提示信息
              this.$message({ message: "登陆成功！", type: "success" });
              // 跳转到登陆后的页面
              this.$router.push("/home");
            }
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
  background: url(@/assets/images/bg.jpg) center no-repeat;
  .el-card {
    // background: #ffd50b;
    background: rgba($color: #ffffff, $alpha: 0.9);
  }
  .box-card {
    width: 450px;
    margin: 200px auto;
    .el-form .el-form-item__label {
      color: white;
    }
    .el-form-item {
      color: #fff;
    }
    .clearfix {
      font-size: 30px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>