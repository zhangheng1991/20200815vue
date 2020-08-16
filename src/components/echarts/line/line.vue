<template>
  <div>
    <div id="container" class="container" ref="chart" :style="{height:height,width:width}"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "LineOne",
  computed: {},
  props: {
    dataS: {
      type: Array,
      default: [""]
    },
    Xdata: {
      type: Array,
      default: [""]
    },
    width:{
        type:String,
        default:"100%"
    },
    height:{
        type:String,
        default:"300px"
    }
  },
  data() {
    return {
      data: [
        {
          name: "1111",
          title: "2222"
        }
      ]
    };
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(document.getElementById("container")); // 绘制图表

      // 　　console.log(this.$refs.chart)
      if (myChart) {
        myChart.setOption({
          title: {
            show: false,
            text: "在Vue中使用echarts",
            textStyle: { color: "white", fontsize: "14" }
          },
          tooltip: {},
          xAxis: {
            // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            data: this.Xdata,
            axisLine: {
              lineStyle: {
                color: "white"
              }
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "white"
              }
            }
          },
          series: [
            {
              name: "销量",
              type: "bar",
              //   data: [5, 20, 36, 10, 10, 20],
              data: this.dataS,
              barWidth: "30%"
            }
          ]
        });
      }
    }
  },
  mounted() {
    console.log(this);
    console.log(this.$el);
    this.initCharts();
  }
};
</script>
<style scoped lang="scss">
.container {
  width: 100%;
//   height: 300px;
}
</style>