<template>
   <div>
       <router-view/>
       <ul class="footer">
         <li class="nav"><router-link to="./List">列表</router-link></li>
         <li class="nav"><router-link to="./User">个人中心</router-link></li>
       </ul>
   </div>
</template>

<script>
export default {
  name:'home',
  
}
</script>
<style scoped lang="scss">
 .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-around;
 }
 .nav{
   font-size: 16px;
   flex: 1;
   text-align: center;
   border-top:1px solid #42b983;
   background: #fff;
   a{
     color:#42b983;
     display: block;
     width: 100%;
     &.active {
      background:#42b983;
      color:#fff;

    }
   } 
 }
</style>
