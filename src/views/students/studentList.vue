<template>
  <div>
    <el-table
      v-loading="loading"
      element-loading-text="玩命加载中~"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="id" label="id" width="80" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="80" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" width="80" align="center">
      </el-table-column>
      <el-table-column prop="number" label="学号" width="150" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" width="150" align="center">
      </el-table-column>
      <el-table-column
        prop="state_text"
        label="状态"
        width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" width="150" align="center">
      </el-table-column>
      <el-table-column label="操作" width="80" align="center">
        <template>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { students } from "@/api/api";
export default {
  data() {
    return {
      tableData: [],
      loading: true,
    };
  },
  created() {
    this.getData();
    if (this.tableData) {
      this.loading = false;
    }
  },
  methods: {
    getData(params) {
      students(params).then((res) => {
        // console.log(res.data.data);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          //   处理性别 状态 正常显示  不修改源数据 新增一个字段  在显示的时候 使用这个新增的字段
          this.tableData.forEach((item) => {
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
            // 连续三元判断的写法
            item.state === "1"
              ? (item.state_text = "已入学")
              : item.state === "2"
              ? (item.state_text = "未入学")
              : (item.state_text = "休学中");
            item.number = "2202" + item.number;
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>