<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EffectScatter :id="id" :height="height" :color="color" :plantCap="plantCap" :datalist="datalist" :textFont="textFont" :ChattTitle="ChattTitle" />
  </div>
</template>
<script>
import echarts from "echarts";
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EffectScatter from "../../../components/echarts/EffectScatter/EffectScatter";
export default {
  name: "AgeDistributionVisitors",
  components: { EchartsBox, EffectScatter },
  data() {
    return {
      title: "各个停车场停车数",
      textFont: 16,
      color: ["#A194EC", "#66F3EB", "#3B98F8"],
      plantCap: [
        {
          name: "18岁以下",
          value: "8102人"
        },
        {
          name: "18岁-25岁",
          value: "25641人 "
        },
        {
          name: "26岁-35岁",
          value: "20188人 "
        },
        {
          name: "36岁-45岁",
          value: "11111人"
        },
        {
          name: "46岁-55岁",
          value: "22222人 "
        },
        {
          name: "56岁-65岁",
          value: "1212人"
        },
        {
          name: "65岁以上",
          value: "222人"
        }
      ],
      datalist: [
        {
          offset: [50, 50],
          symbolSize: 60,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#29c0fb"
            },
            {
              offset: 1,
              color: "#2dc5b9"
            }
          ])
        },
        {
          offset: [38, 70],
          symbolSize: 75,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#35d17e"
            },
            {
              offset: 1,
              color: "#49ddb2"
            }
          ])
        },
        {
          offset: [23, 43],
          symbolSize: 50,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#e5d273"
            },
            {
              offset: 1,
              color: "#e4a37f"
            }
          ])
        },
        {
          offset: [68, 40],
          symbolSize: 40,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#277aec"
            },
            {
              offset: 1,
              color: "#57c5ec"
            }
          ])
        },
        {
          offset: [38, 20],
          symbolSize: 65,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#e54948"
            },
            {
              offset: 1,
              color: "#f08456"
            }
          ])
        },
        {
          offset: [56, 15],
          symbolSize: 68,
          opacity: 0.7,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#11c46e"
            },
            {
              offset: 1,
              color: "#f08456"
            }
          ])
        },
        {
          offset: [65, 75],
          symbolSize: 65,
          opacity: 0.68,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff4141"
            },
            {
              offset: 1,
              color: "#ff8989"
            }
          ])
        }
      ],
      ChattTitle: "",
      height: "400px",
      id: "AgeDistributionVisitors2"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>