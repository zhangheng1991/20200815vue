<template>
  <div class="PublicBox">
      <EchartsBox :title="title" /> 
      <EchartsBars :id="id" :data="data" :Xdata="Xdata" :color="color"  :textFont="textFont" :height="height" :ChattTitle="ChattTitle" />
  </div>
</template>
<script>
import echarts  from "echarts";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsBars from "../../../components/echarts/bar/EchartsBars"
export default {
  name: "FoodBeverage",
  components:{EchartsBox,EchartsBars},
  data() {
    return {
      title: "餐饮排名数据分析",
      data: [10, 52, 200, 334, 390, 330, 220, 300, 400, 500, 600],
      Xdata: [
        "小肥羊",
        "德庄火锅",
        "迪欧咖啡",
        "佳客来牛排",
        "味千拉面",
        "吉祥馄沌",
        "布丁",
        "答案奶茶",
        "猫货串串",
        "顺鱼鱼馆"
      ],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#E10012" }, //柱图渐变色
        // { offset: 0.5, color: '#541B4D' },                 //柱图渐变色
        { offset: 1, color: "#0B2468" } //柱图渐变色
      ]),
      id: "FoodBeverage1",
      textFont: 14,
      height: "400px",
      ChattTitle:" ",
    };
  }
};
</script>
<style lang="scss" scoped>
   @import "../style.scss"
</style>