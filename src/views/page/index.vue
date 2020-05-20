<template>
  <div class="views_page">
    <ul>
      <li><router-link to='/page/detail/1'>点击1</router-link></li>
      <li><router-link to='/page/detail/2'>点击2</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import './styles.less'

  export default {
    
    created () {
    }
  }
</script>
