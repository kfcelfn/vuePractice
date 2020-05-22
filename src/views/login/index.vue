<template>
  <div class="views_login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script>
  import { mapActions } from 'vuex'

  import "./styles.less";

  export default {
    data() {
      return {
        ruleForm: {
          pwd: "",
          username: ""
        },
        rules: {
          username: [
            { required: true, message: '请填写账户', trigger: 'change' }
          ],
          pwd: [
            { required: true, message: '请填写密码', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      ...mapActions('login', ['LOGIN_USER']),

      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this['LOGIN_USER'](this.ruleForm)
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
