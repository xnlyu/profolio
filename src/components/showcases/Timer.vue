<template>
  <div id="demo">{{ timeText }}</div>
</template>

<script>
export default {
  data() {
    return {
      timeText: this.writeTime(),
      interval: null,
    };
  },
  methods: {
    writeTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const date = now.getDate();
      const day = now.getDay();
      const days = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      const thisDay = days[day];
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      const second = now.getSeconds().toString().padStart(2, "0");
      return `${year}/${
        month + 1
      }/${date} ${thisDay} ${hour}:${minute}:${second}`;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.timeText = this.writeTime();
    }, 1000);
  },
  beforeUnmount() {
    // 如果有用interval / timeout，要在mounted去set 在beforeUnmount去clear
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
#demo {
  font-family: monospace;
  height: 600px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>