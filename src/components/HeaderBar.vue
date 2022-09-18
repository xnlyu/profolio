<template>
  <header class="header">
    <div class="wrap">
      <div class="header-content" v-scroll-spy-active v-scroll-spy-link>
        <a class="header-item">About Me</a>
        <a class="header-item">Web</a>
        <a class="header-item">Design</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #5a88c3;
  z-index: 10;

  &-content {
    display: flex;
    justify-content: space-evenly;
  }
  &-item {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    padding: 2px 12px;
    margin: 10px 0;
    height: 25px;
    line-height: 25px;
    display: block;
    border-radius: 25px;
    border: 2px silid white;
    font-weight: bold;
    cursor: grabbing;


    &.active {
      background-color: #fff;
      color: #5a88c3;
    }
  }
}
</style>