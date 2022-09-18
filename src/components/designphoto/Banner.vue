<template>
    <div class="banner">
      <div class="wrap">
        <div class="banner-title">Banner</div>
      </div>
      <swiper
        class="banner-list"
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
          class="banner-item swiper"
          v-for="(item, key) in items"
          :key="key"
        >
          <div class="banner-image">
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
  import banner01 from "@/assets/banner01.jpg";
  import banner02 from "@/assets/banner02.jpg";
  import banner03 from "@/assets/banner03.jpg";
  import banner04 from "@/assets/banner04.jpg";
  import banner05 from "@/assets/banner05.jpg";
  import banner06 from "@/assets/banner06.jpg";
  import banner07 from "@/assets/banner07.jpg";
  import banner08 from "@/assets/banner08.jpg";
  import banner09 from "@/assets/banner09.jpg";
  import banner10 from "@/assets/banner10.jpg";
  import banner11 from "@/assets/banner11.jpg";
  import banner12 from "@/assets/banner12.jpg";
  import banner13 from "@/assets/banner13.jpg";
  import banner14 from "@/assets/banner14.jpg";
  import banner15 from "@/assets/banner15.jpg";
  import banner16 from "@/assets/banner16.jpg";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Navigation],
        items: [
          { url: banner01 },
          { url: banner02 },
          { url: banner03 },
          { url: banner04 },
          { url: banner05 },
          { url: banner06 },
          { url: banner07 },
          { url: banner08 },
          { url: banner09 },
          { url: banner10 },
          { url: banner11 },
          { url: banner12 },
          { url: banner13 },
          { url: banner14 },
          { url: banner15 },
          { url: banner16 },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .banner {
    &-title {
      margin-top: 30px;
    font-size: 20px;
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
    transform:translate(25px, 0%);
    img {
      transition: transform ease 0.2s;
      width: 90%;
    }
  }
  }
  .swiper-slide-active {
    img {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 768px) {
    .banner {
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
 
  .banner {
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
  