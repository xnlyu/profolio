<template>
  <div class="draw">
    <div class="frame">
      <textarea cols="30" rows="10" v-model="value"></textarea>
      <button @click="draw()">抽籤</button>
      <div v-if="winner" class="winner">
        中籤的是 <b>{{ winner }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      winner: "",
    };
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    draw() {
      const value = this.value; // 我要拿<input> <textarea> value
      const array = value.split("\n"); // textarea 斷行的符號
      const lastIndex = array.length - 1; // [1,2,3] -> size = 3 -> getRandom(0,2)
      const index = this.getRandom(0, lastIndex); //array[0], array[1], array[2]
      this.winner = array[index];
    },
  },
};
</script>

<style lang="scss" scoped>
.draw {
  height: 600px;
  position: relative;
}
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  color: #333;
  background: #292727;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.winner {
  font-size: 30px;
  color: #fff;
}
</style>