<template>
  <div class="leftBar">
    <!-- Form -->
    <el-button @click="dialogFormVisible = true">路径规划</el-button>
    <el-dialog title="导航地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="起点" :label-width="formLabelWidth">
          <el-input v-model="form.start" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="终点" :label-width="formLabelWidth">
          <el-input v-model="form.end" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadRoad">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: "LeftBar",
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          start:'',
          end:'',
        },
        formLabelWidth: '120px'
      };
    },
    methods:{
      uploadRoad(){
        this.dialogFormVisible = false
        this.$emit('uploadRoad',this.form);
      }
    }
  }
</script>

<style scoped>
</style>
