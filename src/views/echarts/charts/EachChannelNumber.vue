<template>
  <div class="PublicBox">
      <EchartsBox :title="title" />
      <EchartsBarsCoss :id="id" :height="height" :data="data" :Xdata="Xdata" :textFont="textFont" :ChattTitle="ChattTitle" />
  </div>
</template>
<script>
import echarts from "echarts";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsBarsCoss from "../../../components/echarts/pie/EchartsBarsCoss";
export default {
  name: "EachChannelNumber",
  components: { EchartsBox, EchartsBarsCoss },
  data() {
    return {
      title: "各渠道检票数",
      id: "EachChannelNumber1",
      data: [166, 186, 182, 218, 153, 147, 513, 125, 711],
      Xdata: [
        "渠道商",
        "美团",
        "携程",
        "同城",
        "去哪儿",
        "驴妈妈",
        "小程序",
        "旅游社",
        "其他"
      ],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#0099F2" }, //柱图渐变色
        // { offset: 0.5, color: '#0059A7' },                 //柱图渐变色
        { offset: 1, color: "#002561" } //柱图渐变色
      ]),
      textFont: 16,
      ChattTitle: "",
      height: "400px"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>