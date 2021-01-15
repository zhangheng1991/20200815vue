<template>
  <div class="PublicBox">
    <EchartsBox :title="title" />
    <ChinaMap
      :geoCoordMap="geoCoordMap"
      :HFData="HFData"
      :id="id"
      :height="height"
    />
  </div>
</template>
<script>
import EchartsBox from "../../../components/echarts/EchartsBox/EchartsBox";
import ChinaMap from "../../../components/echarts/map/ChinaMap";
export default {
  name: "SourceOfTourists",
  components: { EchartsBox, ChinaMap },
  data() {
    return {
      title: "旅游",
      id: "SourceOfTourists",
      height: "630px",
      ChattTitle: "",
      textFont: 14,
      geoCoordMap: {
        //可以在地图上显示的城市的坐标信息
        兰州市: [103.5901, 36.3043],
        乌鲁木齐: [87.9236, 43.5883],
        拉萨市: [91.11, 29.97],
        成都: [103.9526, 30.7617],

        开封: [113.4668, 34.6234],

        福州市: [119.4543, 25.9222],

        长沙: [113.0823, 28.2568],

        昆明市: [102.9199, 25.4663],
        西樵山: [113.12244, 23.009505],

        海口市: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
      },
      HFData: [
        {
          name: "上海",
          value: 295,
          type: 1,
        },
        {
          name: "兰州市",
          value: 1280,
          type: 2,
        },
        {
          name: "乌鲁木齐",
          value: 38880,
          type: 3,
        },
        {
          name: "拉萨市",
          value: 2260,
          type: 4,
        },
        {
          name: "成都",
          value: 4450,
          type: 1,
        },
        {
          name: "开封",
          value: 35640,
          type: 1,
        },
        {
          name: "福州市",
          value: 5530,
          type: 1,
        },
        {
          name: "长沙",
          value: 1120,
          type: 4,
        },
        {
          name: "昆明市",
          value: 44310,
          type: 3,
        },
        {
          name: "西樵山",
          value: 33320,
          type: 3,
        },
        {
          name: "海口市",
          value: 310,
          type: 3,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
</style>