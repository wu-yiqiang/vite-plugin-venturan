<template>
  <section class="index">
   vue3模板萨达萨达
   {{ showDate }}
   <!-- <img :src="image1" />
   <img :src="image2" />
   <img :src="image3" /> -->
  </section>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/2.jpeg'
import image3 from '../assets/images/3.jpg'
const showDate = computed(() => {
  const testStrs =  'You have 0 tasks to complete';
  return showNewStrs(testStrs)
})
</script>
<style scoped>
</style>
