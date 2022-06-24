<!-- 主页面 -->
<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <!-- 菜单区 -->

      <Menu />
      <el-container>
        <el-main>
          <Bread/>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入公共头部  底部 菜单
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Menu from "@/components/common/Menu.vue";
import Bread from '@/components/common/Breadcrumb.vue'
import { getToken } from "@/utils/setToken";
export default {
  components: { Header, Footer, Menu,Bread },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    .cont{
      margin: 20px 0;
    }
  }
}
</style>