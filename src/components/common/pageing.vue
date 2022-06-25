<!-- 组件化分页方法 -->
<template>
  <div class="worklist">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
    <!-- url请求地址定义在父级  通过传参方式传递进来 -->
    <!-- total 同理 通过父级传递 根据实际需求传递 -->
  </div>
</template>

<script>
import { getTableDate } from "@/utils/table";
export default {
  props: {
    total: Number,
    url: String,
  },
  data() {
    return {
      // 当前页数
      page: 1,
      // 每页显示条数
      size: 10,
      
    };
  },
    created() {
        // this.$parent 代表父组件实例对象
      getTableDate(this.$parent, this.url, { page: this.page, size: this.size }, [
        "completed",
      ]);
    },
    methods: {
      // 分页的方法
      handleSizeChange(val) {
        // 每页显示条数
        this.size = val;
        // 当前页数
        this.page = 1;
        //   console.log(`每页 ${val} 条`);
        getTableDate(this.$parent, this.url, { page: this.page, size: val }, [
          "completed",
        ]);
      },
      handleCurrentChange(val) {
        //   console.log(`当前页: ${val}`);
        this.page = val;
        getTableDate(this.$parent, this.url, { page: val, size: this.size }, [
          "completed",
        ]);
      },
    },
};
</script>

<style lang="scss" scoped>
.worklist {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>