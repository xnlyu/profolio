<template>
  <div class="showcase">
    <div class="wrap">
      <div class="showcase-select">
        <a
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
          >{{ tab }}</a
        >
      </div>
      <div class="showcase-content">
        <component :is="currentTab" />
      </div>
    </div>
  </div>
</template>

<script>
import CSS from "./showcases/CSS.vue";
import Timer from "./showcases/Timer.vue";
import Burger from "./showcases/Burger.vue";
import Draw from "./showcases/Draw.vue";
import FAQ from "./showcases/FAQ.vue";
import API from "./showcases/API.vue";

// 列表渲染 + 動態組件
export default {
  components: { CSS, Timer, Burger, Draw, FAQ, API },
  data() {
    return {
      tabs: ["API", "CSS", "Timer", "Burger", "Draw", "FAQ"],
      currentTab: "API",
    };
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  background: white;
  padding: 140px 0;
  &-content {
    height: 600px;
    background-color: #e9f1fc;
    margin-top: 20px;
  }
  &-select {
    display: flex;
    justify-content: space-around;
        
    a {
      cursor: pointer;
      display: block;
      border: 1.5px solid #5a88c3;
      border-radius: 30px;
      text-decoration: none;
      color: #5a88c3;
      background-color: #FFF;
   
      padding: 5px 0;
      min-width: 90px;
      font-size: 20px;
      text-align: center;
      transition: background-color 0.3s ease;
    }
    .active {
      background-color: #5a88c3;
      color: #FFF
    }
  }
}

@media screen and (max-width: 768px) {
  .showcase {
    &-select {
      a {
        justify-content: space-between;
        height: 40px;
        width:80px;
        line-height: 40px;
        border-radius: 15px;
        min-width: 50px;
        font-size: 15px;
      }
    }
  }
}


@media screen and (max-width: 400px) {
  .showcase {
    &-select {
      a {
        justify-content: space-between;
        height: 30px;
        width:45px;
        line-height: 30px;
        border-radius: 15px;
        min-width: 45px;
        font-size: 10px;
      }
    }
  }
}

</style>