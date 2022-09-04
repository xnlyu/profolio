<template>
  <div id="api">
    <swiper>
      <swiper-slide v-for="movie in list" :key="movie.id" class="swiper">
        <div class="movie">
          <div class="movie-content">
            <div class="movie-title">
              {{ movie.title || movie.name }}
            </div>
            <div class="movie-desc">{{ movie.overview }}</div>
          </div>
          <figure
            class="movie-image"
            :style="{
              'background-image': `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            }"
          ></figure>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {},
  created() {
    const url =
      "https://api.themoviedb.org/3/trending/all/day?api_key=3dc987f6f48d0f0c4734db27a618b24b&language=zh-tw";
    axios(url).then((response) => {
      this.list = response.data.results;
    });
  },
};
</script>

<style lang="scss" scoped>
#api {
  display: flex;
  height: 100%;
  align-items: center;
}
.swiper {
  width: 100%;
}
.movie {
  background: #fff;
  position: relative;

  &-image {
    display: block;
    width: 100%;
    padding-top: 56.25%;
    margin: 0;
    background-size: cover;
    background-position: center;
  }
  &-content {
    width: 100%;
    color: #fff;
    position: absolute;
    padding: 200px 10px 30px 10px;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &-title {
    font-size: 20px;
    margin-bottom: 5px;
  }
  &-desc {
    color: #ccc;
    font-size: 12px;
  }
}
</style>