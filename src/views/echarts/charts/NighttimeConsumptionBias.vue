<template>
  <div class="PublicBox">
      <ExchartsBox :title="title" />
      <EchartsPies :id="id" :textFont="textFont" :color="color" :data="data" :ChattTitle="ChattTitle" :heigth="heigth" />
  </div>
  
</template>
<script>
import ExchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsPies from "../../../components/echarts/pie/EchartsPies";
export default {
  name: "NighttimeConsumptionBias",
  components: { ExchartsBox, EchartsPies },
  data() {
    return {
      title: "各个停车场停车数",
      textFont: 16,
      color: ["#A194EC", "#66F3EB", "#3B98F8"],
      data: [
        {
          value: 25,
          name: "无消费",
          normal: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#40E8AC" // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#23EA8F" // 0% 处的颜色
                }
              ]
            }
          }
        },
        {
          value: 75,
          name: "有消费",
          itemStyle: {
            normal: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: "#1EBCC0" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#00B9FF" // 0% 处的颜色
                  }
                ]
              }
            }
          }
        }
      ],
      ChattTitle: "各个停车场停车数",
      heigth: "400px",
      id: "NighttimeConsumptionBias"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>