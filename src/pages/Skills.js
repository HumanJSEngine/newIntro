/** @format */

import React from 'react';
import 'aos/dist/aos.css';

const Skills = () => {
  return (
    <section className="skills scroll">
      <div className="inner">
        <p className="skilltitle" data-aos="fade-up">
          Skills
        </p>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <ul className="skills-list">
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=html" alt="" />
                <span>HTML5</span>
              </div>
              <p>
                프론트 작업에 있어 가장 기초적이고 필수 언어인 만큼 모든 업무와
                개인 작업에서 사용하기 때문에 충분한 기본기와 이해도를 갖추고
                있습니다.웹 표준을 준수하고 접근성을 고려하며 기초적인 마크업이
                가능합니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=css" alt="" />
                <span>CSS3</span>
              </div>
              <p>
                프론트 작업에서 가장 기초적이고 필수 언어인 만큼 개인 포트폴리오
                작업에 사용하기 능숙한 수준이며 CSS로 가능한 기초적인 구현
                영역은 소화할 수 있습니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=js" alt="" />
                <span>Javascript</span>
              </div>
              <p>
                자바스크립트 코어 지식에 대한 이해도와 ES6 문법 활용 능력을 통해
                기본적인 기능 구현이 어려움 없이 가능한 수준이며, 보다
                유지보수에 용이하며 가독성과 확장성을 갖춘 코드를 작성하기 위해
                노력하고 있습니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=jquery" alt="" />
                <span>Jquery</span>
              </div>
              <p>
                DOM 조작의 편의성과 유지보수 업무에 대비하여 기초적인 문법을
                학습하였습니다. 리액트를 공부하며 거의 사용하지 않지만
                제이쿼리로 작성한 코드를 바닐라 JS로 변환할 수 있습니다.
              </p>
            </li>

            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=react" alt="" />
                <span>React</span>
              </div>
              <p>
                리액트의 작동 메뉴얼에 대한 이해와 상태관리, 훅, 라이프사이클 등에
                대한 기본지식을 바탕으로 함수형 프로그래밍을 지향하며
                작업합니다. 학습에 가장 많은 비중을 두고 있습니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=ts" alt="" />
                <span>Typescript</span>
              </div>
              <p>
                기본적인 타입 지정이 가능하며 협업시 대규모의 프로젝트 협업시
                에러를 사전방지하는 타입지정의 중요도를 인지하고 지속적인 학습을
                진행 중에 있습니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=redux" alt="" />
                <span>Redux</span>
              </div>
              <p>
                Redux toolkit 라이브러리 문법을 통해 리액트 개발환경에서
                전역적인 상태관리를 할 때 주로 사용합니다.
              </p>
            </li>
            <li>
              <div>
                <img
                  src="https://skillicons.dev/icons?i=styledcomponents"
                  alt=""
                />
                <span>StyledComponents</span>
              </div>
              <p>
                리액트에서 가장 많이 사용하는 css 라이브러리이며 절반 이상의
                프로젝트에 사용되었습니다. 편리한 스타일 코드 작성을 위해
                사용하며 중첩 문법과 변수 관리, 상태값 전달에 필요한 기능을
                사용할 수 있습니다.
              </p>
            </li>
            <li>
              <div>
                <img src="https://skillicons.dev/icons?i=git" alt="" />
                <span>Git</span>
              </div>
              <p>
                버전관리에 필요한 기본적인 커맨드 명령어를 숙지하고 있으며,
                staging area, local repo, remote repo로 이어지는 기본개념을
                이해하며 협업 시 revert, rebase로 충돌해결을 해본 경험이 있습니다
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
