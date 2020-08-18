<template>
  <div class="PublicBox">
    <EchartsBox :title="title"  />
    <EchartsBarsCross :data="data" :Xdata="Xdata" :color="color" :textFont="textFont" :id="id" :height="height" />
  </div>
</template>
<script>
import echarts from "echarts";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsBarsCross from "../../../components/echarts/bar/EchartsBarsCross";
export default {
  name: "NearlyDaysTourists",
  components: { EchartsBox, EchartsBarsCross },
  data() {
    return {
      title: "不同来源地游客占比",
      data: [30, 20, 10, 15, 15, 2, 2, 2, 2, 2],
      Xdata: [
        "广州",
        "深圳",
        "佛山",
        "东莞",
        "中山",
        "珠海",
        "江门",
        "肇庆",
        "惠州",
        "粤东"
      ],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#0099F2" }, //柱图渐变色
        // { offset: 0.5, color: '#0059A7' },                 //柱图渐变色
        { offset: 1, color: "#002561" } //柱图渐变色
      ]),
      id: "NearlyDaysTourists1",
      textFont: 14,
      height: "400px"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>