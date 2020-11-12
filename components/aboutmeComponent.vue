<template>
  <section class="sub-scene scene2">
    <div class="scene-title b">
      <h2>#About Me.</h2>
    </div>
    <span class="rsWrapper">
      <!-- resume-form 들어갈 자리 -->
      <article class="resume-form" :class="$mq">
        <div class="resume-elem pic" :class="$mq">
          <img src="../assets/image/doeun-character.png" alt="김도은 사진" />
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
        <div class="resume-elem myinfo" :class="$mq">
          <h3>
            Hi, My name is ___
            <span></span>
          </h3>
          <ul class="info">
            <li>김 도은</li>
            <li>만 27세 (93년생)</li>
            <li>동명대학교 컴퓨터공학과 졸업 ( 3.7 / 4.5 )</li>
            <li>울산광역시 거주</li>
            <li>희망 근무지 - 서울, 경기 전지역</li>
          </ul>
        </div>
        <div class="resume-elem education" :class="$mq">
          <h3>
            Education ___
            <span></span>
          </h3>
          <ul class="inflearn">
            <li>애플 웹사이트 인터랙션 클론</li>
            <li>인터랙티브 웹 개발 제대로 시작하기</li>
            <li>CSS Flex와 Grid 제대로 익히기</li>
            <li>Javscript Es6+ 제대로 알아보기</li>
            <li>Vue.js로 Nodebird SNS 만들기</li>
            <li>프론트엔드 개발자를 위한 웹팩</li>
            <li>공공 데이터를 이용한 빅데이터 분석</li>
          </ul>
        </div>
        <div class="resume-elem projects" :class="$mq">
          <h3>
            Projects ___
            <span></span>
          </h3>
          <ul class="projectList">
            <li>
              Daycatcher
              <small>소요기간 3주</small>
            </li>
            <li>
              Bangagan clone coding
              <small>소요기간 10일</small>
            </li>
            <li>
              Portfolio site
              <small>소요기간 2주</small>
            </li>
            <li>
              BBC Clone coding
              <small>소요기간 1주 이내</small>
            </li>
            <li>
              Interactive 응용 사이트
              <small>소요기간 1주 이내</small>
            </li>
          </ul>
        </div>
        <div class="resume-elem coverletter" :class="$mq">
          <div>
            <h3>Cover Letter.</h3>
              <p>안녕하십니까, 프론트엔드 개발 직무에 지원하는 김도은 입니다.</p>
              <p> 제가 이 직무를 선택한 이유는, 눈으로 작업물의 변화를 확인할 수 있다는 부분이 즐거웠기 때문입니다. 화면을 구현하는 과정에서는 프로젝트와 서로 상호작용한다는 느낌을 받곤합니다.</p>
              <p> 텅 비어있던 화면이 하나 둘씩 채워지는 걸 보면서 느꼈던 보람은 제가 프로젝트를 끝까지 완수할 수 있게 해준 원동력이 되었습니다. </p>
              <p>또 프로젝트 초기에 화면 구성을 어떻게 할 것인지, 어떤 이벤트를 넣을 것인지 등을 구상하는 과정도 즐거웠습니다. </p>
              <p>꾸미고 계획하고 만드는 활동을 좋아하는 저의 성격과 컴퓨터공학과에서 배운 지식들을 함께 살릴 수 있는 직무가 프론트엔드 개발이라고 생각합니다.
              <p>제가 가진 특성을 잘 다듬어서 단순히 실행되는 코드가 아닌 효율적인 UI/UX를 구현하기 위해 고민하고 연구하는 프론트엔드 개발자가 되겠습니다.</p>
          </div>
        </div>
        <div class="resume-elem skills" :class="$mq">
          <h3>
            Skills ___
            <span></span>
          </h3>
          <skill-chart></skill-chart>
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
      @include setGrid(grid, 4, 1fr, 3, 1.5fr, 1.8rem);
      padding: 1.7vh 0;
      font-size: 17px;
      .resume-elem {
        h3 {
          font-style: italic;
          font-size: 22px;
        }
      }
      .pic {
        border-right: 2px solid gold;
        @include setFlex(flex, center, center);
        min-width: 200px;
        & img {
          width: 240px;
          height: 240px;
          border-radius: 100%;
        }
        grid-row: 2 / span 2;
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
        grid-column: 1 / span 2;
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
        @extend .underLine;
        grid-row: 2 / span 1;
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
      }

      .education {
        border-right: 2px solid gold;
        @extend .underLine;
        ul.inflearn {
          li {
            list-style-type: square;
            margin: 10px 0;
            font-size: 16px;
          }
        }
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
      }
      .projects {
        @extend .underLine;
        li {
          list-style-type: square;
          margin: 10px 0;
        }
        &.tablet,
        &.mobile {
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
        background-color: rgba(242, 173, 119, 0.13);
        div {
          @include setFlex(flex, space-evenly, center);
          flex-direction: column;
          height: 100%;
          padding: 20px;
          transform: translateY(30%);
          opacity: 0;
          transition: 0.5s;
          h3 {
           font-family: "NEXON Lv1 Gothic OTF";
            margin-bottom: 2rem;
            text-align: center;
            font-size: 34px;
            color: #86090e;
          }
          
        }
        @include setGridArea(3, 2, 2, 2);
        &.tablet,
        &.mobile {
          @extend .resGrid;
        }
      }
    }
  }
}
/* 씬2 끝 */
</style>
