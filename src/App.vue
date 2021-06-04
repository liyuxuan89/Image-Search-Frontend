<template>
  <div id="app">
    <Header @imageUploaded="imageUploaded"></Header>
    <div style="height: 320px; display: flex; align-items: center; justify-content: center">
      <img :src="searchImage" style="max-width: 300px; max-height: 300px"/>
    </div>
    <image-list :image-items="imageItems"></image-list>
  </div>
</template>

<script>
import Header from './components/Header'
import ImageList from "@/components/ImageList"
import axios from "axios"

export default {
  name: 'App',
  data: function (){
    return {
      imageItems: [
        {id: 0, url: require("./assets/placeholder.png")},
        {id: 1, url: require("./assets/placeholder.png")},
        {id: 2, url: require("./assets/placeholder.png")},
        {id: 3, url: require("./assets/placeholder.png")},
        {id: 4, url: require("./assets/placeholder.png")},
        {id: 5, url: require("./assets/placeholder.png")},
        {id: 6, url: require("./assets/placeholder.png")},
        {id: 7, url: require("./assets/placeholder.png")},
      ],
      searchImage: require("./assets/placeholder.png")
    }
  },
  methods:{
    imageUploaded: function (url) {
      this.searchImage = url
      axios.post('/api/search',{dataUrl: url, offset: 0, limit: 20})
          .then( res => {
            //获取数据
            let data = res.data
            this.imageItems.splice(0)
            for(let i=0; i < data.imageUrls.length; i++){
              this.imageItems.push({id: i, url: data.imageUrls[i]})
            }
            console.info(data)
          }).catch( e => {
        if(e.response){
          //请求已发出，服务器返回状态码不是2xx。
          console.info(e.response.data)
          console.info(e.response.status)
          console.info(e.response.headers)
        }else if(e.request){
          // 请求已发出，但没有收到响应
          // e.request 在浏览器里是一个XMLHttpRequest实例，
          // 在node中是一个http.ClientRequest实例
          console.info(e.request)
        }else{
          //发送请求时异常，捕捉到错误
          console.info('error',e.message)
        }
        console.info(e.config)
      })
    }
  },
  components: {
    Header,
    ImageList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
</style>
