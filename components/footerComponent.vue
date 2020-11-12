<template>
  <footer id="footer">
    <p>Copyright 2020. Kim Doeun. All rights reserved.</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/function";

#footer {
  @include setFlex(flex, center, center);
  width: 100%;
  height: 100px;
  background: #333;
  color: beige;
}
</style>