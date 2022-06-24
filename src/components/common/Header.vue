<template>
  <div class="header">
    <el-header>
      <div class="title">后台管理系统</div>
      <div>{{ name }} <i class="el-icon-switch-button" @click="out"></i></div>
    </el-header>
  </div>
</template>

<script>
import { getToken, removeToken } from "@/utils/setToken";
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    // 获取登陆的用户名
    if (getToken("username") === "admin") {
      this.name = "超级管理员";
    } else {
      this.name = getToken("username");
    }
  },
  methods: {
    out() {
      this.$confirm("您真的要退出吗？")
        .then((_) => {
          removeToken("username");
          removeToken("token");
          // 提示信息
          this.$message({ message: "已退出", type: "true" });
          this.$router.push("/");
          done();
        })
        .catch((_) => {
          // console.log(2);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  .el-header {
    // background: #ffe407;
    background: #172c47;
    color: white;
    font-weight: 600;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 230px;
      font-size: 24px;
    }
    .el-icon-switch-button {
      cursor: pointer;
    }
  }
}
</style>