<template>
  <div class="profile">
    <span class="demonstration">个人信息</span>
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in dataUrl">
          <img :src="item.imgUrl" style="width: 400px;height: 300px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info">
      <el-form :label-position="labelPosition"  label-width="80px" :model="formLabelAlign">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.userName"></el-input>
        </el-form-item>
        <el-form-item label="温度">
          <el-input v-model="formLabelAlign.temperature"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="formLabelAlign.status"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formLabelAlign.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formLabelAlign.sex"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formLabelAlign.address"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data(){
      return{
        dataUrl:[
          {
            imgUrl:require('../../assets/images/profileImages/p1.jpg'),
          },
          {
            imgUrl:require('../../assets/images/profileImages/p2.jpg')
          }
        ],
        labelPosition: 'left',
        formLabelAlign: this.$store.state.userInfo,
        radio: '1'
      }
    }
  }
</script>

<style scoped>
  .info{
    position: absolute;
    left: 600px;
    top: 200px;
  }
  .demonstration{
    font-size: 44px;
  }
  .profile{
    text-align: center;
   padding: 30px;
  }
  .block{
    width: 400px;
    height: 300px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
