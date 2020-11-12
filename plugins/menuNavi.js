import Vue from "vue";

Vue.prototype.$menuNavi = des => {
  selectMenu(des);
};
//네비게이터
function selectMenu(des) {
  let targetElem = document.querySelector(`.scene-title.${des}`);
  let offsetTop = targetElem.getBoundingClientRect();
  window.scroll({
    behavior: "smooth",
    left: 0,
    // top: offsetTop.top - 52
    top: targetElem.offsetTop - 52
  });
}

export default {
  selectMenu
};
