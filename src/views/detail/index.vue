<template>
  <div class="views_detail">
      views_detail--{{id}}
  </div>
</template>

<script>

export default {
  props:['id'],
  created () {
    if(this.$route.path && !this.id ){
      this.$router.push('/page/detail/1')
    }
  }
}
</script>
