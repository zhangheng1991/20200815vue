<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EchartsBar
      :lineData="lineData"
      :color="color"
      :textFont="textFont"
      :xData="xData"
      :height="height"
      :id="id"
      :lastYearData="lastYearData"
      :thisYearData="thisYearData"
      :timeLineData="timeLineData"
      :legend="legend"
      :lineColor="lineColor"
      :colors="colors"
    />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsBar from "../../../components/echarts/bar/EchartsBarTwice";
export default {
  name: "EchartsBars",
  components: { EchartsBox, EchartsBar },
  data() {
    return {
      title: "各个停车场停车数-(单位：月)",
      textFont: 16,
      color: ["#A194EC", "#66F3EB", "#3B98F8"],
      xData: ["小于18", "18-25", "26-35", "36-45", "46-55", "56-65", "大于66"],
      lineData: [100, 100, 100, 100, 100, 100, 100],
      lastYearData: [3, 20, 62, 34, 55, 65, 33],
      thisYearData: [11, 38, 23, 39, 66, 66, 79],
      timeLineData: [1],
      legend: ["男", "女"],
      lineColor: "#193E7D",
      colors: [
        {
          borderColor: "rgba(227,161,96,1)",
          // start: "rgba(227,161,96,0.8)",
          // end: "rgba(227,161,96,0.3)"
          start: "#E12770",
          end: "#E12770"
        },
        {
          borderColor: "rgba(0,222,255,1)",
          // start: "rgba(0,222,255,0.3)",
          // end: "rgba(0,222,255,0.8)"
          start: "#01C7E7",
          end: "#01C7E7"
        }
      ],
      // ChattTitle: " 时间：" + moment().format("YYYY/MM/DD"),
      height: "400px",
      id: "NumberParkingSpaces2"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>