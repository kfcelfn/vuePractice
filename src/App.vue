<template>
  <div id="app">
    {{name}} -- {{age}}
    <!-- 多个参数 又想拿到event 必须是$event -->
    <div :name='name' @click="onCLick('铁柱',$event)">点击</div> 
    <a 
      href='http://www.baidu.com'
      target='_blank'
      @click.prevent.stop='goBack'
      :class="{active: isActive, 'app_goBack': isGoBack}"
    >跳转
    </a>
    <!-- 多个class 加条件语句可以这样写， 如果加_ - 就要加引号 -->
    <div v-if="eq =='添加'">{{name}}</div>
    <div v-else>{{name}}</div>
  </div>
</template>

<script>
  import './styles.css'

  export default {
    data () {
      // 必须返回一个对象
      return {
        name: 'tiezhu',
        age: 100,
        isActive: true,
        isGoBack: true,
        eq:'添加'
      }
    },
  
    methods: {
      onCLick (option,event) {
        console.log(option, event)
      },

      goBack () {
        console.log(11)
      }
    }
  }
</script>
