<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form
        label-width="80px"
        :model="form"
        ref="from"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.region"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username:'',
                password:''
            }
        }
    },
};
</script>

<style lang="scss" scoped>
</style>