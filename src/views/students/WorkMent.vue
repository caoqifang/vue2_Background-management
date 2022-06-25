<template>
  <div >
    <el-table :data="tableData" border style="width: 100%" v-loading="loading" element-loading-text="玩命加载中~">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
    <!-- 分页方法组件化后   -->
    <Page :total="total" :url="url" />
    </div>
</template>

<script>
import Page from "@/components/common/pageing.vue";
export default {
  components: { Page },
  data() {
    return {
      tableData: [],
      total: 0,
      loading: true,
       url:'/works'
    };
  },
};
</script>

<style lang="scss" scoped>

</style>