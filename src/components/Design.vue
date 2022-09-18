<template>
  <main class="design">
      <items />
      <activity />
      <banner />
  </main>
</template>

<script>
import Items from './designphoto/Items.vue';
import Activity from './designphoto/Activity.vue';
import Banner from './designphoto/Banner.vue';

export default {
  components: { Items, Activity, Banner },
};
</script>

<style lang="scss" scoped>


</style>