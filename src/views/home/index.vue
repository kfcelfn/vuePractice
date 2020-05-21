<template>
  <div class="views_home">
    <h1>{{username}}</h1>
    <div class="search">
      <el-input v-model="searchVal" placeholder="请输入内容"></el-input>
      <el-button type="success">搜索</el-button>
    </div>

    <div class="insert">
      <el-button type="primary" @click="addBefore">添加</el-button>
    </div>

    <Tabel :data="data" @edit-data="editData" @delete-data="deleteData" />

    <Form
      :dialogVisible="dialogVisible"
      :id="id"
      :ruleForm="ruleForm"
      @on-dialogVisible="toggleDialogVisible"
      @on-submit="onSumibt"
    />
  </div>
</template>

<script>
import "./styles.less";
import { mapState, mapActions } from "vuex";
import Tabel from "@/components/Table";
import Form from "@/components/Form";

export default {
  components: { Tabel, Form },
  data() {
    return {
      searchVal: "",
      ruleForm: {
        name: "",
        age: ""
      },
      id: ""
    };
  },
  created() {
    this.$store.dispatch("FETCH_GET_DATA");
  },
  computed: {
    ...mapState(["data", "dialogVisible", "username"])
  },

  methods: {
    ...mapActions({
      delete: 'FETCH_DELETE_DATA',
      editDialogVisible: "FETCH_DIALOGVISIBLE",
      addData: "FETCH_ADD_DATA",
      editDatas: "FETCH_EDIT_DATA"
    }),
    // 添加前
    addBefore() {
      this.toggleDialogVisible(this.dialogVisible);
      this.id = "";
      this.ruleForm.name = "";
      this.ruleForm.age = "";
    },
    // 修改前
    editData(option) {
      this.id = option.id;
      this.toggleDialogVisible(this.dialogVisible);
      this.ruleForm.name = option.name;
      this.ruleForm.age = option.age;
    },
    // 删除
    deleteData(id) {
      this.delete({id})
    },
    // 添加和修改
    onSumibt(option, dialogVisible) {
      this.editDialogVisible(dialogVisible);

      if (!this.id) {
        this.addData(option)

      } else {
        option.id = this.id;

        this.editDatas(option)
      }
    },
    //模态框封装
    toggleDialogVisible(option) {
      this.editDialogVisible(option);
    }
  }
};
</script>

