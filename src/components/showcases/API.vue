<template>
  <div id="api">
    <swiper :navigation="true" :modules="modules">
      <swiper-slide v-for="movie in list" :key="movie.id" class="swiper">
        <div class="movie">
          <div class="movie-content">
            <div class="movie-title">
              {{ movie.title || movie.name }}
            </div>
            <div class="movie-desc">{{ movie.overview }}</div>
          </div>
          <picture class="movie-image">
            <source
              :srcset="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              media="(max-width: 768px)"
            />
            <source
              :srcset="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
            />
            <img
              :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
            />
          </picture>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      list: [],
      modules: [Navigation],
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
    margin: 0;
    img {
      width: 100%;
    }
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
    box-sizing: border-box;
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
<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>