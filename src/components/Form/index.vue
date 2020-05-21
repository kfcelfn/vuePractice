<template>
  <div class="components_form">
    <el-dialog 
      width="50%" 
      :title="id=='' ? '添加' : '修改'" 
      :visible.sync="dialogVisible" 
      :before-close='closeDialogVisible'
    >
      <el-form :model="ruleForm" label-width="100px" >
        <el-form-item label="姓名" prop="name">
          <el-input  v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input  v-model="ruleForm.age" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="cancelDialog">取消</el-button>
          <el-button @click="onSubmit('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogVisible", 'ruleForm', 'id'],

  methods: {
    closeDialogVisible () {
      this.$emit("on-dialogVisible", this.dialogVisible)
    },

    cancelDialog () {
      this.$emit("on-dialogVisible", this.dialogVisible)
    },

    onSubmit () {
      this.$emit("on-submit", this.ruleForm, this.dialogVisible)
    }
  }
};
</script>

