<template>
    <div class="activity">
      <div class="wrap">
        <div class="activity-title">Activity</div>
      </div>
      <swiper
        class="activity-list"
        :slidesPerView="'1'"
        :spaceBetween="200"
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
    padding-top: 80px;
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
        width: 100%;
      }
    }
  }
  .swiper-slide-active {
    img {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    .activity {
      padding: 40px 20px;
    }





    
  }

  @media screen and (max-width: 400px) {
    .activity {
      padding: 80px 20px;
    }



  .activity {
    &-title {
      font-size: 20px;
      background-color: #5a88c3;
      color:#FFF;
      display: inline-block;
      border: 2px silid #5a88c3;
      border-radius: 10px;
      padding: 5px;
      font-weight: bold;
    }
    &-item {      
      padding-top: 40px;
      box-sizing: border-box;
      img {
        transition: transform ease 0.2s;
        width: 100%;
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
  