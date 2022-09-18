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
                  <img src="../assets/phone.png" class="basicInfo-icon" /><a
                    class="icon-word"
                    >0925397695</a
                  >
                </li>
                <li>
                  <img src="../assets/email.png" class="basicInfo-icon" /><a
                    class="icon-word"
                    >lyutissues@gmail.com</a
                  >
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
                <img src="../assets/ai.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/photo.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/indd.png" alt="" />
              </li>
            </ul>
          </div>
          <div class="skill">
            <div class="skill-title"><b>D</b>esign</div>
            <ul class="skill-list">
              <li class="skill-item">
                <img src="../assets/html.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/css.png" alt="" />
              </li>
              <li class="skill-item">
                <img src="../assets/js.png" alt="" />
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
  height: 60vh;
  padding-top: 120px;
  background: white;
  &-content {
    position: relative;
  }
}

.icon {
  &-word {
    font-size: 12px;
    font-weight: bold;
  }
}

.basicInfo {
  width: 50%;

  display: flex;
  &-image {
    flex-shrink: 0;
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  &-content {
    padding-left: 25px;
  }
  &-name {
    padding-top: 18px;
    font-size: 40px;
    font-weight: bold;
    line-height: 35px;
    color: #5a88c3;
  }

  &-icon {
    width: 18px;
    margin-right: 5px;
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
    padding-top: 30px;
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
    font-size: 16px;
    margin-right: 10px;
  }
  &-sub {
    color: white;
    font-size: 10px;
    background: #c38b5a;
    height: 19px;
    line-height: 19px;
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
  margin-top: 30px;
}
.skill {
  background: #e9f1fc;
  padding: 30px 50px 30px 100px;
  border-radius: 20px;
  box-shadow: 2px 5px 10px #333;
  & + & {
    margin-top: 40px;
  }
  &-title {
    padding-bottom: 15px;
    font-size: 20px;
    color: #5a88c3;
    b {
      font-size: 35px;
    }
  }
  &-list {
    margin: 0;
    padding: 0px;
    display: flex;
    list-style: none;
  }
  &-item {
    & + & {
      margin-left: 5px;
    }
  }
  img {
    width: 35px;
    padding-right: 15px;
  }
}

@media screen and (max-width: 768px) {
  .intro {
    height: auto;
    padding-top: 130px;
    padding-bottom: 0px;
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
    background: #FFF;
    padding: 20px 0px 20px 50px;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    &-title {
    padding-right: 40px;
    padding-left:0px;
    }

    img {
    width: 40px;
    padding-left: 15px;
    padding-right: 40px; 
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
      font-size: 16px;
      display: inline-block;
    }
    &:last-child li {
      display: block;
    }

    &-green {
      display: inline-block;
    }

  }


  .basicInfo {
  
  &-content {
    padding-left: 40px;
  }
  &-name {
    padding-top: 20px;
    font-size: 50px;
    line-height: 40px;
 padding-bottom: 5px;
  }

  &-icon {
    width: 18px;
    margin-right: 5px;
  }


}

}


@media screen and (max-width: 420px) {

  .basicInfo {
  display: flex;
  &-image {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  &-content {
    padding-left: 15px;
  }
  &-name {
    padding-top: 10px;
    font-size: 30px;
    font-weight: bold;
    line-height: 30px;
    color: #5a88c3;
  }

  &-icon {
    width: 15px;
    margin-right: 5px;
  }

  &-contact {
    padding: 2px 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  }
}


.profile {
  box-sizing: border-box;
  width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 5%;
  box-shadow: 0 5px 10px #333;
  position: relative;
  z-index: 1;
  border: 1px solid white;
}

.intro {
  height: 60vh;
  padding-top: 100px;
  padding-bottom: 30px;
  background: white;
  &-content {
    position: relative;
  }
}


.experience {
  &-title {
    padding-top: 15px;
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
    margin-bottom: 5px;
  }
  &-main {
    color: black;
    font-weight: bold;
    font-size: 10px;
    margin-right: 10px;
  }
  &-sub {
    color: white;
    font-size: 7px;
    background: #c38b5a;
    height: 14px;
    line-height: 14px;
    border-radius: 13px;
    padding: 0 10px;
    font-weight: bold;
  }

  &-green {
    background: #a8c35a;
  }
}

.skill {
  background: #FFF;
  padding: 15px 20px 15px 20px;
  border-radius: 20px;
  box-shadow: 2px 5px 10px #333;
  & + & {
    margin-top: 40px;
  }
  &-title {
    padding-bottom: 15px;
    font-size: 25px;
    color: #5a88c3;
    b {
      font-size: 35px;
    }
  }
  &-list {
    margin: 0;
    padding: 0px;
    display: flex;
    list-style: none;
  }
  &-item {
    & + & {
      margin-left: 0px;
    }
  }
  img {
    width: 35px;
    padding-right: 0px;
  }
}


.skills {
  position: relative;
    width: 90%;
    top: 0;
    left: 0;
    margin: auto;

}


  

}

</style>