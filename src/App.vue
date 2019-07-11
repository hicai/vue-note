<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>
<script>
// export default{
//   name:'App',
//   provide(){
//     return {
//       reload:this.reload
//     }
//   },
//   data(){
//     return {
//       isRouterAlive:true
//     }
//   },

//   methods:{
//     reload (){
//        this.isRouterAlive = false
//        this.$nextTick(function(){
//           this.isRouterAlive = true
//        })
//     }

// }
// }

</script>
<style lang="scss">
*{margin:0;padding:0; box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;}
  html {
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }   
 body {
    font-size: 1.6rem;
    font-family: "Microsoft YaHei", 微软雅黑, STXihei, 华文细黑, STHeiti, serif;

   
  
  }
a{ text-decoration: none;}
li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 
  
}
input{
    -webkit-appearance: none;
    outline: none;
  }
  input[type="submit"] {
    cursor: pointer;
  }
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }


#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
