<template>
  <div class="public-body">
    <!-- <h1 v-show="ok">ok Hello!</h1>
    <h1 v-show="ok">okno Hello!</h1> -->
    <div class="charts">
      
      <el-col :span="24">
        <div class="charts-box">
          <sourceOf-tourists />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <echarts-bar></echarts-bar>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <EchartsLine />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <EchartsBarNew />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <ConsumptionDataAnalysis />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <FoodBeverage />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <NearlyDaysTourists />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <WordCloud />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <AnalysistouristGender />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <DataAnalysisTourists />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <TouristTransaction />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <TouristTransactionVolume />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <NighttimeConsumptionBias />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <AgeDistributionVisitors />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <EachChannelNumber />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="charts-box">
          <HuangFeiHong />
        </div>
      </el-col>
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
import SourceOfTourists from "./charts/SourceOfTourists";
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
    SourceOfTourists,
  },
  data() {
    return {
      ok: true,
      no: false,
    };
  },
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
  width: 100%;
  display: inline-block;
}
</style>