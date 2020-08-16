<template>
  <div class="public-body">
    <h1 v-show="ok">ok Hello!</h1>
    <h1 v-show="no">no Hello!</h1>
    <div class="charts">
        <div class="charts-box">
         <EchartsBar></EchartsBar>
    </div>
    </div>
   
  </div>
</template>

<script>
import EchartsBar from "./charts/EchartsBar";
export default {
  name: "LineChart",
  components: { EchartsBar },
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
.public-body{
    background: #dfdfdf;
    h1{
        color:#ffffff;
    }
}
.charts{
    overflow: hidden;
}
.charts-box{
    width: 50%;
    display: inline-block;
}
</style>