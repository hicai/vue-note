<template>
  <div class="user">
    <img alt="Vue logo" src="../assets/logo.png">
     <h2>欢迎来到个人中心</h2>
     <p class="name">{{name}}</p>
     <button @click="add">添 加</button>
  </div>

</template>

<script>
import store from '@/store'
export default {
  name:'',
  data(){
   return {
     name:''
   }
  },
  store,
  mounted(){
    this.name = store.state.userName
  },
  methods:{
    add(){
       this.$router.push("/add");
     }
  },
  
}
</script>
<style scoped lang="scss">
 .user{
  text-align: center;
  font-size: 18px;
  margin-top:15%;
button{
  width: 80%;
  margin:0 auto;
  background: #42b983;
  border:none;
  height: 38px;
  line-height: 38px;
  color:#fff;
  outline: none;
  margin-top:30px;
  border-radius: 5px; 
  font-size: 1.6rem; 
}
  .name{
    padding: 10px;
  }
}
</style>
