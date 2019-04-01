<template>
  <section>
    <div class="chart-container">
      <ECharts
        v-if="chartOptions"
        :init-options="chartInitOptions"
        :options="chartOptions"
        ref="myCharts"
        class="my-chart"
        :style="{'height': H + 'px'}"
      ></ECharts>
      <aside v-if="!chartOptions" class="chart-loading f12">加载中...</aside>
    </div>
  </section>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";
import "echarts/lib/chart/line";
// import 'echarts/lib/chart/candlestick'
// import 'zrender/lib/svg/svg'

export default {
  props: ["data", "W", "H"],
  data() {
    return {
      chartInitOptions: {
        // renderer: 'svg'
      }
    };
  },
  components: {
    ECharts
  },
  mounted() {
    this.init();
  },
  computed: {
    chartOptions() {
      if (this.H === 0 || !this.data) {
        return;
      }
      // let dpr = this.dpr || 1;

      // let upColor = '#F95F56';
      // let downColor = '#1ACF90';

      // let data = this.klineData;

      // if (data === undefined || data === null){
      //     return;
      // }

      // let xData = [], yData = [];

      // console.log(xData, yData)

      let rS = this.data.realTimeScore,
        sS = this.data.startScore;

      let color = rS - sS >= 0 ? "#14c802" : "#dc0000";

      let xData = [],
        yData = [],
        datas = this.data.temperatureHistory;

      datas.forEach(item => {
        for (let key in item) {
          xData.push(key);
          yData.push(item[key] && item[key] !== "NaN" ? item[key] : 0);
        }
      });
      return {
        backgroundColor: "#f9f9f9",
        tooltip: {
          trigger: "axis"
        },

        grid: {
          top: "22%",
          bottom: "20%",
          left: "7%",
          right: "6%"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xData,
          axisTick: {
            //去掉刻度点样式
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#666666" //轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            //去掉刻度点样式
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#666666" //轴线颜色
            }
          }
        },
        tooltip: {
          trigger: "axis",
          data: datas,
          axisPointer: {
            type: "shadow"
          },
          formatter: function(param) {
            return "时间:"+param[0].name+"<br/>温度:"+param[0].value + "°C";
          }
        },
        series: [
          {
            name: "温度",
            type: "line",
            smooth: true,
            data: yData,
            markPoint: {
              symbolSize: 30,
              label: {
                //x轴标记点上文字样式
                normal: {
                  show: true,
                  type: "scale",
                  fontSize: 10,
                  formatter: function(param) {
                    return param.value + "°C";
                  }
                }
              },
              data: [
                    {value:yData[0],xAxis: 0, yAxis: yData[0]},
                    {value:yData[1],xAxis:1, yAxis: yData[1]},
                    {value:yData[2],xAxis:2, yAxis: yData[2]},
                    {value:yData[3],xAxis:3, yAxis: yData[3]},
                    {value:yData[4],xAxis:4, yAxis: yData[4]},
                    {value:yData[5],xAxis:5, yAxis: yData[5]},
                    {value:yData[6],xAxis:6, yAxis: yData[6]},
                    {value:yData[7],xAxis:7, yAxis: yData[7]},
                    {value:yData[8],xAxis:8, yAxis: yData[8]},
                    {value:yData[9],xAxis:9, yAxis: yData[9]},
                    {value:yData[10],xAxis:10, yAxis: yData[10]},
                    {value:yData[11],xAxis:11, yAxis: yData[11]},
                    {value:yData[12],xAxis:12, yAxis: yData[12]},
                    {value:yData[13],xAxis:13, yAxis: yData[13]},
                    {value:yData[14],xAxis:14, yAxis: yData[14]},
                    {value:yData[15],xAxis:15, yAxis: yData[15]},
                    {value:yData[16],xAxis:16, yAxis: yData[16]},
                    {value:yData[17],xAxis:17, yAxis: yData[17]},
                    {value:yData[18],xAxis:18, yAxis: yData[18]},
                    {value:yData[19],xAxis:19, yAxis: yData[19]},
                    {value:yData[20],xAxis:20, yAxis: yData[20]},
                    {value:yData[21],xAxis:21, yAxis: yData[21]},
                    {value:yData[22],xAxis:22, yAxis: yData[22]},
                    {value:yData[23],xAxis:23, yAxis: yData[23]},
                    {value:yData[24],xAxis:24, yAxis: yData[24]},
                    {value:yData[25],xAxis:25, yAxis: yData[25]},
                    {value:yData[26],xAxis:26, yAxis: yData[26]},
                    {value:yData[27],xAxis:27, yAxis: yData[27]},
                    {value:yData[28],xAxis:28, yAxis: yData[28]},
                    {value:yData[29],xAxis:29, yAxis: yData[29]},
                    {value:yData[30],xAxis:30, yAxis: yData[30]},
              ]
            }
          }
        ]
      };
    }
  },

  methods: {
    init() {
      // this.$refs.myCharts.showLoading();
      // setTimeout(() => {
      //     this.$refs.myCharts.on('legendselected', function (obj) {
      //     //do some thing
      //     //这里通过obj获取信息，设定option之后,重新载入图表
      //         console.log(obj);
      //     });
      // }, 3000)
    },

    dayFormat: function(time) {
      let _date = new Date(time);

      return _date.getMonth() + 1 + "/" + _date.getDate();
    }
  }
};
</script>


<style scoped>
.chart-container,
.my-chart {
  position: relative;
  width: 100%;
  height: 100%;
}
.chart-loading {
  padding-top: 20px;
  text-align: center;
  color: #999;
}
</style>




