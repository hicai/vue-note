<template>
  <div>
      <ul>
       <li v-for="(item, index) in pageLists"
       :key = "index"
        :class="['item', {'active':index == current}]"
       @click="more(index)"
      
       >
      <mt-cell-swipe
            :right="[
                {
                    content: '删除',
                    style: { background: '#ff7900', color: '#fff','min-height': '80px'},
                    handler: () => deleteSection(item.id)
                }
            ]">
        <div class="title">{{ item.title }}</div>
        <div class="content" v-html="item.content"></div> 
        <router-link to="/info" class="detail">查看详情</router-link>
      </mt-cell-swipe>
       
       </li>  
     </ul>    
      <div v-show="pageLists.length == 0" class="tip">
         <p>空空如也~</p>
     </div>  
  </div>
</template>

<script>
import store from '@/store'
export default {
  name:'list',
  data(){
    return{
      current:'',
      pageLists:''
    }
  },
  store,
  mounted() {
    this.$axios.post('/api/v1/news/getNewsList',{
      headers: {"Content-Type": "application/json",}//设置header信息
    }).then(res=>{
       console.log(res.data)
       this.pageLists = res.data.data
    })
    .catch(error => {
        console.log(error)   
    })
  },
  methods: {
    more(index){
      this.current = index;
      store.commit('detail', index)
    },
    deleteSection(index){
      this.$axios.post("/api/v1/news/deleteNews",{
        id:index
      })
   }
  },
  // computed: {
  //   pageLists(){ 
  //     return store.state.lists  
  //   }
  // },

}
</script>

<style scoped lang="scss">
  .item{
     width: 90%;
     margin:10px auto;
     //padding:10px;
    border:1px solid #ccc;
     border-radius:5px;
     position: relative;
      &.active{
      border: 1px solid #42b983;
      color: #42b983;
     }
    .title{
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
         border-bottom: 1px solid #dcdcdc;
        font-weight: bold;
        position: absolute;
        top:10px;
        left: 10px;
        width: 94%;
      }
      .content{
        font-size: 16px;
        line-height: 22px;
        padding: 10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height:30px;
        overflow: hidden;
        position: absolute;
        top:48px;
        left: 10px;
      }
      .detail{
        position: absolute;
        right: 30px;
        bottom: 15px;
        font-size: 14px;
        color:#ccc;
      }
   }
  .tip{margin:30px auto; text-align: center;}
</style>
