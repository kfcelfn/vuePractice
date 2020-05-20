<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h4>{{this.$route.params}}</h4> -->
    <button @click="onClick">跳转</button>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
  props: ['id'],

  created () {
    // console.log(this.$route.params)
    console.log(this.id)
  },

  updated () {
    console.log(this.id)
  },

  methods: {
    onClick () {
      this.$router.push( {name: 'home', params: {cid: this.id}} )
    }
  },

  watch: {
    // $route (next){
    //   console.log(next.params,222)
    // }
  }

}
</script>
