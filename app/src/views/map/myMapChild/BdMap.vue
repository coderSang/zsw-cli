<template>
  <div id="container">
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler" @click="clickEvent">
      <div v-if="hadLocation">
        <!--热力图-->
        <bml-heatmap :data="data" :max="100" :radius="20"></bml-heatmap>
        <!--添加点-->
        <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          <bm-label content="我的位置" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
        </bm-marker>
        <!--添加圆-->
        <bm-circle :center="center" :radius="100" stroke-color="blue"
                   :stroke-opacity="0" :fillOpacity="0" :stroke-weight="2"></bm-circle>
        <!--缩放组件-->
      </div>
      <div class="leftbar">
        <left-bar @uploadRoad="uploadRoad"></left-bar>
      </div>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
    <charts-show ref="chartShow"></charts-show>
  </div>
</template>

<script>
  import {BmlHeatmap} from 'vue-baidu-map'
  import ChartsShow from "./ChartsShow";
  import LeftBar from "../../../components/content/leftbar/LeftBar";
  export default {
    name: "BdMap",
    components:{
      BmlHeatmap,
      ChartsShow,
      LeftBar
    },
    data() {
      return {
        center: {lng: 120.12, lat: 30.16},
        zoom: 16,
        mapVisible: false,
        hadLocation:false,//判断是不是允许访问当前位置
        data:[],
        chartsShow:false
      }
    },
    methods: {
      handler({BMap, map}) {
        map.enableScrollWheelZoom(true);
        window.map = map;
        window.MyBdMap = BMap
      },
      clickEvent(e){
        // var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
        // walking.search("湖州市第二中学", "湖州师范学院");
        this.chartsShow=true
        this.$store.commit('showCharts')
        this.$refs.chartShow.socialDraw();
      },
      uploadRoad(loc){
        var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
        walking.search(loc.start, loc.end);
      }
    },
    created() {
      this.$bus.$on("location", () => {
        let _this = this;	// 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          _this.center = {lng: r.longitude, lat: r.latitude};		// 设置center属性值
          let num = 0;
          let temp = {lng: 0, lat: 0, count: 0};
          //直接用随机数来模拟感染人数和危险人数，显示在地图上表示危险地区
          for(num=0;num<60;num++){
            temp = {lng: 0, lat: 0, count: 0};
            temp.count = Math.random()*100;
            temp.lng =Math.random() / 25-0.02+r.point.lng;
            temp.lat =Math.random() / 50-0.01+r.point.lat;
            _this.data.push(temp)
          }
          _this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};		// 自定义覆盖物
          _this.initLocation = true;
          _this.hadLocation = true
        }, {enableHighAccuracy: true})
      })
    }
  }
</script>

<style scoped>
  .map, #container {
    width: 100%;
    height: 100%;
  }
  .leftbar{
    position: absolute;
    left: 0;
    top: 61px;
  }
</style>
