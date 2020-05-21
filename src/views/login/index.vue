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
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        ruleForm: {
          pwd: "",
          username: ""
        },
        rules: {
          pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          username: [{ required: true, message: '请输入账户', trigger: 'blur' }],
        }
      };
    },
    methods: {
      ...mapActions({
        loginUser: 'FETCH_LOGIN',
      }),
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loginUser(this.ruleForm)
              .then(res => {
                if(res.data.status == 200){
                  this.$message.success('登录成功')
                  this.$router.push({name: 'home'})
                }
              })
          } else {
            console.log("error submit!!");
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
