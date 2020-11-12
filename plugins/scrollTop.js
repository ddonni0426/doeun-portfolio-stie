import Vue from "vue";

Vue.prototype.$scrollTop = string => {
  switch (string) {
    case "off":
      inactive();
      break;
    case "on":
      active();
      break;
    default:
      this.$renderChart();
  }
};

function active() {
  document.querySelector(".arrowTop").classList.remove("beforeActive");
}
function inactive() {
  document.querySelector(".arrowTop").classList.add("beforeActive");
}

export default {
  active,
  inactive
};
