<template>
 <div>
     <div v-for="(item, index) in pageLists"
     :key="index"
      v-show="index == current"
      class="info"
     >
        <h2>{{item.title }}</h2>
        
            <p v-html="item.content"></p>
    
        <button @click="back">返 回</button>
     </div>
     
  </div>
</template>

<script>
import store from '@/store'
export default {
  name:'info',
  store,
  computed:{
    pageLists(){
      return store.state.lists
    },
    current(){
      return store.state.number
    }
  },
  methods:{
    back(){
       this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped lang="scss">
  .info{
    width:90%;
    margin:10px auto;
    padding:10px;
   h2{
    text-align: center;
    margin-bottom:10px;
   }
   p{
     line-height: 28px;
   }
   button{
     position: fixed;
     bottom: 120px;
    width: 80%;
    margin: 0 auto;
    background: #42b983;
    border: none;
    height: 38px;
    line-height: 38px;
    color: #fff;
    outline: none;
    margin-top: 30px;
    border-radius: 5px;
    font-size: 1.6rem;
   }
  
  }

</style>
