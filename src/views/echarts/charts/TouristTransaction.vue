<template>
  <div class="PublicBox">
      <EchartsBox :title="title" /> 
      <EchartsLiquidfill :id="id" :data="data" :ChattTitle="ChattTitle" :textFont="textFont" :height="height" />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsLiquidfill from "../../../components/echarts/liquidfill/EchartsLiquidfill";
export default {
  name: "TouristTransaction",
  components: { EchartsBox, EchartsLiquidfill },
  data() {
    return {
      id: "TouristTransaction1",
      title: "游客交易量占比",
      data: [0.6],
      ChattTitle: "西樵山旅游对佛山市消费贡献度",
      textFont: 25,
      height: "400px"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>