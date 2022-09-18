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
    transform: translate(15%, 0%);
    box-sizing: border-box;
    img {
      transition: transform ease 0.2s;
      width: 70%;
    }
  }
}
.swiper-slide-active {
  img {
    transform: scale(1.2);
  }
}
@media screen and (max-width: 768px) {
  .commodity {
    &-title {
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
  .commodity {
    &-title {
      font-size: 15px;
      margin-bottom:10px;
    }
    &-item {
      transform: translate(13.5%, 0%);
      padding-top: 40px;
      box-sizing: border-box;
      img {
        transition: transform ease 0.2s;
        width: 70%;
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
  