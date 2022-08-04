<template>
  <div class="intro">
    <div class="wrap">
      <div class="intro-content">
        <div class="intro-text">Hi, I'm XN</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  height: 60vh;
  background-image: url("../src/assets/intro-photo.jpg");
  background-size: cover;
  background-position: right center;

  &-content {
    height: 60vh;
    display: flex;
    align-items: center;
  }

  &-text {
    color: black;
    font-size: 80px;
  }
}

@media screen and (max-width: 768px) {
  .intro {
   &-text {
    font-size: 30px;
   }
  }
}
</style>