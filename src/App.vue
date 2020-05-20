<template>
  <div id="app">
    <div class="nav">
       <router-link to='/page'>page</router-link>
       <router-link to='/about' exact>home</router-link>
    </div> 
    <!-- <router-link to='/about/2'>about</router-link><span>---</span>
    <router-link to='/about/3'>about</router-link><span>---</span>
    <router-link to='/?name=100&age=200' exact>home</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import './styles.less'

  export default {}
</script>
