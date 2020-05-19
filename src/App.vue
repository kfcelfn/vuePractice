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
    <div>{{reversedMessage}}</div>
    <div>{{fullName}}</div>
    <div><button @click='editName'>点击</button></div>

    <div>
       <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <!-- 组件 -->
    <div>
      <About 
        name='铁柱' 
        :age='age'
        @xxx = 'onValue'
      />
      
      <About>
        <h1>我还是子组件。我要使用插槽</h1>
      </About>
    </div>
  </div>
</template>

<script>
  import About from './views/About' //引入组件
  import './styles.less'

  export default {
    // 注册主键
    components:{
      About
    },
    data () {
      // 必须返回一个对象
      return {
        name: 'tiezhu',
        age: 100,
        isActive: true,
        isGoBack: true,
        eq:'添加',
        message: 'Hello',
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName: 'Foo Bar',
        checkedNames: []
      }
    },
  
    methods: {
      onCLick (option,event) {
        console.log(option, event)
      },

      goBack () {
        console.log(11)
      },

      editName () {
        this.firstName = '铁柱'
      },

      onValue (option) {
        console.log(option) //接收子组件的数据
      }
    },

    computed: {
    // 计算属性的 getter   ********属性名不能和data里的属性名重复,否则报错
      reversedMessage () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
      fullName () {
        return this.firstName + ' ' + this.lastName
      }
    },

    watch: {
      firstName (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  }
</script>
