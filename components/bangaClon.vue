<template>
  <div class="banga-wrap">
    <div class="Image-item">
      <img class="bangaMain" src="@/assets/image/bangaMain.png" alt="방앗간 메인화면" />
      <div class="link-item">
        <a href="https://github.com/ddonni0426/bangagan-clone" target="_blank">방앗간 코스메틱 소스보러가기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/function.scss";
.banga-wrap {
  width: 100%;
  max-height: 100%;
  .Image-item {
   @extend .carouselImg;
    .link-item {
        @extend .gitLink
     }
  }
}
</style>
