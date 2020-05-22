<template>
  <div class="home">
    <!-- 第一种 -->
    <!-- {{name}}   -->
    <!-- 第二种 -->
    <!-- {{name}}--{{aname}} -- {{stateFn}} -->
    <!-- 第三种常用 -->
    {{name}}--{{age}} -- {{loginName}}
    <button @click="editName">修改name值</button>
    <h1>{{count}}</h1>
    <button @click="onAdd">+</button>
    <button @click="onLow">-</button>
    <button @click="onGetData">请求数据</button>
    <p>{{loginData}}</p>  
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  //第一种拿值方法
  // computed: {
  //   name () {
  //     return this.$store.state.name
  //   }
  // }

  // 第二种写法 使用 mapState 对象方法
  // computed: mapState({
  //   // 对象方式， 有三种拿值方法
  // name: state => state.name,

  // aname: 'name',  //一般取别名的时候用

  // stateFn (state) { return state.name + state.age } //这里尽量不要用箭头函数， 使用普通函数，有this
  // })

  //第三种拿值方法  mapState 数组方法   ***常用
  computed: {
    // 全局取state值,假如全局state里有个name, moudules局部也有，我们都需要拿到，那么全局取值或者局部取值，就要以对象形式取别名方式去拿name值
    ...mapState(['name', 'age', 'count', 'data']),
    // 通过命名空间，取单个文件的state值
    // ...mapState('login', ['name']), //第一种数组方式
    ...mapState('login', {          //第二种对象起别名方式
      loginName: 'name',
      loginData: 'data'
    }),
  },

  methods: {
    //全局
    ...mapActions(['FETCH_GET_DATA']),
    //局部
    ...mapActions('login', {
      loginGetData: 'FETCH_GET_DATA'
    }),

    //全局mutations  commit 触发 mutations
    ...mapMutations(['EDIT_NAME']),

    //局部mutations  //局部使用对象起别名方式， 全局正常引入。 
    ...mapMutations('login', {  
      loginEditName: 'EDIT_NAME'
    }),

    editName () {
      //全局mutations方法
      this['EDIT_NAME']()
      //局部mutations方法
      this.loginEditName() 
    },

    onAdd () {
      this.$store.commit('FETCH_COUNT', true)
    },

    onLow () {
      //这里让他减到1就停止，这个停止逻辑一定要再这里写，不能再mutations写 
      if( this.count === 1 )  return
      // commit 触发 mutations
      this.$store.commit('FETCH_COUNT', false)
    },

    onGetData () {
      // this.$store.dispatch('FETCH_GET_DATA')  //第一种写法
      
      this['FETCH_GET_DATA']({username: 123, pwd: 123})                   //第二种写法  上面...mapActions(['FETCH_GET_DATA'])  
      // this.loginGetData()
    }
  }
}

/**
 * computed 拿state值
*/
</script>

