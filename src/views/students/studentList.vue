<template>
  <div class="studentList">
    <!-- 查询、重置功能 -->
    <el-form
      :inline="true"
      :model="formInline"
      ref="formInline"
      class="demo-form-inline"
      size="mini"
      :rules="rules"
    >
      <el-form-item label="姓名" prop="name" ref="form">
        <el-input
          v-model="formInline.name"
          placeholder="请输入姓名查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="find('formInline')"
          :disabled="inquire"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-table
      v-loading="loading"
      element-loading-text="玩命加载中~"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      border
      style="width: 100%"
    > -->
    <!-- 使用计算属性分页 -->
    <el-table
      v-loading="loading"
      element-loading-text="玩命加载中~"
      :data="compData"
      border
      style="width: 100%"
    >
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
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { students, del } from "@/api/api";
// 正则验证模块
import { queryStudent } from "@/utils/vaildate";
// 处理性别 状态的方法
import { zhuangtai } from "@/utils/processingStatus";
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      //   当前页数
      currentPage: 1,
      //   每页显示条数
      pageSize: 10,
      //   总条数
      total: 0,
      //   查询
      inquire: false,
      formInline: {
        name: "",
      },
      rules: {
        name: [{ validator: queryStudent, trigger: "blur" }],
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(params) {
      students(params).then((res) => {
        // console.log(res.data.data);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.total = res.data.total;
          zhuangtai(this.tableData);
          this.loading = false;
        }
      });
    },
    // 分页的方法
    handleSizeChange(val) {
      // 每页显示条数
      this.pageSize = val;
      // 当前页数
      this.currentPage = 1;
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    // 删除操作
    del(row) {
      // console.log(row);
      del(row.id).then((res) => {
        console.log(res);
        if (res.status === 200) {
          // this.tableData.forEach((item) => {
          //     if(item.id === row.id){

          //     }
          // })
          this.$message({ message: "删除成功", type: "success" });
          this.getData();
        }
      });
    },
    // 查询
    find(formInline) {
      console.log(this.formInline);
      //   通过验证 发请求 否则
      this.$refs[formInline].validate((valid) => {
        if (valid) {
          students(this.formInline).then((res) => {
            this.tableData = res.data.data;
            this.total = 1;
            // 处理性别 状态
            zhuangtai(this.tableData);
          });
        }
      });
    },
    // 重置
    reset() {
      this.tableData = [];
      this.formInline.name = "";
      this.getData();
    },
  },
  computed: {
    compData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
};
</script>

<style lang="scss">
.studentList {
  .demo-form-inline {
    text-align: left;
    .el-button--primary {
      color: #fff;
      background-color: #0b172e;
      border-color: #0b172e;
    }
  }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>