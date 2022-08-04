<template>
  <header class="header">
    <div class="wrap">
      <div class="header-content">
        <a href="#" class="header-item">About</a>
        <a href="#" class="header-item">Showcase</a>
        <a href="#" class="header-item">Contact</a>
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
  background: black;

  &-content {
    display: flex;
  }

  &-item {
    padding: 0 10px;
    font-size: 15px;
    text-decoration: none;
    color: #fff;
  }
}
</style>