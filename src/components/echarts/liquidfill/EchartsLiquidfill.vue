<template>
  <div :id="id" :style="{width:width,height:height}" ref="mapChart"></div>
</template>
<script>
import echarts from "echarts";
import "echarts-liquidfill";
export default {
  name: "EchartsLiquidfill",
  props: {
    id: {
      type: String,
      default: "EchartsLiquidfill"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    },
    data: {
      type: Array,
      default: [""]
    },
    Xdata: {
      type: Array,
      default: [""]
    },
    color: {
      type: Array,
      default: [""]
    },
    textFont: {
      type: Number,
      default: 14
    }
  },
  mounted() {
    console.log(this,"11111",this.$refs.mapChart)
    this.initCharts();
  },
  methods: {
    initCharts() {
      const { data, Xdata, color, textFont,id } = this;
      let MyEcharts = echarts.init(document.getElementById(id));
      let option = {
        title: {
          text: " "
        },
        series: [
          {
            type: "liquidFill",
            data: data,
            center: ["50%", "50%"],
            radius: "65%",
            color: ["#1A2B5A"],
            backgroundStyle: {
              color: "#E3F7FF"
            },
            backgroundStyle: {
              borderWidth: 1,
              color: "#216EA0"
            },
            label: {
              show: true,
              color: "#F8B62D",
              insideColor: "#F8B62D",
              fontSize: textFont,
              align: "center",
              baseline: "bottom",
              position: ["50%", "35%"]
            },
            outline: {
              show: true,
              borderDistance: 8,
              itemStyle: {
                color: "none",
                borderColor: "#18A0FF",
                borderWidth: 15
                // shadowBlur: 20,//阴影
                // shadowColor: '#18A0FF',
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#74BCFF"
                  },
                  {
                    offset: 1,
                    color: "#18A0FF"
                  }
                ])
              }
            }
          }
        ]
      };
      if (MyEcharts) {
        MyEcharts.setOption(option);
      }
      window.addEventListener("resize", () => {
        // const myChart = echarts.init(document.getElementById('chart-left'))
        // const myChart1 = echarts.init(document.getElementById('chart-btm'))
        MyEcharts.resize();
        // myChart1.resize()
      });
    }
  }
};
</script>