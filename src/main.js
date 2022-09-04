import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/main.css";
import { registerScrollSpy, Easing } from "vue3-scroll-spy";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";

const app = createApp(App);

registerScrollSpy(app, {
  easing: Easing.Cubic.In,
});

app.mount("#app");