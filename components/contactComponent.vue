<template>
  <section class="sub-scene scene4">
    <div class="scene-title d">
      <h2>#Contact.</h2>
    </div>
    <ul class="accordion">
      <li class="contactInfo katalkId">
        <div class="front turnElem">KakaoTalk</div>        
        <a href="#contact" class="back turnElem" @click="copyInfo">ddonni93</a>
      </li>
      <li class="contactInfo eMail">
        <div class="front turnElem">E-mail</div>        
        <a href="#contact" class="back turnElem" @click="copyInfo">kdoeun8264@gmail.com</a></li>
      <li class="contactInfo phone">
        <div class="front turnElem">Phone Number</div>
        <a href="#contact" class="back turnElem"  @click="copyInfo">01044538932</a></li>
      <li class="contactInfo github">
        <div class="front turnElem">Github</div>
        <a href="https://github.com/ddonni0426" class="back turnElem" target="_blank">github 방문하기</a></li>
      <div class="popup hidden">
        <span>연락처 복사 완료!</span>
      </div>
    </ul>
 
  </section>
</template>

<script>
export default {
  methods:{
    copyInfo(e){
      const popup = document.querySelector('.popup');
      this.openPopup(popup);
      const targetText = e.target.innerText;
      const tempElem = document.createElement('textarea');
      tempElem.value = targetText;  
      document.body.appendChild(tempElem);
      tempElem.select();
      document.execCommand("copy");
      document.body.removeChild(tempElem);
      this.closePopup(popup);
    },
    openPopup(obj){
      obj.classList.remove('hidden');
    },
    closePopup(obj){
      setTimeout(()=>{
          obj.classList.add('hidden');
      },1000);
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../assets/scss/function";
section.scene4 {
  .scene-title{
    padding-bottom: 6.5rem;
  }
  ul.accordion{
    position: relative;
    @include setFlex(flex, space-evenly, center);
    flex-wrap: nowrap;
    width: 100%;
    height: 250px;
    li{
      &.katalkId > div{
       background: #e8ac34;
      }
      &.github > div {
        background: #afc4c8;
      }
      &.eMail > div{
       background: #bb3c3d;
      }
      &.phone > div{
        background: #E8E6D9;
        a{
          color: #343434;
        }
      }
      &.contactInfo{ 
          position: relative;
          @include setFlex(flex, center, center);
          width: 250PX;
          height: 250PX;
          perspective:1000px;
          font-size: larger;
       & > a{
          @include setFlex(flex, center, center);
          width: 100%;
          height: 100%;
          color: cornsilk;;
        }
      .front{
        @include setFlex(flex, center, center);
        width: 100%;
        height: 100%;
      }
      .back{
        transform:rotateY(180deg);
        backface-visibility:hidden;
        background: #EFEEEA;
        color: #000;
      }
      &:hover{
          .front{transform:rotateY(180deg);}
          .back{transform:rotateY(360deg);}
      }
      .turnElem{
          position:absolute;
          transition:0.5s;
        }
      } 
    }
  }
  div.popup{
    @include setPosition(absolute, 10px, null, null, null, null);
    @include setFlex(flex, center, center);
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: rgba($color: #222, $alpha: 0.9);  
    opacity: 1;
    transition: 0.3s;
    color: #fff;
    &.hidden{
      opacity: 0;
    }
  }
}
</style>
