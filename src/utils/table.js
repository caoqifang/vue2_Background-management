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

// 作业列表获取表格数据方法封装
export function getTableDate(root, url, params,arr) {
  root.$http.get(url, { params: params || {} }).then((res) => {
    if (res.data.status === 200) {
      root.tableData = res.data.data;
      root.total = res.data.total
      root.tableData.map((item) => {
        arr.map((aitem) => {
          // 这里修改的arr是['completed']也就是修改对象中completed这个数据 如果要修改多个数据 可以在数组中写多个键
          item[aitem] ? item[aitem + '_text'] = '已完成' : item[aitem + '_text'] = '未完成'
        })
      })
      root.loading = false
    }
  })
    .catch(err => {
      throw err;
    })
}
// 上面方法最后一个传一个数组 为了能修改数据中的多个状态（每一个数据都是一个对象）
// 先遍历一遍所有数据，然后再遍历传进来的数组（数组中每一个元素都是字符串，对应数据中对象的键） 然后通过中括号取值的方式 修改数据
// [{a:1,b:2},{a:1,b:2},{a:1,b:2},{a:1,b:2},].map((item) => {
//   // console.log(item);
//   ['a'].map((aitem) => {
//       console.log(item[aitem]); 结果 四个一
//   })
// })