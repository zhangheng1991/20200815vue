<template>
  <div :id="id" :style="{width:width,height:height}"></div>
</template>
<script>
import echarts from "echarts";
import 'echarts/map/js/china.js';
export default {
  name: "EchatsMap",
  props: {
    id: {
      type: String,
      default: "EchatsMap"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    },
    ChattTitle: {
      type: String,
      default: ""
    },
    textFont: {
      type: Number,
      default: 14
    },
    data: {
      type: Array,
      default: [""]
    },
    Xdata: {
      type: Array,
      default: [""]
    },
    geoCoordMap: {
      type: Array,
      default: [""]
    },
    dataT: {
      type: Array,
      default: [""]
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const { data, Xdata, geoCoordMap, dataT, ChattTitle, textFont,id } = this;
      let MyEcharts = echarts.init(document.getElementById(id));

      var iconPath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      geoCoordMap["广州"] = [113.5107, 23.2196];
      let GZData = [];
      let tempData = ["广州", GZData];
      dataT.map((item, index) => {
        var arr = [];
        arr.push(item);
        arr.push({
          name: "广州"
        });
        GZData.push(arr);
      });

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[0].value
            });
          }
        }
        return res;
      };

      var color = [
        "#00ff78",
        "#ff971b",
        "#acff43",
        "#ff73b7",
        "#ffff46",
        "#27bbfe"
      ];
      var series = [
        {
          type: "map",
          name: "map", // 系列名称
          map: "china",
          //    width: '100%',
          geoIndex: 1,
          zlevel: 1,
          //    aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "rgba(128, 128, 128, 0)",
              borderColor: "#49a7d5" //省市边界线00fcff 516a89
            },
            emphasis: {
              areaColor: "rgba(128, 128, 128, 0)"
            }
          },
          //三维视觉属性
          //   itemStyle: {
          //     opacity: 1, // 透明度
          //     // color: '#4575b4',//地图颜色
          //     borderWidth: 1.5,//分界线宽度
          //     borderColor: "#459bca",//分界线颜色
          // },
          itemStyle: {
            opacity: 1, // 透明度
            // color: '#4575b4',//地图颜色
            borderWidth: 10, //分界线宽度
            borderColor: "yellow", //分界线颜色
            normal: {
              borderColor: "red", //省市边界线00fcff 516a89
              label: { show: true },
              areaStyle: { color: "red" }, //设置地图背景色的颜色设置,
              color: "#2194D2" //刚才说的图例颜色设置
            },
            emphasis: { label: { show: true } },
            borderColor: "red" //省市边界线00fcff 516a89
          },
          data: [
            {
              name: "南海诸岛",
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
          ]
        }
      ];

      series.push(
        {
          name: tempData[0],
          type: "lines",
          zlevel: 3,
          symbol: ["circle", "circle"],
          symbol: [iconPath, iconPath],
          // symbol: iconPath,
          effect: {
            show: true,
            period: 5, //箭头指向速度，值越小速度越快
            trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbolSize: 10, //图标大小
            symbol: "triangle" //三角形
            // symbol: iconPath,
          },
          lineStyle: {
            normal: {
              opacity: 1,
              curveness: 0.4, //曲线的弯曲程度
              color: "#609fd4",
              width: 2
            }
          },
          markPoint: {
            symbol: "triangle"
          },
          data: convertData(tempData[1])
        },
        {
          name: tempData[0],
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          // symbolSize: function (val) {
          //   // console.log(val)
          //   return val[2] / 2;
          // },
          itemStyle: {
            normal: {
              //                fontSize: 80,
            }
          },
          data: tempData[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
          })
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 4,
          symbolSize: 10,
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}",

              color: "yellow"
            }
          },
          itemStyle: {
            normal: {
              color: "yellow"
            }
          },
          rippleEffect: {
            scale: 4,
            brushType: "stroke"
          },
          data: [
            {
              name: tempData[0],
              value: geoCoordMap[tempData[0]],
              visualMap: false
            }
          ]
        },
        {
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 4,
          symbolSize: 20,
          symbol: "pin",
          itemStyle: {
            normal: {
              color: "yellow"
            }
          },
          rippleEffect: {
            //        brushType: 'stroke'
          },
          data: [
            {
              name: tempData[0],
              value: geoCoordMap[tempData[0]],
              visualMap: false
            }
          ]
        }
      );
      let option = {
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
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (params.seriesType == "scatter" && params.name != tempData[0]) {
              return (
                "<br>" +
                params.seriesName +
                " ---> " +
                params.data.name +
                "<br />数量：" +
                params.data.value[2]
              );
            } else if (params.seriesType == "lines") {
              return (
                "<br>" +
                params.data.fromName +
                " ---> " +
                params.data.toName +
                "<br />数量：" +
                params.data.value
              );
            } else {
              return params.name;
            }
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          color: color,
          //            textStyle: {
          //                color: '#fff',
          //            },
          show: false
        },
        geo: {
          name: "map", // 系列名称
          map: "china",
          zoom: 0.98,
          zlevel: 2,
          label: {
            emphasis: {
              show: true
            }
          },
          roam: false, //是否允许缩放
          // itemStyle: {
          //   normal: {
          //     areaColor: '#214278',
          //     borderColor: '#195BB9', //省市边界线00fcff 516a89

          //   },
          //   emphasis: {
          //     color: '#112246' //悬浮背景
          //   }
          // },
          itemStyle: {
            opacity: 1, // 透明度
            // color: '#4575b4',//地图颜色
            // borderWidth: 10,//分界线宽度
            borderColor: "yellow", //分界线颜色
            normal: {
              borderColor: "yellow", //省市边界线00fcff 516a89
              label: { show: true },
              areaStyle: { color: "yellow" }, //设置地图背景色的颜色设置,
              color: "#2194D2" //刚才说的图例颜色设置
            },
            // emphasis: { label: { show: true } },
            borderColor: "yellow" //省市边界线00fcff 516a89
          }
        },

        series: series
      };
      if (MyEcharts) {
        // option.color = ["#009EFA"]
        // option.series[0].data = data;
        // // option.series[0].label = labelOption;
        // option.xAxis[0].data = Xdata;
        // option.series[0].name = "商户排名数据分析";
        // option.series[0].itemStyle.normal.color = color;

        console.log(option);
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