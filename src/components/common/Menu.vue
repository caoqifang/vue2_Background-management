<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#0b172e"
        text-color="#dcdcdc"
        active-text-color="#fff"
      >
        <div v-for="(item, index) in menus" :key="index">
          <el-submenu :index="index + ''" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
    };
  },
  created() {
    // console.log(this.$router.options.routes);
    this.menus = [...this.$router.options.routes];
    // console.log(this.menus);
  },
};
</script>

<style lang="scss">
.menu {
  .el-aside {
    height: 100%;
    overflow: hidden;
    .el-menu {
      height: 100%;
      .fa {
        margin-right: 10px;
      }
    }
    .el-sunmenu .el-menu-item {
      min-width: 0;
    }
  }
}
</style>