<template>
  <main class="main">
    <HeaderBar />
    <div v-scroll-spy="{ offset: 50 }">
      <Intro />
      <Showcase />
      <Design />
    </div>
  </main>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import Intro from "./components/Intro.vue";
import Showcase from "./components/Showcase.vue";
import Design from "./components/Design.vue";

export default {
  components: { HeaderBar, Intro, Showcase, Design },
};
</script>

<style lang="scss" scoped></style>