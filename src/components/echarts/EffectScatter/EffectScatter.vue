<template>
  <div :id="id" :style="{width:width,height:height}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "EffectScatter",
  props: {
    id: {
      type: String,
      default: "EffectScatter"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      deault: "400px"
    },
    ChattTitle: {
      type: String,
      default: " "
    },
    textFont: {
      type: Number,
      default: 14
    },
    datalist: {
      type: Array,
      default: [""]
    },
    plantCap: {
      type: Array,
      default: [""]
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const { plantCap, datalist, textFont, ChattTitle,id } = this;
      let MyEcharts = echarts.init(document.getElementById(id));

      var datas = [];
      for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
          name: item.name + "\n" + item.value,
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          label: {
            normal: {
              textStyle: {
                fontSize: textFont,
                lineHeight: 17
              }
            }
          },
          itemStyle: {
            normal: {
              color: itemToStyle.color,
              opacity: itemToStyle.opacity
            }
          }
        });
      }
      let option = {
        // backgroundColor: '#20203e',
        title: {
          show: true,
          text: ChattTitle,
          textStyle: {
            color: "#FFFFFF",
            fontSize: textFont,
            fontWeight: "normal"
          },
          left: 20,
          top: 20
        },
        grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        series: [
          {
            type: "effectScatter",
            // symbol: 'circle',
            // symbolSize: 120,
            symbolSize: function(val) {
              return Math.max(val[2] / 200, 8);
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                  fontSize: textFont
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#00acea"
              }
            },
            data: datas
          },
          {
            // name: 'pm2.5',
            type: "effectScatter",
            data: datas,
            symbolSize: function(val) {
              return Math.max(val[2] / 600, 4);
            },
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                  fontSize: "20"
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#FF8C00",
                position: "right",
                show: true
              }
            }
          }
        ]
      };
      if (MyEcharts) {
        // option.color = ["#009EFA"]
        // option.series[0].data = data;
        // // option.series[0].label = labelOption;
        // option.xAxis[0].data = Xdata;
        // option.series[0].name = "商户排名数据分析";
        // option.series[0].itemStyle.normal.color = color;
        MyEcharts.setOption(option);
      }
      window.addEventListener("resize", () => {
        // const myChart = echarts.init(document.getElementById('chart-left'))
        // const myChart1 = echarts.init(document.getElementById('chart-btm'))
        MyEcharts.resize();
        // myChart1.resize()
      });
    }
  }
};
</script>