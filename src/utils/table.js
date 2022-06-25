// 获取表格的数据
// import {zhuangtai} from '@/utils/processingStatus'
export function getData(root, url, params) {
  root.$http
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
        root.tableData.forEach((item) => {
          item.sex === "1" ? (item.sex_text = "男") : (item.sex_text = "女");
        });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 新增和修改方法的封装
import qs from "qs";
export function changeInfo(root, method, url, form, callback) {
  let data = qs.stringify(form);
  root.$http[method](url, data)
    .then((res) => {
      if (res.data.status === 200) {
        callback(root, url);
        root.dialogFormVisible = false;
        root.$refs["form"].resetFields();
        root.$message({ type: "success", message: "操作成功 " });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 删除方法的封装
export function delData(root, url, id, callback) {
  root.$alert("你确定要删除吗？", "提示", {
    confirmButtonText: "确定",
    callback: () => {
      root.$http
        .delete(`${url}/${id}`)
        .then((res) => {
          if (res.data.status === 200) {
            callback(root, url);
            root.$message({ message: "删除成功", type: "success" });
          }
        })
        .catch((err) => {
          throw err;
        });
    },
  });
}

// 修改表单状态和表单标题状态的方法封装
export function changeFrom(root, type1, type2) {
  if (type1 !== '') {
    root.state = type1;
  }
  root.dialogFormVisible = type2;
}
