<template>
  <div class="addList">
		 <p>标题：</p>
		 <input type="text" v-model="title"/>
		 <p>内容：</p>
		 <textarea  v-model="content"></textarea><br/>
		 <input type="button" value="清 空"
         @click="clear"/>	
		 <input type="button" value="提 交" class="active"
         @click="submit"/>
			 
	</div>
</template>

<script>
import store from '@/store'
export default {
	name:'add',
	store,
	data(){
	 return {
		title:'',
		content:''
	 }
	},
	methods: {
		submit(){	
			let str = this.content.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'); //保存换行回车及回车
		  // store.commit('addList', {
			// 	title:this.title,
			// 	content:str
			// })
       this.$axios.post("/api/v1/news/addNews",{
				  title: this.title,
					content:str
			 }).then(res => {
        this.title = '';
		   	this.content = ''
			  this.$router.push('/home/list')
			 })
       .catch(error=>{
            console.log(error)
            alert('提交失败')
         })
		},
		clear(){
			this.title = '';
			this.content = ''
		}
	}
}
</script>

<style scoped lang="scss">
   .addList{
      width: 80%;
			margin:20% auto;
			p{
				font-weight: bold;
				font-size: 1.8rem;
			}
			input,textarea{
				width: 100%;
				margin:15px 0;
			}
			input[type="text"]{
        height: 30px;
				border:1px solid #ccc;
			
			}
			textarea{
				  border:1px solid #ccc;
					height:250px;
			}
			input[type="button"]{
				height: 38px;
				line-height: 38px;
				color:#333;
				border:1px solid #ccc;
				&.active{
					background: #42b983;
					color:#fff;

				}
			}
	 }
</style>
