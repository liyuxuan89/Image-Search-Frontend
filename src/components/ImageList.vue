<template>
  <div class="image-list">
    <image-section v-for="item in imageItems" :key="item.id" :info="item"></image-section>
    <div v-for="(item, index) in imageItems.slice(0, 10)" :key="index+5000" style="width: 220px; height: 1px"></div>
  </div>
</template>

<script>
import ImageSection from "@/components/ImageSection";

export default {
  name: "ImageList",
  data:function (){
    return {
    }
  },
  methods: {
  },
  props: ["imageItems"],
  components: {ImageSection}
}
</script>

<style scoped>

.image-list{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

</style>
