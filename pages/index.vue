<template>
  <div class="container">
    <div class="sectionWrapper">
      <!-- 본문 시작 -->
      <first-component></first-component>
      <div class="aboutMeWrap">
        <aboutme-component></aboutme-component>
      </div>
      <div class="portfolioWrap">
        <portfolio-component></portfolio-component>
      </div>
      <!--      <div class="contactWrap">
        <contact-component></contact-component>
      </div> -->
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import firstComponent from "../components/firstComponent.vue";
import aboutmeComponent from "../components/aboutmeComponent.vue";
import portfolioComponent from "../components/portfolioComponent.vue";
import contactComponent from "../components/contactComponent.vue";
import footerComponent from "../components/footerComponent.vue";
export default {
  components: {
    firstComponent,
    aboutmeComponent,
    portfolioComponent,
    contactComponent,
    footerComponent,
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/typingAni.scss";
.sectionWrapper {
  .scene-title {
    h2 {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 2.5rem;
    }
  }
  position: relative;
  section.sub-scene {
    max-width: 1500px;
    overflow: hidden;
    margin: 14rem auto;
  }
}
</style>
