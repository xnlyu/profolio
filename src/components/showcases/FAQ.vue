<template>
  <ul class="faq">
    <li
      class="faq-item"
      v-for="(item, index) in list"
      :key="index"
      @click="select(index)"
    >
      <div
        :class="{
          'faq-title': true,
          active: index === activeIndex,
        }"
      >
        {{ item.question }}
      </div>
      <div class="faq-content" v-if="index === activeIndex">
        {{ item.answer }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1,
      list: [
        {
          question: "如果星期一？",
          answer: "猴子穿新衣",
        },
        {
          question: "如果星期二？",
          answer: "猴子肚子餓",
        },
        {
          question: "如果星期三？",
          answer: "猴子去爬山",
        },
        {
          question: "如果星期四？",
          answer: "猴子去考試",
        },
        {
          question: "如果星期五？",
          answer: "猴子去跳舞",
        },
        {
          question: "如果星期六？",
          answer: "猴子去斗六",
        },
        {
          question: "如果星期天？",
          answer: "猴子去聊天",
        },
      ],
    };
  },
  methods: {
    select(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.faq {
  padding: 0;
  margin: 0;
  list-style: none;
}
.faq-item {
  padding: 20px;
}
.faq-title {
  border-bottom: 1px solid black;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
}
.faq-title:before {
  content: "+";
  display: block;
  border-radius: 50%;
  color: black;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  /*   垂直置中 */
  /*   line-height:18px;
  text-align:center; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.faq-title.active {
  color: rgb(215, 232, 34);
  border-bottom: 1px solid rgb(215, 232, 34);
}
.faq-title.active:before {
  content: "-";
  color: rgb(215, 232, 34);
  border: 1px solid rgb(215, 232, 34);
}
.faq-content {
  padding: 30px 0;
}
</style>