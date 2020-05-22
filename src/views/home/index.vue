<template>
  <div class="views_home">
    <h1>{{username}}</h1>

    <h1><el-button type="primary" @click='addBefore'>添加</el-button></h1>

    <Tabel :data='data' @edit-data='editData' @delete-data='deleteData' />

    <Dialog
      :id="id"
      :ruleForm="ruleForm"
      @on-submit="onSumibt"
      ref="addAndEditDialog"
    />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Tabel from "@/components/Table";
  import Dialog from "@/components/Dialog";

  export default {
    components: { Tabel, Dialog },

    data() {
      return {
        id: '',
        ruleForm: {
          name: "",
          age: ""
        },
      }
    },

    created () {
      this.$store.dispatch('home/HOME_GET_USER')
    }, 

    computed: {
      // 取出login用户名
      ...mapState('login', ['username']),
      // 取出home的数据
      ...mapState('home', ['data']),

    },

    methods: {
      ...mapActions('home', {
        deleteUser: 'HOME_DELETE_USER',
        addUser: 'HOME_ADD_USER',
        editUser: 'HOME_EDIT_USER',
      }),
      // 添加前
      addBefore () {
        this.id = "";
        this.$refs.addAndEditDialog.onDialog();
      },
      // 修改前
      editData (option) {
        this.$refs.addAndEditDialog.onDialog();
        this.id = option.id;
        this.ruleForm.name = option.name;
        this.ruleForm.age = option.age;
      },
      // 删除
      deleteData (id) {
        this.deleteUser({id})
      },
      // 添加和修改
      onSumibt (option) {
        this.$refs.addAndEditDialog.onDialog();

        if (!this.id) {
          this.addUser(option)
        } else {
          option.id = this.id;
          this.editUser(option)
        }
      }
    }
  }
</script>

