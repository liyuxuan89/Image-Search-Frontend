<template>
  <div class="header">
    <div class="header-block">
      <img src="../assets/gopher.png" height=60/>
    </div>
    <div class="header-block">
      <button @click="search">Search</button>
      <button>Login</button>
      <input id="image-upload" type="file" accept="image/png, image/jpeg"
             style="display: none" @change="fileChange($event)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    search: function (){
      document.getElementById("image-upload").click()
    },
    fileChange: function (e){
      let file = e.target.files[0]
      let re = new FileReader()
      re.readAsDataURL(file)
      re.onload = event => {
        this.$emit("imageUploaded", event.target.result)
        document.getElementById("image-upload").value = null
      }
    }
  }
}
</script>

<style scoped>

.header {
  background-color: white;
  box-shadow: 5px 5px 5px lightgray;;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-block{
  padding: 10px;
  margin: 0;
}

.header-block>button{
  margin-left: 10px;
  width: 80px;
  height: 40px;
  background-color: lightblue;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 1em;
}

.header-block>button:hover{
  background-color: cornflowerblue;
}

</style>
