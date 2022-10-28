<template>
  <section class="main scene1" :class="$mq">
    <div class="main-video-wrap">
      <div class="typewriter">
        <p class="desc1">Front-end</p>
        <p class="desc2">Kim :Doeun</p>
        <p class="desc3">Resume.</p>
      </div>
      <video autoplay muted loop src="~/assets/video/Meeting.mp4"></video>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section.scene1 {
  position: relative;

  &::after {
    display: block;
    content: "";
    height: 1080px;
  }
  .main-video-wrap {
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    max-width: 100vw;
    height: 1080px;
    z-index: 10;
    font-weight: bold;
    overflow: hidden;
    & div {
      position: absolute;
      top: 20%;
      left: 20%;
      font-size: 4.3rem;
      z-index: 10;
    }
    video {
      opacity: 0.8;
    }
  }

  &.mobile {
    max-height: 980px;
    div.main-video-wrap {
      video {
        max-height: 700px;
      }
      & div {
        top: 30%;
        left: 10%;
      }
      div.typewriter {
        font-size: 40px;
      }
    }
  }
}
</style>
