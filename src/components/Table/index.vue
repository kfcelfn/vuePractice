<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="id" label="编号" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <div slot-scope="scope">
        <el-button @click="editData(scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="deleteData(scope.row.id)" type="text" size="small">删除</el-button>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: ['data'],

    methods: {
      editData (option) {
        this.$emit("edit-data", option)
      },

      deleteData (id) {
        this.$emit("delete-data", id)
      },
    }
  };
</script>