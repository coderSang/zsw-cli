<template>
  <div style="height: 100%">
    <div id="myChart" :style="{width: '100%', height: '80%', padding:'3% 0 0 0'}"></div>
  </div>
</template>

<script>
  export default {
    name: "Report",
    data () {
      return {
      }
    },
    mounted(){
      this.situationSummary();
    },
    methods: {
      situationSummary() {
        //初始化
        let dom = document.getElementById("myChart");
        let myChart = this.$ECharts.init(dom);
        let app = {};
        let option = null;
        app.config = {
          rotate: 90,
          align: 'left',
          verticalAlign: 'middle',
          position: 'insideBottom',
          distance: 15,
        };
        let labelOption = {
          show: true,
          position: app.config.position,
          distance: app.config.distance,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          rotate: app.config.rotate,
          formatter: '{c}  {name|{a}}',
          fontSize: 12,
          rich: {
            name: {
              textBorderColor: '#fff'
            }
          }
        };
        option = {
          title: {
            text: '岱山县疫情图',
            textStyle:{
              //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
              fontWeight:'bold',
              //字体大小
              fontSize:40
            },
            subtext: '纯属虚构',
          },
          color: ['#003366', '#006699', '#4cabce', '#e5323e'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['流入人口', '流出人口','居家隔离人数', '体温异常人数', '感染人数']
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: ['2.29', '3.1', '3.2', '3.3', '3.4']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '流入人口',
              type: 'bar',
              barGap: 0,
              label: labelOption,
              data: [3220, 3322, 3012, 3342, 3290]
            },
            {
              name: '流出人口',
              type: 'bar',
              label: labelOption,
              data: [2206, 1824, 1919, 2348, 2907]
            },
            {
              name: '居家隔离人数',
              type: 'bar',
              label: labelOption,
              data: [1298, 1477, 1611, 2099, 2440]
            },
            {
              name: '体温异常人数',
              type: 'bar',
              label: labelOption,
              data: [98, 77, 101, 99, 40]
            },
            {
              name: '感染人数',
              type: 'bar',
              label: labelOption,
              data: [4, 8, 10, 10, 11]
            },
          ]
        };
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    }
  }
</script>

<style scoped>

</style>
