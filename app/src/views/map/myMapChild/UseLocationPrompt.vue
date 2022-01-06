<template>
  <div>
    <el-dialog class="prompt"
      title="提示"
      :visible.sync="centerDialogVisible"
               heigth="60%"
      width="30%"
      center>
      <p>goodGISERS请求使用您当前位置</p>
      <p>否则部分功能将无法使用</p>
      <span slot="footer" class="dialog-footer">
    <el-button>取 消</el-button>
    <el-button @click="location" type="primary">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "UseLocationPrompt",
    data() {
      return {
        centerDialogVisible: true
      };
    },
    methods:{
      location(){
        //提示框隐藏
        this.centerDialogVisible=false;
        //定位
        this.$bus.$emit("location");

      }
    }
  }
</script>

<style scoped>
</style>
