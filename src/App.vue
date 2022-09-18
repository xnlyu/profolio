<template>
  <main class="main">
    <HeaderBar />
    <div v-scroll-spy="{ offset: 50 }">
      <Intro />
      <Showcase />
      <Design />
    </div>
    <footer class="footer">
      <div class="wrap">
        <ul class="contact">
          <li class="contact-word">
            PHONE:0925397695</li>
          <li class="contact-word">
            EMAIL:lyutissues@gmail.com
          </li>
        </ul>
      </div>
    </footer>
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

<style lang="scss" scoped>
.footer {
  background: #5a88c3;
  padding: 10px 0;
}
.contact {
  display: flex;
  padding: 5px 0;
  margin: 0;
  list-style: none;
  justify-content: space-evenly;
  font-weight: bold;
  color:#FFF;
  list-style: circle;
}



@media screen and (max-width: 420px) {

.contact {
  display: flex;
  padding: 5px 0;
  margin: 0;
  list-style: none;
  justify-content: space-evenly;
  color:#FFF;
  list-style: circle;
  font-size: 10px;
}

}
</style>