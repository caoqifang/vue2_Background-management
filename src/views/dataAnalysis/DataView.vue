<template>
  <div class="data-view">
    <!-- 图标必须给定一个宽高 -->
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataView } from "@/api/api";
export default {
  data() {
    return {};
  },
  created() {
    // 第二个图表的绘制 折线图
    dataView()
      .then((res) => {
        if (res.data.status === 200) {
          let { legend, xAxis, series } = res.data.data;
          this.draw(legend, xAxis, series);
        }
      })
      .catch((err) => {
        throw err;
      });
  },
  // 绘制图标在mounted中
  mounted() {
    // 初始化echarts对象
    let myChart = this.$echarts.init(document.getElementById("main1"));
    // 定义图表内容
    myChart.setOption({
      title: {
        text: "曹琦芳速成班",
      },
      tooltip: {},
      xAxis: {
        data: ["一班", "二班", "三班", "四班", "五班", "六班"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [45, 33, 65, 43, 78, 23],
        },
      ],
    });
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart1 = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          //标题
          text: "会话量",
        },
        tooltip: {
          //鼠标滑过提示
          trigger: "axis",
        },
        legend: {
          // 图例的数组数据
          data: legend,
        },
        xAxis: {
          // x轴类目数据数组
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        // 每项图例具体数据数组
        series,
      };
      // 绘制图表
      myChart1.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>