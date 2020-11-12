<template>
  <!-- 데이캐쳐 시작-->
  <div class="daycatcher-wrap">
    <div class="image-item">
      <picture class="daycatcherImg">
         <img class="image" src="@/assets/image/daycatcherMains.png" alt="데이캐쳐 메인화면" />
      </picture>
      <div class="link-item">
        <a href="https://github.com/ddonni0426/vue-project" target="_blank">데이캐쳐 소스보러가기</a>
      </div>
    </div>
  </div>

  <!-- 데이캐쳐 끝-->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/function.scss";

.daycatcher-wrap {
  width: 100%;
  max-height: 100%;
  div.image-item {
    width: 100%;
    max-height: 700px;
    overflow: hidden;
    picture.daycatcherImg {
        img.image {
         @extend .carouselImg;
      }
    }
    .link-item {
      @extend .gitLink
    }
  }
}
</style>
