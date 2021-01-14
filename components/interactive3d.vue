<template>
<div class="space3d-wrap">
<div class="Image-item">
      <img class="space3d" src="@/assets/image/portfolio.gif" alt="인터렉티브 웹 메인화면" />
      <div class="link-item">
        <!-- <a href="https://github.com/ddonni0426/bangagan-clone" target="_blank"> 인터렉티브 공간 소스보러가기</a> -->
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/function.scss";
.space3d-wrap {
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