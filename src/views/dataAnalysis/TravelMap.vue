<template>
  <div class="trave-map">
    <div id="main"></div>
  </div>
</template>

<script>
import geojson from "@/assets/geojson.json";
import { travel } from "@/api/api";
export default {
  data() {
    return {};
  },
  created() {
    travel().then((res) => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;
        // console.log(linesData);
        linesData.forEach((item) => {
          // console.log(item.coords[1]);

          item.coords[1] = [112.304436, 37.618179];
          let arr = item.coords[1];
          item.coords[1] = item.coords[0];
          item.coords[0] = arr;
        });
        this.draw(points, linesData);
      }
    });
  },
  methods: {
    draw(points, linesData) {
      // 绘制地图
      // 1.注册地图 this.$echarts.registerMap
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 注册可用的地图 必须包括geo组件或者map图片类型的时候才可以使用
      this.$echarts.registerMap("china", geojson);
      // console.log(geojson);
      // 配置地图
      let option = {
        backgroundColor: "rgb(121,145,209)",
        geo: {
          map: "china",
          // 地图长宽比
          aspectScale: 0.75,
          // 视角缩放比
          zoom: 1.1,
          // 每一块地图的样式
          itemStyle: {
            // 自然的状态
            normal: {
              backgroundColor: "rgb(147,235,248)",
              borderWidth: 1,
              // 区域颜色
              areaColor: {
                type: "radial", //径向渐变
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  //0%处的颜色
                  { offset: 0, color: "rgb(31,54,150)" },
                  //100%处的颜色
                  { offset: 1, color: "rgb(89,128,142)" },
                ],
                globalCoord: true,
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
          },
          // 南海诸岛
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                opacity: 0,
              },
            },
          ],
        },
        // 地图数据
        series: [
          {
            // 配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
            // 类型
            type: "map",
            label: {
              normal: {
                // show:true,
                textStyle: {
                  color: "#1DE9b6",
                },
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)",
                },
              },
            },
            // 缩放比
            zoom: 1.1,
            map: "china",
            itemStyle: {
              // 自然的状态
              normal: {
                // 区域颜色
                areaColor: {
                  type: "radial", //径向渐变
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    //0%处的颜色
                    { offset: 0, color: "#09132c" },
                    //100%处的颜色
                    { offset: 1, color: "#274d68" },
                  ],
                  globalCoord: true,
                },
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                borderWidth: 0.1,
              },
            },
          },
          //   关于地图中散点图的的配置
          {
            type: "effectScatter", //散点图
            coordinateSystem: "geo",
            showEffectOn: "render",
            symbolSize: 10, //散点大小
            zlevel: 1,
            data: points,
            //   涟漪特效
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
          //   地图中线路动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              // 动画周期
              permobl: 4,
              symbolSize: 7,
              symbol: "arrow",
              trailLength: 0.4,
            },
            // 线的样式
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                width: 1,
                opacity: 0.1,
                curveness: 0.2,
              },
            },
            data: linesData,
          },
        ],
      };
      // 绘制地图
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.trave-map {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>