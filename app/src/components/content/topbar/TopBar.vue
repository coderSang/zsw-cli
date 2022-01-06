<template>
  <div class="top-bar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="jumpToPage('/map')">地图展示</el-menu-item>
      <el-menu-item index="2" @click="jumpToPage('/report')">统计信息</el-menu-item>
      <el-menu-item index="3" @click="jumpToPage('/upload')">上报</el-menu-item>
      <el-menu-item index="4" @click="jumpToPage('/profile')">我的</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      jumpToPage(pageName){
        this.$router.replace(pageName)
      }
    }

  }
</script>

<style scoped>

</style>
