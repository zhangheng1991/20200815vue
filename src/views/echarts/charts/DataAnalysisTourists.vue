<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EchartsLiquidfillBar :textFont="textFont" :color="color" :data="data" :ChattTitle="ChattTitle" :height="height" :id="id" />
  </div>
</template>
<script>
import EchartsLiquidfillBar from "../../../components/echarts/liquidfill/EchartsLiquidfillBar";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
export default {
  name: "DataAnalysisTourists",
  components: { EchartsBox, EchartsLiquidfillBar },
  data() {
    return {
      title: "资产游客占比数据分析",
      textFont: 16,
      color: ["#9366F5", "#4BB4F6", "#CDBA30"],
      data: [
        {
          value: 2,
          name: "高资产占比",
          valueP: 0.2222
        },
        {
          value: 3,
          name: "中资产占比"
        },
        {
          value: 4,
          name: "低资产占比"
        }
      ],
      ChattTitle: " 时间：",
      height: "400px",
      id: "DataAnalysisTouristss"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>