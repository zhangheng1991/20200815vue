<template>
  <div :id="id" :style="{width:width,height:height}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "EchartsPieRing",
  props: {
    id: {
      type: String,
      default: "EchartsPieRing"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    },
    data:{
        type:Array,
        default:[""]
    },
    textFont:{
        type:Number,
        default:14
    },
    unit:{
        type:String,
        default:" "
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const { data, id, textFont, unit } =this;
      let MyEcharts = echarts.init(document.getElementById(id));
      let option = {
        color: [
          "#52DFF3",
          "#CD4BD3",
          "#FECA41",
          "#2DBA6E",
          "#6146FA",
          "#921B56",
          "#C51648"
        ],
        // backgroundColor: '#0A173B',
        title: {
          text: "",
          left: "center",
          top: "50%",
          textStyle: {
            fontSize: 22,
            color: "#fff",
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          right: "5%",
          top: "center",
          itemWidth: 30,
          itemHeight: 15,
          textStyle: {
            color: "white",
            fontSize: textFont
          }
        },
        series: [
          {
            type: "pie",
            roseType: "radius",
            radius: ["25%", "80%"],
            center: ["45%", "50%"],
            // data: [{
            //   value: 220,
            //   name: '社会组织'
            // }, {
            //   value: 120,
            //   name: '事业单位'
            // },
            // {
            //   value: 189,
            //   name: '工商企业登记注册'
            // }
            // ],
            // label: {
            //   normal: {
            //     position: "inside",
            //     padding: [0, 10],
            //     formatter: '{d}%',
            //     rich: {
            //       font: {
            //         fontSize: textFont,
            //         padding: [5, 0],
            //         color: '#fff'
            //       },
            //       hr: {
            //         height: 0,
            //         borderWidth: 0,
            //         width: '100%',
            //         borderColor: '#fff'
            //       }
            //     }
            //   },
            // },
            label: {
              normal: {
                position: "inside",
                padding: [0, 10],
                // formatter: '{d}%\n  {b|{b}}',
                formatter: unit == "number" ? "{c|{c}}" : "{d}%",
                rich: {
                  a: {
                    color: "#ffffff",
                    fontSize: textFont,
                    lineHeight: textFont
                  },
                  b: {
                    //name 文字样式
                    fontSize: textFont,
                    lineHeight: textFont,
                    color: "#ffffff"
                  },
                  c: {
                    //value 文字样式
                    fontSize: textFont,
                    lineHeight: textFont,
                    color: "#ffffff",
                    align: "center"
                  }
                }
              }
            },
            labelLine: {
              show: false,
              length: 0,
              length2: 0
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 100,
                shadowOffsetX: 0,
                shadowColor: "rgba(0,0,0,0.5)"
              }
            }
          }
        ]
      };

      if (MyEcharts) {
        option.series[0].data = data;
        MyEcharts.setOption(option);
      }
      window.addEventListener("resize", () => {
        MyEcharts.resize();
      });
    }
  }
};
</script>