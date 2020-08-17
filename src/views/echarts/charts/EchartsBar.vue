<template>
  <div class="PublicBox">
    <EchartsBox :title="title" ></EchartsBox>
    <LineOne :Xdata="Xdata" :dataS="data" :height="height" :width="width" :id="id" />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import LineOne from "../../../components/echarts/line/line";
export default {
  name: "EchartsBar",
  data() {
    return {
      title: "商品日销售量",
      Xdata: ["衬衫A", "羊毛衫A", "雪纺衫A", "裤A子", "高跟鞋A", "袜子A"],
      data: [5, 20, 36, 10, 10, 20],
      height:"400px",
      width:"100%",
      id:"containers"
    };
  },
  components: {
    LineOne,
    EchartsBox
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>