<template>
  <div class="about">
    <div class="wrap">
      <div class="about-content">
        <div class="about-item">
          <div class="skill">
            <div class="skill-title">Web development</div>
            <ul>
              <li>HTML</li>
            </ul>
          </div>
        </div>
        <div class="about-item">
          <div class="skill">
            <div class="skill-title">Design</div>
            <ul>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background: black;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  &-content {
    display: flex;
  }

  &-item {
    width: 50%;
  }
}
</style>