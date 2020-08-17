<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EchartsLine :width="width" :height="height" :color="color" :chartData="chartData" :id="id" />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsLine from "../../../components/echarts/line/echartsLine";
export default {
  name: "EchartsLines",
  components: { EchartsBox, EchartsLine },
  data() {
    return {
      title: "XXX1公司员工薪资分布",
      width: "100%",
      height: "400px",
      id: "echartsLines",
      chartData: [
        {
          name: "本科及以上",
          value: 555555,
          unit: "元"
        },
        {
          name: "高中",
          value: 666666,
          unit: "元"
        },
        {
          name: "初中及以下",
          value: 777777,
          unit: "元"
        },
        {
          name: "其他",
          value: 888888,
          unit: "元"
        }
      ],
      color: ["#FF8700", "#ffc300", "#00e473", "#009DFF"]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>