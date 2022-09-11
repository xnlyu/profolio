<template>
<div class="intro">
    <div class="wrap">
      <div class="intro-content">
        <div class="profile">
          <div class="basicInfo">
            <div class="basicInfo-image">
              <img src="../assets/profile2.jpg" alt="" />
            </div>
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
        <div class="skills">
          <div class="skill">
            <div class="skill-title"><b>W</b>eb</div>
            <ul class="skill-list">
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
            </ul>
          </div>
          <div class="skill">
            <div class="skill-title"><b>D</b>esign</div>
            <ul class="skill-list">
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/test.png" alt="" />
              </li>
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
.intro {
  height: 80vh;
  padding-top: 150px;
  background: white;
  &-content {
    position: relative;
  }
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
.profile {
  box-sizing: border-box;
  width: 70%;
  background-color: white;
  padding: 50px;
  border-radius: 10%;
  box-shadow: 0 5px 10px #333;
  position: relative;
  z-index: 1;
  border: 1px solid white;
}
.skills {
  box-sizing: border-box;
  position: absolute;
  width: calc(35% + 30px);
  top: 0;
  left: 65%;
  padding-top: 50px;
  margin-left: -30px;
  margin-top:30px;
}
.skill {
  background: #e9f1fc;
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 2px 5px 10px #333;
  & + & {
    margin-top: 40px;
  }
  &-title {
    font-size: 25px;
    font-weight: bold;
    color:#5a88c3;
    transform: translate(25%, 0%);
    b {
      font-size: 50px;
    }
  }
  &-list {
    margin: 0;
    padding: 5px;
    display: flex;
    list-style: none;
    transform: translate(20%, 15%);
  }
  &-item {
    & + & {
      margin-left: 5px;
    }
  }
  img {
    width: 50px;
  }
}

@media screen and (max-width: 768px) {
  .intro {
    height: auto;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .profile {
    width: 80%;
    padding: 50px;
    margin: auto;
  }
  .skills {
    position: relative;
    width: 80%;
    top: 0;
    left: 0;
    margin: auto;

    }
  .skill {
    padding: 20px;
    display: flex;
    justify-content: space-evenly;

&-list{
  align-items: center;
}

  }
  .basicInfo {
    &-name {
      font-size: 50px;
      line-height: 43px;
    }
    &-image {
      width: 200px;
      height: 200px;
    }
    &-icon {
      width: 25px;
    }
  }
  .experience {
    &-main {
      font-size: 18px;
      display:inline-block;
    }
    &:last-child li {
      display: block;
    }

    &-green{
      display:inline-block;
    }
    
    &-title{
      margin-top:30px;
    }

    }
}
</style>