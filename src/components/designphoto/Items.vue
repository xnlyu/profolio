<template>
    <div class="commodity">
      <div class="wrap">
        <div class="commodity-title">Commodity</div>
      </div>
      <swiper
        class="commodity-list"
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
          class="commodity-item swiper"
          v-for="(item, key) in items"
          :key="key"
        >
          <div class="commodity-image">
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
  import commodity01 from "@/assets/commodity01.jpg";
  import commodity02 from "@/assets/commodity02.jpg";
  import commodity03 from "@/assets/commodity03.jpg";
  import commodity04 from "@/assets/commodity04.jpg";
  import commodity05 from "@/assets/commodity05.jpg";
  import commodity06 from "@/assets/commodity06.jpg";
  import commodity07 from "@/assets/commodity07.jpg";
  import commodity08 from "@/assets/commodity08.jpg";
  import commodity09 from "@/assets/commodity09.jpg";
  import commodity10 from "@/assets/commodity10.jpg";
  import commodity11 from "@/assets/commodity11.jpg";
  import commodity12 from "@/assets/commodity12.jpg";
  import commodity13 from "@/assets/commodity13.jpg";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Navigation],
        items: [
          { url: commodity01 },
          { url: commodity02 },
          { url: commodity03 },
          { url: commodity04 },
          { url: commodity05 },
          { url: commodity06 },
          { url: commodity07 },
          { url: commodity08 },
          { url: commodity09 },
          { url: commodity10 },
          { url: commodity11 },
          { url: commodity12 },
          { url: commodity13 },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .commodity {
    padding-top: 20px;
    &-title {
      font-size: 30px;
      background-color: #5a88c3;
      color:#FFF;
      display: inline-block;
      border: 2px silid #5a88c3;
      border-radius: 15px;
      padding: 5px;
      font-weight: bold;
    }
    &-item {      
      padding-top: 40px;
      box-sizing: border-box;
      img {
        transition: transform ease 0.2s;
        width: 45%;
      }
    }
  }
  .swiper-slide-active {
    img {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    .commodity {
      padding: 40px 20px;
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
  