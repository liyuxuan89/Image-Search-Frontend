<template>
  <div class="image-section">
    <img :src="info.url" style="max-width: 200px; max-height: 200px"/>
  </div>
</template>

<script>
export default {
  name: "ImageSection",
  props: ["info"]
}
</script>

<style scoped>

.image-section{
  padding: 10px;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
}

</style>
