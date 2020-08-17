<template>
  <div class="public-body">
    <h1 v-show="ok">ok Hello!</h1>
    <h1 v-show="no">no Hello!</h1>
    <div class="charts">
      <div class="charts-box">
        <EchartsBar></EchartsBar>
        
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
    </div>
  </div>
</template>

<script>
import EchartsBar from "./charts/EchartsBar";
import EchartsLine from "./charts/EchartsLine";
import EchartsBarNew from "./charts/EchartsBarNew";
import ConsumptionDataAnalysis from "./charts/ConsumptionDataAnalysis";
export default {
  name: "LineChart",
  components: { EchartsBar, EchartsLine,EchartsBarNew,ConsumptionDataAnalysis },
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