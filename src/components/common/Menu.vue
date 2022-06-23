<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#ffe407"
        text-color="#000"
        active-text-color="#000"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
    .el-sunmenu .el-menu-item{
        min-width: 0;
    }
  }
}
</style>