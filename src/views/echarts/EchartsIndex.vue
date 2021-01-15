<template>
  <div class="public-body">
    <h1 v-show="ok">ok Hello!</h1>
    <h1 v-show="no">no Hello!</h1>
    <div class="charts">
      <div class="charts-box">
        <echarts-bar></echarts-bar>
      </div>
      <div class="charts-box">
        <EchartsLine />
      </div>
      <div class="charts-box">
        <EchartsBarNew />
      </div>
      <div class="charts-box">
        <ConsumptionDataAnalysis />
      </div>
      <div class="charts-box">
        <FoodBeverage />
      </div>
      <div class="charts-box">
        <NearlyDaysTourists />
      </div>
      <div class="charts-box">
        <WordCloud />
      </div>
      <div class="charts-box">
        <AnalysistouristGender />
      </div>
      <div class="charts-box">
        <DataAnalysisTourists />
      </div>
      <div class="charts-box">
        <TouristTransaction />
      </div>
      <div class="charts-box">
        <TouristTransactionVolume />
      </div>
      <div class="charts-box">
        <NighttimeConsumptionBias />
      </div>
      <div class="charts-box">
        <AgeDistributionVisitors />
      </div>
      <div class="charts-box">
        <EachChannelNumber />
      </div>
     <div class="charts-box">
        <HuangFeiHong />
      </div>
      
    </div>
  </div>
</template>

<script>
import EchartsBar from "./charts/EchartsBar";
import EchartsLine from "./charts/EchartsLine";
import EchartsBarNew from "./charts/EchartsBarNew";
import ConsumptionDataAnalysis from "./charts/ConsumptionDataAnalysis";
import FoodBeverage from "./charts/FoodBeverage";
import NearlyDaysTourists from "./charts/NearlyDaysTourists";
import WordCloud from "./charts/WordCloud";
import AnalysistouristGender from "./charts/AnalysistouristGender";
import DataAnalysisTourists from "./charts/DataAnalysisTourists";
import TouristTransaction from "./charts/TouristTransaction";
import TouristTransactionVolume from "./charts/TouristTransactionVolume";
import NighttimeConsumptionBias from "./charts/NighttimeConsumptionBias";
import AgeDistributionVisitors from "./charts/AgeDistributionVisitors";
import EachChannelNumber from "./charts/EachChannelNumber";
import HuangFeiHong from "./charts/HuangFeiHong";
export default {
  name: "LineChart",
  components: {
    EchartsBar,
    EchartsLine,
    EchartsBarNew,
    ConsumptionDataAnalysis,
    FoodBeverage,
    NearlyDaysTourists,
    WordCloud,
    AnalysistouristGender,
    DataAnalysisTourists,
    TouristTransaction,
    TouristTransactionVolume,
    NighttimeConsumptionBias,
    AgeDistributionVisitors,
    EachChannelNumber,
    HuangFeiHong,
  },
  data() {
    return {
      ok: true,
      no: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../public.scss";
.public-body {
  background: #dfdfdf;
  h1 {
    color: #ffffff;
  }
}
.charts {
  overflow: hidden;
}
.charts-box {
  width: 50%;
  display: inline-block;
}
</style>