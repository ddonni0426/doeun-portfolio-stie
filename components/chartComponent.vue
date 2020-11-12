<template>
  <ul class="skillCharts" :class="$mq">
    <li>
      <span>Html5</span>
      <span class="bar" :score="score['html']"></span>
      <span>{{ score["html"] }}%</span>
    </li>
    <li>
      <span>Css3</span>
      <span class="bar" :score="score['css']"></span>
      <span>{{ score["css"] }}%</span>
    </li>
    <li>
      <span>Scss</span>
      <span class="bar" :score="score['scss']"></span>
      <span>{{ score["scss"] }}%</span>
    </li>
    <li>
      <span>Es6+</span>
      <span class="bar" :score="score['js']"></span>
      <span>{{ score["js"] }}%</span>
    </li>
    <li>
      <span>Vue.js</span>
      <span class="bar" :score="score['vue']"></span>
      <span>{{ score["vue"] }}%</span>
    </li>
    <li>
      <span>Nuxt.js</span>
      <span class="bar" :score="score['nuxt']"></span>
      <span>{{ score["nuxt"] }}%</span>
    </li>
    <li>
      <span>python</span>
      <span class="bar" :score="score['python']"></span>
      <span>{{ score["python"] }}%</span>
    </li>
    <li>
      <span>Webpack</span>
      <span class="bar" :score="score['webpack']"></span>
      <span>{{ score["webpack"] }}%</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      score: {
        html: 70,
        css: 70,
        scss: 60,
        js: 65,
        vue: 50,
        python: 50,
        nuxt: 65,
        webpack: 45
      }
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
ul.skillCharts {
  &.mobile,
  &.tablet {
    margin: 0 auto;
  }

  padding-top: 7px;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 4px 0;
    span {
      &:nth-child(1) {
        min-width: 79px;
        max-width: 120px;
      }
      &.bar {
        width: 1px;
        height: 10px;
        margin-right: 7px;
        display: inline-block;
        background: linear-gradient(to right, #ECD6B7, #C95625);
        border-radius: 50px;
        transition: 0.55s;
      }
    }
  }
}
</style>
