<template>
  <div id="main-content">
    <div class="main" v-if="$store.getters.hadLogin">
      <top-bar></top-bar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="login" v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
  import BdMap from './views/map/myMapChild/BdMap'
  import Login from "./views/login/Login";
  import TopBar from "./components/content/topbar/TopBar";
  import LeftBar from "./components/content/leftbar/LeftBar";
  export default {
    name: "App",
    components: {
      Login,
      LeftBar,
      BdMap,
      TopBar,
    },
    methods:{
      bclick(){
        this.$store.commit('login')
      }
    }
  };
</script>

<style>
  @import "assets/css/base.css";
  .main,.login{
    height: 100%;
  }
</style>
