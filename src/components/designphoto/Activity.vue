<template>
  <div class="activity">
    <div class="wrap">
      <div class="activity-title">Activity</div>
    </div>
    <swiper
      class="activity-list"
      :slidesPerView="'1'"
      :spaceBetween="10"
      :centeredSlides="true"
      :navigation="true"
      :modules="modules"
      :initialSlide="1"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        class="activity-item swiper"
        v-for="(item, key) in items"
        :key="key"
      >
        <div class="activity-image">
          <img :src="item.url" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import activity01 from "@/assets/activity01.jpg";
import activity02 from "@/assets/activity02.jpg";
import activity03 from "@/assets/activity03.jpg";
import activity04 from "@/assets/activity04.jpg";
import activity05 from "@/assets/activity05.jpg";
import activity06 from "@/assets/activity06.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      items: [
        { url: activity01 },
        { url: activity02 },
        { url: activity03 },
        { url: activity04 },
        { url: activity05 },
        { url: activity06 },
      ],
    };
  },
};
</script>
  
  <style lang="scss" scoped>
.activity {
  &-title {
    font-size: 20px;
    margin-top: 30px;
    background-color: #5a88c3;
    color: #fff;
    display: inline-block;
    border: 2px silid #5a88c3;
    border-radius: 10px;
    padding: 5px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  &-item {
    margin-top: 30px;
    padding: 40px;
    box-sizing: border-box;
    img {
      transition: transform ease 0.2s;
      width: 100%;
    }
  }
}
.swiper-slide-active {
  img {
    transform: scale(1.3);
  }
}
@media screen and (max-width: 768px) {
  .activity {
    &-title {
      margin-top:50px;
      margin-bottom:30px;
      margin-left: 50px;
    }


    &-item {
    padding: 40px;
    transform: translate(0%, 0%);
    box-sizing: border-box;
    img {
      transition: transform ease 0.2s;
      width: 100%;
    }
  }
  }
}

@media screen and (max-width: 420px) {
 
  .activity {
    &-title {
      font-size: 15px;
      margin-bottom:10px;
    }
    &-item {
      transform: translate(10%, 0%);
      padding-top: 40px;
      box-sizing: border-box;
      img {
        transition: transform ease 0.2s;
        width: 75%;
      }
    }
  }
}
</style>









  <style>
.swiper-button-next,
.swiper-button-prev {
  color: #222;
  text-shadow: 0 0 3px #fff;
}
</style>
  