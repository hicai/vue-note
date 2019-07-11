<template>
  <div class="loginBox">
    <form class="login" action="" v-if="!isreg">
     <strong>欢迎登陆</strong> 
     <div>
       <span>用户名：</span> 
       <input type="text" v-model="userName"/>
     </div> 
     <div>
       <span>密&nbsp;&nbsp;&nbsp;码：</span>
       <input type="password" v-model="password"/>   
     </div>
     <button class="active" @click.prevent="login">登录</button>
     <button @click.prevent="reg">注册</button>
    </form>

    <!-- 注册 -->
    <form class="login" action="" v-else>
      <strong>注册账号</strong>
     <div>
       <span>用户名：</span> 
       <input type="text" v-model="userName"/>
     </div> 
     <div>
       <span>密&nbsp;&nbsp;&nbsp;码：</span>
       <input type="password" v-model="password" />   
     </div>
     <div>
       <span>再次密码：</span>
       <input type="password" v-model="repeat"/>   
     </div>     
     <button class="active" @click="refer">确定</button>
     <button @click.prevent="cancel">取消</button>
    </form>
  </div> 
</template>

<script>

import { mapMutations } from 'vuex';
export default {
  name:'login',
  data(){
   return {
      isreg: false,
      userName:'',
      password:'',
      repeat:'',
      userToken:'',
      userName:''
   }
  },
// store ,
  methods: {
    //登录
     ...mapMutations(['changeLogin','getName']),
     login() { 
        let _this = this;
        if(this.userName == '' && this.password == ''){
          alert('请登录')
          return
        }
        this.$axios.post('/api/v1/user/login',{
          name:this.userName, password:this.password
        }).then(res => {               
            if(res.data.code == 0){
              console.log(res.data)
               _this.userToken = res.data.data.token;
               _this.userName = res.data.data.name;
               _this.changeLogin({token: this.userToken })
               _this.getName({userName: this.userName })
              this.$router.replace('/home/list')
            }
            else {
               alert('用户名错误')
            }
        })
        .catch(error=>{
            console.log(error)
            alert('用户名或密码错误')
         })
 
      },
    //注册
    reg(){
      this.isreg = true
    },
    refer(){
       if(this.userName == '' && this.password == ''){
          alert('您有未填项，不能注册')
          return
        }
       if(this.password === this.repeat) {
        this.$axios.post("/api/v1/user/regist",{name:this.userName, password:this.password})
        .then(res =>{
          this.userName = '';
          this.password = '';
          this.repeat = '';
          this.isreg = false
        })
       }
       
    },
    cancel(){
      this.isreg = false
    }
  }
}
</script>

<style scoped lang="scss">
   .loginBox{      
     position: fixed;
     width: 100%;
     height: 100%;
     background: linear-gradient(141deg, #53e8a7 0%, #42b983 51%, #43bdaa 75%);
     color:#fff;
     top:0;
     left: 0;
     .login{
      position: relative;
      width:80%;
      margin:0 auto;
       top: 50%;
       transform: translateY(-50%);
       strong{
         
         font-size: 18px;}
       div{ 
         margin:30px 0;
         }
       span{
          color: #fff;
          width: 80px;
          height: 38px;
          line-height: 38px;
          display: block;
         }
       input{
         width:100%;
         border:1px solid #49ccb8;
         height:38px;
         box-shadow: 0 1px 1px #49ccb8;
         display: block;
         }
       button{
         width:41%;
         height: 32px;
         line-height: 32px;
         color: #333;
         background: #fff;
         border: 1px solid transparent;
         border-radius:5px;
         outline:none;
         margin:0 4%;
         &.active {
            background:#ccc;
            
          }
       }
     }
   }
   
</style>
