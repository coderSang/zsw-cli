<template>
  <div class="outer-wrap">
    <div class="uploadForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="小区名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="异常情况" prop="status">
          <el-select v-model="ruleForm.status" placeholder="请输入异常情况">
            <el-option label="无异常"></el-option>
            <el-option label="异常"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="进入人数" prop="inNum">
          <el-input v-model="ruleForm.inNum"></el-input>
        </el-form-item>
        <el-form-item label="出去人数" prop="outNum">
          <el-input v-model="ruleForm.outNum"></el-input>
        </el-form-item>
        <el-form-item label="体温异常人数" prop="abnormalNum">
          <el-input v-model="ruleForm.abnormalNum"></el-input>
        </el-form-item>
        <el-form-item label="隔离人数" prop="quarantineNum">
          <el-input v-model="ruleForm.quarantineNum"></el-input>
        </el-form-item>
        <el-form-item label="感染人数" prop="infectedNum">
          <el-input v-model="ruleForm.infectedNum"></el-input>
        </el-form-item>
        <el-form-item label="上传时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="物资配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="其他" prop="others">
          <el-input type="textarea" v-model="ruleForm.others"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">上传</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Upload",
    data() {
      return {
        ruleForm: {
          name: '',
          status: '',
          date1: '',
          date2: '',
          inNum:'',
          outNum:'',
          abnormalNum:'',
          quarantineNum:'',
          infectedNum:'',
          delivery: false,
          others: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入小区名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '请选择异常情况', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          inNum: [
            { required: true, message: '请输入进入人数', trigger: 'blur' },
          ],
          outNum: [
            { required: true, message: '请输入进入人数', trigger: 'blur' },
          ],
          abnormalNum: [
            { required: true, message: '请输入体温异常人数', trigger: 'blur' },
          ],
          quarantineNum: [
            { required: true, message: '请输入隔离人数', trigger: 'blur' },
          ],
          infectedNum: [
            { required: true, message: '请输入感染人数', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              type: 'info',
              message: `上传成功`
            });
          } else {
            this.$message({
              type: 'info',
              message: `上传失败，请检查输入是否有误`
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
  }
  .uploadForm{
    width: 500px;
    height: 900px;
    position: absolute;
    top: 120px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>
