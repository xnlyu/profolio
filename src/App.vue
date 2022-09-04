<template>
  <main class="main">
    <HeaderBar />
    <Intro />
    <div v-scroll-spy="{ offset: 50 }">
      <About />
      <Showcase />
      <Contact />
    </div>
  </main>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import Intro from "./components/Intro.vue";
import Showcase from "./components/Showcase.vue";
import Contact from "./components/Contact.vue";

export default {
  components: { HeaderBar, Intro, Showcase, Contact },
};
</script>

<style lang="scss" scoped></style>