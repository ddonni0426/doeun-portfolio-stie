<template>
  <section class="sub-scene scene2">
    <div class="scene-title b">
      <h2>#Resume.</h2>
    </div>
    <span class="rsWrapper">
      <!-- resume-form 들어갈 자리 -->
      <article class="resume-form" :class="$mq">
        <div class="resume-elem pic" :class="$mq">
          <img src="../assets/image/zepeto-2.jpg" alt="김도은 사진" />
        </div>

        <div class="resume-elem pos" :class="$mq">
          <!-- 아래에서 위로 등장하게 -->
          <ul>
            <li>
              <strong>Front-end Develop</strong>
            </li>
            <li>
              <strong>&nbsp; & &nbsp;</strong>
            </li>
            <li>
              <strong>Publishing</strong>
            </li>
          </ul>
        </div>
        <div class="resume-elem projects" :class="$mq">
          <h3>
            Projects ___
            <span></span>
          </h3>
          <ul class="projectList">
            <li>
              AI 분석 가시화 UI개발 외주
              <small> ( 1주일 )</small>
            </li>
            <li>
              SK가스 CMS 리뉴얼
              <small> ( 약 6개월 )</small>
            </li>
            <li>
              SK가스 Small Bulk 기능 개선
              <small> ( 약 10일 )</small>
            </li>
            <li>
              삼성화재 라이브 상담톡 구축
              <small> ( 3개월 )</small>
            </li>
            <li>
              중앙선거관리 위원회 구축
              <small> ( 1개월 )</small>
            </li>
            <li>
              Visang MasterK 리뉴얼
              <small> ( 1개월 이내 )</small>
            </li>
            <li>
              SKConnect+ 구축
              <small> ( 5개월 이내 )</small>
            </li>
            <li>
              한경대 입학처 UI 리뉴얼
              <small> ( 1개월 )</small>
            </li>
            <li>
              LG Web 사보
              <small> ( 1주 이내 )</small>
            </li>
          </ul>
        </div>
        <div class="resume-elem myinfo" :class="$mq">
          <h3>
            Hi, My name is ___
            <span></span>
          </h3>
          <ul class="info">
            <li>김 도은</li>
            <li>만 29세 (93년생)</li>
            <li>경기도 군포시 거주</li>
            <li>유컴패니온 21.02.08 - 21.10.29 근무</li>
            <li>티지소프트 22.02.08 - 22.07.15 근무</li>
            <li>총 1년 3개월 경력</li>
          </ul>
        </div>
        <div class="resume-elem education" :class="$mq">
          <h3>
            Interest ___
            <span></span>
          </h3>
          <ul class="inflearn">
            <li>애플 웹사이트 인터랙션 클론</li>
            <li>인터랙티브 웹 개발 제대로 시작하기</li>
            <li>CSS Flex와 Grid 제대로 익히기</li>
            <li>Javscript Es6+ 제대로 알아보기</li>
            <li>Vue.js로 Nodebird SNS 만들기</li>
            <li>프론트엔드 개발자를 위한 웹팩</li>
            <li>Udemy React-query</li>
            <li>생활코딩 P5.js</li>
          </ul>
        </div>
        <div class="resume-elem coverletter coverletter1" :class="$mq">
          <div>
            <h3>It's my goal to__</h3>
            <p>
              사용자가 마우스와 키보드를 움직일 때마다 기대감을 느끼게 하는 웹을
              만들고 싶습니다.프론트엔드 개발자로 일하면서 기분이 좋았던 순간은
              작업물을 리뷰할 때 인터렉션을 보고 '오~' 와 같은 감탄사를 뱉어주실
              때였던 것 같습니다.
            </p>
            <p>
              인터렉션이나 UI 리소스가 많을수록 웹 사이트의 속도가 느려지기
              쉬운데, 저는 사용자의 감탄사와 기대감이 끊기지 않도록 꾸준히
              연구하고 시도하는 개발자가 되겠습니다.
            </p>
          </div>
        </div>
        <div class="resume-elem skills" :class="$mq">
          <h3>
            Skills ___
            <span></span>
          </h3>
          <skill-chart></skill-chart>
        </div>
        <div class="resume-elem keywords" :class="$mq">
          <h3>Keywords__ <span></span></h3>
          <ul class="badges">
            <li>#프론트엔드</li>
            <li>#웹</li>
            <li>#개발자</li>
            <li>#인터렉션</li>
            <li>#재미있는 웹</li>
            <li>#살아있는 웹</li>
          </ul>
        </div>
        <div class="resume-elem contact coverletter coverletter2" :class="$mq">
          <div>
            <h3>Passion__</h3>
            <p>
              - 반복을 줄이는 능력을 기르기 위해 활용할 수 있는 커스텀 Hook 들을
              찾아보고, UI 라이브러리 사이트를 참고하여 반복되는 스타일들을
              어떻게 공통 클래스 네임으로 묶을 수 있을지 고민하고 있습니다.
            </p>
            <p>
              - 각 언어를 역할에 맞게 사용하려고 연습하고 있습니다. 스타일
              언어로 해결할 수 있는 것들은 최대한 스타일 언어로 작업하고,
              스크립트는 되도록 동작과 관련된 것들에 사용하려 노력합니다.
              스크립트로 작업하면 딱 맞아떨어지게 컨트롤할 수 있는 게 많지만,
              그만큼 화면 성능을 떨어뜨릴 수 있기 때문에 CSS에서 제공하는
              기능들을 잘 숙지하고 활용하려고 합니다.
            </p>
          </div>
        </div>
      </article>
    </span>
  </section>
