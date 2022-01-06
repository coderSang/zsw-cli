<template>
  <div class="show-charts" v-show="$store.getters.isShow">
    <div id="socialChart" style="height: 300px;width: 400px"></div>
  </div>
</template>
<script>
  export default {
    name: "ChartsShow",
    data() {
      return {
        centerDialogVisible:true
      };
    },
    mounted(){
      this.socialDraw();
    },
    methods: {
      btnClick() {
        this.$store.commit('showCharts')
      },
      socialDraw() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$ECharts.init(document.getElementById('socialChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '小区各个状态人数情况'},
          tooltip: {},
          xAxis: {
            data: ["进小区", "出小区", "发热", "隔离", "感染"]
          },
          yAxis: {},
          series: [{
            name: '人数',
            type: 'bar',
            data: [parseInt(Math.random()*400), parseInt(Math.random()*400),
              parseInt(Math.random()*5), parseInt(Math.random()*10),
              parseInt(Math.random()*1.5)]
          }]
        });
      }
    }
  };
</script>

<style scoped>
  .show-charts {
    justify-content: center; /* 子元素水平居中 */
    align-items: center;     /* 子元素垂直居中 */
    display: -webkit-flex;
    margin: auto;
    width: 500px;
    height: 400px;
    background: #ffffff;
    color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: absolute;
    left: 40%;
    top: 20%;

  }
  .btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: auto;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

</style>
