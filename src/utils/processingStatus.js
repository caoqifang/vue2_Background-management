export function zhuangtai(arr) {
    //   处理性别 状态 正常显示  不修改源数据 新增一个字段  在显示的时候 使用这个新增的字段
    arr.forEach((item) => {
        item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
        // 连续三元判断的写法
        item.state === "1"
            ? (item.state_text = "已入学")
            : item.state === "2"
                ? (item.state_text = "未入学")
                : (item.state_text = "休学中");
        item.number = "2202" + item.number;
    })
}