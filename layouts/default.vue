<template>
  <div id="wrapper">
    <nav class="global-nav" :class="$mq">
      <ul class="global-nav-links nav-links" :class="$mq">
        <li @click.stop="navi">
          <h2>
            <a href="#a" class="logo-link" data="a">:-Doeun</a>
          </h2>
        </li>
        <li @click.prevent="navi">
          <a href="#b" class="goTo-scene2 goto" data="b">About Me</a>
        </li>
        <li @click.prevent="navi">
          <a href="#c" class="goTo-scene3 goto" data="c">Portfolio</a>
        </li>
        <li @click.prevent="navi">
          <a href="#d" class="goTo-scene5 goto" data="d">Contact</a>
        </li>
        <ul class="lang">
          <li @click.stop="selectLang">
            <a href="#a" class="kor selected">KOR</a>
          </li>
          <li @click.stop="selectLang">
            <a href="#a" class="eng">ENG</a>
          </li>
        </ul>
      </ul>
    </nav>
    <!-- 모바일 메뉴 시작 -->
    <nav class="m_global-nav" :class="$mq">
      <ul class="mobile-nav-links nav-links">
        <li class="m_logo">
          <h2>
            <a href="#" class="logo-link">:-Doeun</a>
          </h2>
        </li>
        <li class="m_menu">
          <a href="#menu" @click="mMenuDown">
            <img src="../assets/image/mobile_menu.png" alt="메뉴 버튼" />
          </a>
        </li>
      </ul>
    </nav>
    <div class="m_menu_list" :class="$mq">
      <div @click.prevent="navi" data="b">
        <a href="#a" data="b">About Me</a>
      </div>
      <div @click.prevent="navi" data="c">
        <a href="#b" data="c">Portfolio</a>
      </div>
      <div @click.prevent="navi" data="d">
        <a href="#c" data="d">Contact</a>
      </div>
    </div>
    <Nuxt />
    <div class="arrowTop beforeActive">
      <button class="goTopBtn" @click="navi">
        <img src="../assets/image/arrow.png" data="a" alt="위로 이동" />
      </button>
    </div>
  </div>
</template>

<script>
import throttle from "lodash.throttle";

export default {
  data() {
    return {
      toggle: false,
      draw: false, //차트 딱 한 번만 그려지도록
    };
  },
  methods: {
    mMenuDown() {
      const mBtn = document.querySelector(".m_menu_list");
      if (!this.toggle) {
        //닫혀있으면 열기
        mBtn.style.top = "52px";
        this.toggle = !this.toggle;
      } else {
        mBtn.style.top = "-333px";
        this.toggle = !this.toggle;
      }
    },
    //네비게이터
    navi(e) {
      switch (e.target.getAttribute("data")) {
        case "a":
          window.scroll({
            behavior: "smooth",
            left: 0,
            top: 0,
          });
          break;
        case "b":
          this.$menuNavi("b");
          break;
        case "c":
          this.$menuNavi("c");
          break;
        case "d":
          this.$menuNavi("d");
          break;
        case "e":
          this.$menuNavi("e");
          break;
        default:
          break;
      }
    },
    selectLang(e) {
      let currentLang = document.querySelector(".selected");
      if (e.target.classList.contains("selected")) {
        return;
      } else {
        currentLang.classList.remove("selected");
        currentLang = e.target;
        currentLang.classList.add("selected");
      }
    },
    onScroll: throttle(function () {
      const postElem = document.querySelector(".pos");
      const cvElem = document.querySelector(".coverletter");
      const chartElem = document.querySelector(".skillCharts");
      let boundingRect = [];
      boundingRect[0] = postElem.getBoundingClientRect();
      boundingRect[1] = cvElem.getBoundingClientRect();
      boundingRect[2] = chartElem.getBoundingClientRect();

      if (this.draw === false) {
        //pos 애니활성
        if (
          boundingRect[0].top > window.innerHeight * 0.1 &&
          boundingRect[0].top < window.innerHeight * 0.92
        ) {
          this.$renderChart("pos");
        }
        //skillChart 애니활성
        if (
          boundingRect[1].top > window.innerHeight * 0.1 &&
          boundingRect[1].top < window.innerHeight * 0.92
        ) {
          this.$renderChart("cv");
        }
        //cv 애니활성
        if (
          boundingRect[2].top > window.innerHeight * 0.1 &&
          boundingRect[2].top < window.innerHeight * 0.92
        ) {
          this.$renderChart("chart");
        }
      }
    }, 500),
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 1000) {
        this.$scrollTop("off");
      } else {
        this.$scrollTop("on");
      }
      this.onScroll();
    });
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: relative;
  width: 100vw;
  min-height: 100%;
  background: rgba(15, 20, 48, 0);
  nav.global-nav,
  nav.m_global-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    border-bottom: 1px solid #ddd;
    z-index: 100;
    -o-backdrop-filter: saturate(180%) blur(15px);
    -moz-backdrop-filter: saturate(180%) blur(15px);
    -webkit-backdrop-filter: saturate(180%) blur(15px);
    backdrop-filter: saturate(180%) blur(15px);
  }
  //반응형 모바일 메뉴
  nav.m_global-nav {
    &.pc,
    &.labtop {
      display: none;
      ul.mobile-nav-links {
        display: none;
      }
    }
    &.tablet,
    &.mobile {
      ul.mobile-nav-links {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        z-index: 300;
        li.m_menu {
          width: 50px;
          height: 52px;
          text-align: center;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              width: 24px;
              height: 24px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  nav.global-nav {
    &.mobile,
    &.tablet {
      display: none;
    }
    ul.global-nav-links {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding-left: 2rem;
      max-width: 1500px;
      h2 {
        margin: 0;
      }
      & li:first-child {
        display: inline-block;
        margin-right: auto;
      }
      & li a.logo-link {
        font-size: 1.5rem;
      }
      & a {
        color: #0f1430;
        font-size: 1rem;
      }
      & > li > a.goto {
        margin: 0 1em;
        text-align: center;
      }
      h2 > a.logo-link {
        display: inline-block;
        height: 52px;
        line-height: 52px;
      }
      ul.lang {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        margin-left: auto;
        & > li {
          padding: 0 10px;
        }
        & > li > a.selected {
          color: #ffb733;
        }
      }
    }
  }
  .m_menu_list {
    display: none;
    border-bottom: 1px solid #ddd;
    transition: 0.7s;
    background: #f7f7f7;
    &.tablet,
    &.mobile {
      position: fixed;
      z-index: 80;
      display: block;
      top: -333px;
      left: 0;
      width: 100vw;
      div {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #ededed;
      }
    }
  }

  /*위로 이동 화살표*/
  div.arrowTop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    z-index: 100;
    line-height: 50px;
    .goTopBtn,
    .goTopBtn {
      img {
        width: 100%;
        height: 100%;
        padding: 0;
      }
    }
    &.beforeActive {
      display: none;
    }
  }
  /*위로 이동 화살표*/
}
</style>
