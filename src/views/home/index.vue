<template>
  <div class="home">
    <!-- 第一种 -->
    <!-- {{name}}   -->
    <!-- 第二种 -->
    <!-- {{name}}--{{aname}} -- {{stateFn}} -->
    <!-- 第三种常用 -->
    {{name}}--{{age}}
    <button @click="editName">修改name值</button>
    <h1>{{count}}</h1>
    <button @click="onAdd">+</button>
    <button @click="onLow">-</button>
    <button @click="onGetData">请求数据</button>
    <p>{{data}}</p>  
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created () {
  },

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
    ...mapState(['name', 'age', 'count', 'data'])
  },

  methods: {
    ...mapActions(['FETCH_GET_DATA']),

    editName () {
      // commit 触发 mutations
      this.$store.commit('EDIT_NAME')
    },

    onAdd () {
      // commit 触发 mutations
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
      this['FETCH_GET_DATA']()                   //第二种写法  上面...mapActions(['FETCH_GET_DATA']) 
    }
  }
}

/**
 * computed 拿state值
*/
</script>

