<template>
  <div class="header">
    <el-header >
      <div class="title">后台管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from "@/utils/setToken";
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    // 获取登陆的用户名
    this.name = getToken('username')
  },
};
</script>

<style lang="scss" scoped>
.header{
    .el-header{
        background: #ffe407;
        font-weight: 600;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title{
            width: 230px;
            font-size: 24px;
        }
    }
}
</style>