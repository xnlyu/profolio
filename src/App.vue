<template>
  <main class="main">
   <HeaderBar />
   <Intro />
   <About />
   <Showcase />
   <Contact />
  </main>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import Intro from "./components/Intro.vue";
import About from "./components/About.vue";
import Showcase from "./components/Showcase.vue";
import Contact from "./components/Contact.vue";

export default {
    components: { HeaderBar, Intro, About, Showcase, Contact }
  }
</script>

<style lang="scss" scoped>

</style>