import Vue from "vue";
Vue.prototype.$renderChart = str => {
  return init(str);
};

const targets = {
  pos: "",
  coverletter: "",
  bars: ""
};

function init(str) {
  targets.pos = document.querySelectorAll(".pos li");
  targets.coverletter = document.querySelector(".coverletter div");
  targets.bars = document.querySelectorAll(".bar ");

  switch (str) {
    case "pos":
      rednerPosition();
      break;
    case "cv":
      rednerLetter();
      break;
    case "chart":
      renderChart();
      break;
  }
}

function renderChart() {
  for (let i = 0; i < targets.bars.length; i++) {
    targets.bars[i].style.width = `${targets.bars[i].getAttribute("score")}%`;
  }
  return true;
}
function rednerPosition() {
  for (let i = 0; i < targets.pos.length; i++) {
    targets.pos[i].style.opacity = "1";
    targets.pos[i].style.transform = `translateY(0%)`;
  }
}
function rednerLetter() {
  targets.coverletter.style.opacity = "1";
  targets.coverletter.style.transform = `translateY(0%)`;
}

export default {
  init
  // active
};
