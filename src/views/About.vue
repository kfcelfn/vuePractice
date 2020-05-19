<template>
  <div class="about">
    我是子组件
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <h1><button @click="onClick">子传父</button></h1>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: [ 'name', 'age'],

  methods: {
    onClick () {
      this.$emit( 'xxx', {a: 1, b: 2})
    }
  },
  
  created () {
    
  }

}
</script>
