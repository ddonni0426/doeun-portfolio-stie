import Vue from "vue";
Vue.prototype.$renderChart = (str) => {
  return init(str);
};

const targets = {
  pos: "",
  coverletter1: "",
  coverletter2: "",
  bars: "",
};

function init(str) {
  targets.pos = document.querySelectorAll(".pos li");
  targets.coverletter1 = document.querySelector(".coverletter1 div");
  targets.coverletter2 = document.querySelector(".coverletter2 div");
  targets.bars = document.querySelectorAll(".bar ");

  switch (str) {
    case "pos":
      rednerPosition();
      break;
    case "cv":
      rednerLetter1();
      break;
    case "cv2":
      rednerLetter2();
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
function rednerLetter1() {
  targets.coverletter1.style.opacity = "1";
  targets.coverletter1.style.transform = `translateY(0%)`;
}
function rednerLetter2() {
  targets.coverletter2.style.opacity = "1";
  targets.coverletter2.style.transform = `translateY(0%)`;
}

export default {
  init,
  // active
};
