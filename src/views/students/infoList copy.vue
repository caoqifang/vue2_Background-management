<!-- 增删改查 方法模块化之前-->
<template>
  <div class="infoList">
    <el-form
      :inline="true"
      ref="formInline"
      class="demo-form-inline"
      size="mini"
      :rules="rules"
    >
      <el-form-item>
        <el-button type="primary" @click="addStatus">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- v-loading="loading" -->
    <el-table
      element-loading-text="玩命加载中~"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名" width="100" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="80" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" width="80" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲" width="150" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲" width="150" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" width="100" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" width="150" align="center">
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>

          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      width="500px"
      :title="state ? '添加学生信息' : '修改学生信息'"
      :visible.sync="dialogFormVisible"
      :closeOnPressEscape="false"
      :closeOnClickModal="false"
    >
      <el-form :model="form" :rules="rules" ref="form" status-icon>
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth"
          prop="name"
          ref="form"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          :label-width="formLabelWidth"
          prop="sex"
          ref="form"
        >
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item
          label="年龄"
          :label-width="formLabelWidth"
          prop="age"
          ref="form"
        >
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          :label-width="formLabelWidth"
          prop="father"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          :label-width="formLabelWidth"
          prop="mather"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          :label-width="formLabelWidth"
          prop="address"
          ref="form"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
          ref="form"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
          ref="form"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取 消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {  getInfo, info, infoDel } from "@/api/api";
import { zhuangtai } from "@/utils/processingStatus";
import { getData } from "@/utils/table";
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
      },
      formLabelWidth: "80px",
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        sex: [{ required: true }],
        age: [{ required: true, message: "请输入年龄" }],
        address: [{ required: true, message: "请输入地址" }],
        time: [{ required: true, message: "请选择入学时间" }],
        phone: [{ required: true, message: "请输入练习方式" }],
      },
      state: true,
      total: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    edit(row) {
      this.state = false;
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.form = { ...row };
      });
    },
    del(row) {
        // console.log(row.id);
      this.$alert("你确定要删除吗？", "提示", {
        confirmButtonText: "确定",
        callback: () => {
            // console.log(row.id);
          infoDel(row.id).then((res) => {
            if (res.data.status === 200) {
              this.getData();
              console.log(this.tableData);
              this.$message({ message: "删除成功", type: "success" });
            }
          });
        },
      });
    },
    closeInfo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    addStatus() {
      this.state = true;
      //   this.$refs['form'].resetFields();
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.form = {
          name: "",
          sex: "1",
          age: "",
          father: "",
          mather: "",
          address: "",
          time: "",
          phone: "",
        };
      });
    },
    sure(form) {
      //   console.log(form, this.form);
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 判断状态 如果是新增 就发新增的请求
          if (this.state) {
            info('post',this.form).then((res) => {
              if (res.data.status === 200) {
                this.getData();
                this.dialogFormVisible = false;
                this.$refs[form].resetFields();
                this.$message({ type: "success", message: "新增成功" });
              }
            });
          } else {
            info('put',this.form).then((res) => {
              if (res.data.status === 200) {
                this.dialogFormVisible = false;
                this.$refs["form"].resetFields();
                this.$nextTick(() => {
                  this.getData();
                });
                this.$message({ type: "success", message: "修改成功" });
              }
            });
          }
        }
      });
    },
    getData() {
      getInfo().then((res) => {
        if (res.data.status === 200) {
            this.tableData=[];
          this.tableData = res.data.data;
          this.total = res.data.total;
          zhuangtai(this.tableData);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.infoList {
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
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    text-align: left;
  }
  .el-dialog__headerbtn {
    display: none;
  }
}
</style>
