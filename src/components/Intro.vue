<template>
  <div class="intro">
    <div class="wrap">
      <div class="intro-content">
        <div class="profile">
          <div class="basicInfo-image">
            <img src="../assets/profile2.jpg" alt="" />
          </div>
          <div class="Intro-left">
            <div class="basicInfo-content">
              <div class="basicInfo-name">CHENG <br />EN<br />LYU</div>
              <ul class="basicInfo-contact">
                <li>
                  <img
                    src="../assets/phone.png"
                    class="basicInfo-icon"
                  />0925397695
                </li>
                <li>
                  <img
                    src="../assets/email.png"
                    class="basicInfo-icon"
                  />lyutissues@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div class="experience experience--education">
            <div class="experience-title">EDUCATION</div>
            <ul>
              <li>
                <div class="experience-main">能仁家商</div>
                <div class="experience-sub">廣告設計</div>
              </li>
              <li>
                <div class="experience-main">中國科大</div>
                <div class="experience-sub">平面設計</div>
              </li>
              <li>
                <div class="experience-main">龍華科大</div>
                <div class="experience-sub">文化創意與數位多媒體</div>
              </li>
            </ul>
          </div>
          <div class="experience experience--work">
            <div class="experience-title">WOKR EXPERIENCE</div>
            <ul>
              <li>
                <div class="experience-main">2018/08 - 2019/08</div>
                <div class="experience-sub experience-green">
                  Electronic Commerce Designer
                </div>
              </li>
              <li>
                <div class="experience-main">2019/10 - 2022/10</div>
                <div class="experience-sub experience-green">
                  Desktop Publishing
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="web">web skill</div>
        <div class="design">design skill</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile {
  border: 1px solid white;
  border-radius: 10%;
  background-color: white;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.6);
  padding: 100px;
}

.intro {
  height: 80vh;
  padding-top: 150px;
  background: white;

}
.basicInfo {
  width: 50%;
  display: flex;

  &-image {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  &-content {
    padding-left: 20px;
  }
  &-name {
    padding-top: 10px;
    font-size: 50px;
    font-weight: bold;
    line-height: 45px;
    color: #5a88c3;

  }

  &-icon {
    width: 25px;
    margin-right: 5px;
    font-weight: bold;
  }

  &-contact {
    padding: 10px 0;
    margin: 0;
    list-style: none;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  }
}
.experience {
  &-title {
    font-weight: bold;
    color: #5a88c3;
    margin-bottom: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: flex;
    margin-bottom: 10px;
  }
  &-main {
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
  }
  &-sub {
    color: white;
    font-size: 14px;
    background: #c38b5a;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    padding: 0 10px;
    font-weight: bold;
  }

  &-green {
    background: #a8c35a;
  }
}

@media screen and (max-width: 768px) {
  .intro {
  }
}
</style>