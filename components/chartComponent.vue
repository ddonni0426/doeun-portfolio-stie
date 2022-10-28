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
      <span>React.js</span>
      <span class="bar" :score="score['react']"></span>
      <span>{{ score["react"] }}%</span>
    </li>
    <li>
      <span>Git</span>
      <span class="bar" :score="score['git']"></span>
      <span>{{ score["git"] }}%</span>
    </li>
    <li>
      <span>SourceTree</span>
      <span class="bar" :score="score['sourceTree']"></span>
      <span>{{ score["sourceTree"] }}%</span>
    </li>
    <li>
      <span>CS</span>
      <span class="bar" :score="score['computerScience']"></span>
      <span>{{ score["computerScience"] }}%</span>
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
        scss: 65,
        js: 65,
        react: 60,
        git: 60,
        sourceTree: 55,
        computerScience: 70,
      },
    };
  },
  mounted() {},
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
        background: linear-gradient(to right, #ecd6b7, #c95625);
        border-radius: 50px;
        transition: 0.55s;
      }
    }
  }
}
</style>
