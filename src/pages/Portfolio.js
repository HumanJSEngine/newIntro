/** @format */

import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <p className="pftitle" data-aos="fade-up">
          Portfolio
        </p>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="project">
            <div className="pinfo">
              <iframe
                id="kyobo"
                title="kyobo"
                src="https://user-images.githubusercontent.com/103413040/223362125-f9ffb27c-29b4-45b3-b91c-d050722efeec.mp4"
              ></iframe>

              <div className="pinforight">
                <div className="titlewrapper">
                  <div className="titlewrap1">
                    <p className="title">
                      <span>미니 교보문고</span>
                      <span>(토이프로젝트)</span>
                    </p>
                    <span className="days">2022.12(2주 제작)</span>
                  </div>
                  <span className="github">
                    <img src="https://skillicons.dev/icons?i=github" alt="" />{' '}
                    <a
                      href="https://github.com/HumanJSEngine/KyoboBooks"
                      alt="kyobo"
                    >
                      깃허브방문
                    </a>
                  </span>
                </div>
                <p className="des">
                  FE와 BE간 사전 협업을 위하여 교보문고 DB를 이용한 간단한 api
                  구성 및 Axios를 이용한 책 정보 데이터 연동,
                  <br /> 파라미터를 이용한 책 리스트별 조회,상세정보 이동기능을
                  구현한 미니 사이드 프로젝트입니다.
                </p>
                <div className="skillstack">
                  <ul className="skillicons">
                    <li>
                      <img src="https://skillicons.dev/icons?i=html" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=css" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=js" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=react" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="pinfo">
              <iframe
                id="yogiyo"
                title="yogiyo"
                src="https://www.youtube.com/embed/l4c_RrM14EM"
              ></iframe>

              <div className="pinforight">
                <div className="titlewrapper">
                  <div className="titlewrap1">
                    <p className="title">
                      <span>배달주문서비스</span>
                      <span>(요기요 벤치마킹)</span>
                    </p>
                    <span className="days">2023.1(1달 제작)</span>
                  </div>
                  <span className="github">
                    <img src="https://skillicons.dev/icons?i=github" alt="" />{' '}
                    <a
                      href="https://github.com/HumanJSEngine/project_yogiyo"
                      alt="kyobo"
                    >
                      깃허브방문
                    </a>
                  </span>
                </div>
                <p className="des">
                  React를 기반으로 작업한 배달주문서비스 포트폴리오입니다.
                  기본적인 가게분류, 회원가입, 로그인, 유효성 검사, 장바구니,
                  리뷰 등록 및 삭제가 CRUD로 구현되어 있으며 restful API를
                  활용하였습니다. motion framer을 이용하여 상태바, 간단한
                  애니메이션을 추가하였습니다. 서버가 연동되어 있지 않으므로
                  영상으로 기능확인을 부탁드립니다.
                </p>
                <div className="skillstack">
                  <ul className="skillicons">
                    <li>
                      <img src="https://skillicons.dev/icons?i=html" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=css" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=js" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=react" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=redux" alt="" />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=styledcomponents"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="pinfo">
              <img
                src="https://user-images.githubusercontent.com/103413040/222675624-1f5126bf-04ed-423b-944d-294327ffab73.gif"
                alt="문화가계부"
                width="600"
                height="500"
              />

              <div className="pinforight">
                <div className="titlewrapper">
                  <div className="titlewrap1">
                    <p className="title">
                      <span>가계부 프로젝트</span>
                      <span>(문화비 테마)</span>
                    </p>
                    <span className="days">2023.2(3주 제작)</span>
                  </div>
                  <span className="github">
                    <img src="https://skillicons.dev/icons?i=github" alt="" />{' '}
                    <a
                      href="https://github.com/HumanJSEngine/project_culturebudget"
                      alt="kyobo"
                    >
                      깃허브방문
                    </a>
                  </span>
                </div>
                <p className="des">
                  모바일 화면을 기반으로 가계부 테마의 CRUD가 가능한 앱을
                  만들었으며 회원가입, 로그인, 사진 등록, 달력, 통계 형태 변경
                  등의 기능이 구현되어 있습니다. 리액트 vite 툴을 기반으로
                  작업하였으며 타입스크립트를 사용하여 타입지정의 안정성을
                  높였습니다.
                </p>
                <div className="skillstack">
                  <ul className="skillicons">
                    <li>
                      <img src="https://skillicons.dev/icons?i=html" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=css" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=js" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=react" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=ts" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=redux" alt="" />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=styledcomponents"
                        alt=""
                      />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=vite" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="pinfo">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LFwteJPctv0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <div className="pinforight">
                <div className="titlewrapper">
                  <div className="titlewrap1">
                    <p className="title">
                      <span>쇼핑몰 프로젝트</span>
                      <span>(물건 구매 테마)</span>
                    </p>
                    <span className="days">2023.3(제작 중)</span>
                  </div>
                  <span className="github">
                  <img src="https://skillicons.dev/icons?i=github" alt="" />{' '}
                    <a
                      href="https://github.com/HumanJSEngine/project-emarket"
                      alt="kyobo"
                    >
                      깃허브방문  
                    </a>
                  </span>
                </div>
                <p className="des">
                  쇼핑몰 테마로 Json server를 이용한 rest API로 제품리스트,
                  검색, 분류, 로그인, 회원가입 등 전반적인 기능을 구현하였습니다
                </p>
                <div className="skillstack">
                  <ul className="skillicons">
                    <li>
                      <img src="https://skillicons.dev/icons?i=html" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=css" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=js" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=react" alt="" />
                    </li>
                    <li>
                      <img src="https://skillicons.dev/icons?i=redux" alt="" />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=styledcomponents"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='project'>
                        <div className='pinfo'>
                            <img
                                src='https://user-images.githubusercontent.com/103413040/222675624-1f5126bf-04ed-423b-944d-294327ffab73.gif'
                                alt='문화가계부'
                                width='500'
                                height='500'
                            />

                            <div className='pinforight'>
                                <p className='title'>
                                    가계부 프로젝트 <span>(문화비 테마)</span>
                                </p>
                                <span className='days'>
                                    작업시기 - 2023. 2. 1주 ~ 2023. 2. 4주
                                </span>
                                <span>
                                    <img
                                        src='https://skillicons.dev/icons?i=github'
                                        alt=''
                                    />{' '}
                                    <a
                                        href='https://github.com/HumanJSEngine/project_culturebudget'
                                        alt='budget'
                                    >
                                        깃허브방문
                                    </a>
                                </span>
                                <p>
                                    모바일 화면을 기반으로 가계부 테마의 CRUD가
                                    가능한 앱을 만들었으며 회원가입, 로그인,
                                    사진 등록, 달력, 통계 형태 변경 등의 기능이
                                    구현되어 있습니다. 리액트 vite 툴을 기반으로
                                    작업하였으며 타입스크립트를 사용하여
                                    타입지정의 안정성을 높였습니다.
                                </p>
                                <div className='skillstack'>
                                    <span>사용기술</span>
                                    <ul className='skillicons'>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=html'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=css'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=js'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=react'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=ts'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=redux'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=styledcomponents'
                                                alt=''
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src='https://skillicons.dev/icons?i=vite'
                                                alt=''
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
