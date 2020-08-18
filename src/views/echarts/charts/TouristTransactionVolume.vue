<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EchartsPieRing :id="id" :TitleUnit="TitleUnit"  :textFont="textFont" :data="data" :height="height"/>
  </div>
</template>
<script>
import EchartsPieRing from "../../../components/echarts/pie/EchartsPieRing";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
export default {
  name: "TouristTransactionVolume",
  components: { EchartsPieRing, EchartsBox },
  data() {
    return {
      id: "TouristTransactionVolume1",
      title: "各个停车场收入",
      TitleUnit: "单位:千元 | 时间：",
      textFont: 14,
      data: [
        {
          value: 700,
          name: "停车场1"
        },
        {
          value: 600,
          name: "停车场2"
        },
        {
          value: 500,
          name: "停车场3"
        },
        {
          value: 400,
          name: "停车场4"
        },
        {
          value: 300,
          name: "停车场5"
        },
        {
          value: 200,
          name: "停车场6"
        }
      ],
      height: "400px"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>