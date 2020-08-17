<template>
  <div>
    <div class="PublicBox">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "echartsBox",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  },
  data() {
    return {
      data: []
    };
  }
};
</script>
<style lang="scss" scoped>
.PublicBox {
  // width: 100%;
  overflow: hidden;
  // background: #003176;
  margin: 10px;
  h1 {
    color: #ffffff;
    font-size: 16px;
    // padding: 10px;
    text-align: left;
    margin: 0px;
    padding: 0px;
  }
}
</style>