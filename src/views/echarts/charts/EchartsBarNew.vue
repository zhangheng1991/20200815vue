<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <EchartsBar :data="data" :color="color" :textFont="textFont" :Xdata="Xdata" :legendData="legendData" :heigth="heigth" :id="id" />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import EchartsBar from "../../../components/echarts/bar/EchartsBar";
export default {
  name: "EchartsBars",
  components: { EchartsBox, EchartsBar },
  data() {
    return {
      title: "各个停车场停车数",
      textFont: 16,
      color: ["#A194EC", "#66F3EB", "#3B98F8"],
      data: [
        [120, 152, 200, 334, 290, 330, 220, 221],
        [80, 82, 80, 164, 189, 133, 122, 122],
        [20, 52, 20, 34, 89, 33, 22, 22]
      ],
      Xdata: [
        "停车场1",
        "停车场2",
        "停车场3",
        "停车场4",
        "停车场5",
        "停车场6",
        "停车场7",
        "停车场8"
      ],
      legendData: ["总停车数", "固定车辆数司", "临时停车数"],
      ChattTitle: "时间",
      heigth: "400px",
      id: "NumberParkingSpaces"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>