</template>

<script>
import skillChart from "./chartComponent.vue";
export default {
  components: {
    skillChart,
  },
};
</script>

<style lang="scss" scope>
@import "../assets/scss/function";
section.scene2 {
  min-height: 100%;
  &.mobile {
    justify-content: center;
  }
  .scene-title.b {
    @include setFlex(flex, center, center);
    h2 {
      margin: 1rem 0;
      font-size: 2.5rem;
      text-align: center;
    }
  }
  span.rsWrapper {
    .resume-form {
      &.tablet,
      &.mobile {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1.8rem;
      }
      max-width: 100%;
      @include setGrid(grid, 4, 1fr, 3, 0.5fr, 1.8rem);
      padding: 1.7vh 0;
      font-size: 17px;
      .resume-elem {
        h3 {
          font-style: italic;
          font-size: 22px;
        }
      }
      .pic {
        //border-right: 2px solid gold;
        @include setFlex(flex, center, flex-start);
        min-width: 200px;
        & img {
          width: 240px;
          height: 240px;
          border-radius: 100%;
        }
        grid-row: 1 / span 1;
        &.tablet,
        &.mobile {
          grid-column: 1;
          grid-row: 1;
        }
      }
      .pos {
        border: none;
        min-width: 100%;
        @include setFlex(flex, center, center);
        background: rgba(107, 111, 57, 0.11);
        border: 3px solid rgba(107, 111, 57, 0.11);
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            font-size: 34px;
            font-style: italic;
            margin-bottom: 10px;
            opacity: 0;
            transform: translateY(-30%);
            transition: 0.5s;
            color: #525329;
          }
        }
        grid-column: 3 / span 2;
        grid-row: 1 / span 1;

        &.tablet,
        &.mobile {
          max-height: 200px;
          li {
            font-size: calc(5vw + 3px);
          }
          @extend .resGrid;
        }
      }

      .myinfo {
        ul.info > li {
          margin: 10px 0;
          font-size: 16px;
        }
        //  border-right: 2px solid gold;
        @extend .underLine;
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
        grid-row: 1 / span 1;
      }

      .education {
        @extend .underLine;
        grid-row: 3 / span 1;

        ul.inflearn {
          li {
            list-style-type: square;
            margin: 10px 0;
            font-size: 16px;
          }
        }
        padding-left: 20px;
        border-right: 3px solid gold;

        &.tablet,
        &.mobile {
          @extend .resGrid;
          .inflearn {
            width: 80%;
            margin: 0 auto;
          }
          .inflearn li {
            list-style: none;
          }
        }
      }
      .projects {
        @extend .underLine;
        li {
          list-style-type: square;
          margin: 10px 0;
          a {
            line-height: 1;
            height: auto;
          }
        }
        border-right: 3px solid gold;
        grid-column: 3 / span 1;
        padding-left: 20px;
        &.tablet,
        &.mobile {
          .projectList {
            width: 80%;
            margin: 0 auto;
          }
          .projectList li {
            list-style: none;
          }
          @extend .resGrid;
        }
      }
      .skills {
        @extend .underLine;

        &.tablet,
        &.mobile {
          width: 80%;
          margin: 0 auto;
          @extend .resGrid;
        }
      }
      .coverletter {
        border: none;
        background-color: rgba(230, 230, 230, 0.5);
        background-color: rgba(201, 86, 37, 0.2);
        background-color: rgba(242, 173, 119, 0.13);
        border: 3px solid #c9562533;
        //text-align: left;
        @extend .underLine;

        div {
          @include setFlex(flex, null, center);
          flex-direction: column;
          height: 100%;
          padding: 20px;
          transform: translateY(30%);
          opacity: 0;
          transition: 0.5s;
          h3 {
            // font-family: "NEXON Lv1 Gothic OTF";
            //text-align: center;
            font-size: 26px;
            color: #c95625;
            margin-bottom: 40px;
          }
        }
        p {
          line-height: 1.6;
        }
        @include setGridArea(3, 2, 2, 2);
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
      }
      .coverletter1 {
        grid-row: 2 / span 1;
        grid-column: 1 / span 2;
      }
      .keywords {
        @extend .underLine;
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
      }
      .contact {
        grid-column: 3 / span 2;
        grid-row: 3 / span 3;
        border: 3px solid rgba(175, 196, 200, 0.3);
        background-color: rgba(175, 196, 200, 0.3);
        div {
          @include setFlex(flex, flex-start, center);
          flex-direction: column;
          height: 100%;
          padding: 20px;
          /* transform: translateX(100%);
          opacity: 0;
          transition: 0.5s; */
          h3 {
            font-size: 26px;
            margin-bottom: 40px;
            color: #616b6d;
          }
          p {
            line-height: 1.6;
            margin: 5px 0;
          }
        }
      }
      .badges {
        padding: 7px 0;
        li {
          display: inline-block;
          padding: 6px;
          margin: 3px;
          border: 1px solid gold;
          border-radius: 12px;
        }
      }
    }
  }
}
/* 씬2 끝 */
</style>
