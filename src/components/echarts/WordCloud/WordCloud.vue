<template>
  <div :id="id" :style="{width:width,height:height}"></div>
</template>
<script>
import "echarts-wordcloud";
import echarts from "echarts";

export default {
  name: "WordCloud1",
  props: {
    id: {
      type: String,
      default: "WordCloud"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    },
    data: {
      type: Array,
      default: [""]
    },
    ChattTitle: {
      type: String,
      default: ""
    },
    textFont: {
      type: Number,
      default: 14
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const { id, ChattTitle, textFont, data } = this;
      const MyCharts = echarts.init(document.getElementById(id));
      let randcolor = () => {
        let r = 100 + ~~(Math.random() * 100);
        let g = 135 + ~~(Math.random() * 100);
        let b = 100 + ~~(Math.random() * 100);
        return `rgb(${r}, ${g}, ${b})`;
      };
      let option = {
        // backgroundColor: 'rgba(0,0,0,.5)',
        title: {
          show: false,
          text: ChattTitle,
          textStyle: {
            color: "#FFFFFF",
            fontSize: textFont,
            fontWeight: "normal"
          },
          left: 20,
          top: 20
        },
        tooltip: {
          trigger: "item",
          padding: [10, 15],
          textStyle: {
            fontSize: 20
          },
          formatter: params => {
            const { name, value } = params;

            return `
                      平台：${name} <br/>
                      数量：${value}
                  `;
          }
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 20,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                color: params => {
                  return randcolor();
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: data
          }
        ]
      };

      if (MyCharts) {
        MyCharts.setOption(option);
      }
      window.addEventListener("resize", () => {
        MyCharts.resize();
      });
    }
  }
};
</script>