<template>
  <div class="outer-wrap">
    <div class="loginForm">
      <el-form ref="form">
        <el-form-item>
          <el-input
            placeholder="请输入内容"
            v-model="username"
            autocomplete="off"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="cancel">清空</el-button>
          <el-button type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods:{
      login(){
        //写死不用Promise，如果是网络请求需要用Promuse
        if(this.username == this.$store.state.userInfo.userName
        &&this.password == this.$store.state.userInfo.passWord){
          this.$message({
            type: 'success',
            message: '登录成功!'
          });
          setTimeout(()=>{
            this.$store.commit('login')
          },1000)
        }
        else{
          this.$message({
            type: 'info',
            message: '账号密码错误'
          });
        }
      },
      cancel(){
        this.$message({
          type: 'info',
          message: '您取消了登录'
        });
        this.username = ''
        this.password = ''
      }
    }
  }
</script>

<style scoped>
  .outer-wrap{
    /*只有同时为html和body设置height: 100%时，这里才生效，
    并且随浏览器窗口变化始终保持和浏览器视窗等高*/
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
  .loginForm{
    width: 400px;
    height: 400px;
    border: black 1px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>
