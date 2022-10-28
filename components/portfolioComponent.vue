<template>
  <section class="sub-scene scene3">
    <div class="scene-title c">
      <h2>#Side Projects.</h2>
    </div>
    <carousel
      class="carousel"
      :items="1"
      :autoplay="true"
      :nav="false"
      :dots="true"
    >
      <div>
        <banga-clon></banga-clon>
      </div>
      <div>
        <day-catcher></day-catcher>
      </div>
      <div>
        <inter-active></inter-active>
      </div>
    </carousel>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import DayCatcher from "./daycatcher.vue";
import BangaClon from "./bangaClon.vue";
import InterActive from "./interactive3d.vue";
export default {
  components: { carousel, DayCatcher, BangaClon, InterActive },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/function.scss";
.sub-scene.scene3 {
  .scene-title.c {
    @include setFlex(flex, center, center);
    h2 {
      margin: 1rem 0;
      font-size: 2.5rem;
      text-align: center;
    }
  }
  max-height: 100vh;
  .carousel {
    padding: 1.7vh 0;
    width: 100%;
    height: 80%;
    div {
      width: 100%;
      max-height: 100%;
      a {
        color: wheat;
        font-size: 16px;
      }
    }
  }
}
</style>
