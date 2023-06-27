/** @format */

import React from 'react';

const Life = () => {
  return (
    <section className="life scroll">
      <div className="inner">
        <p className="edutitle" data-aos="fade-up">
          Education
        </p>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="edu">
            <p>그린아트아카데미 수료</p>
            <div className="eduinner">
              <span>수강기간</span>
              <span>2022.11 ~ 2023.05</span>
              <span>과정명</span>
              <span>
                기업요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자
                양성과정
              </span>
            </div>
          </div>
          <div className="edu">
            <p>영남대학교 졸업</p>
            <div className="eduinner">
              <span>졸업년도</span>
              <span>2021.08</span>
              <span>전공</span>
              <span>무역학과</span>
            </div>
          </div>
          <div className="edu">
            <p>영어 (OPIC)</p>
            <div className="eduinner">
              <span>취득일</span>
              <span>2022.8</span>
              <span>등급</span>
              <span>IH</span>
            </div>
          </div>
          <div className="edu">
            <p>정보처리기사</p>
            <div className="eduinner">
              <span>취득일자</span>
              <span>2023.04</span>
              <span>향후 일정</span>
              <span>운영체제, 자료구조, 알고리즘, 데이터베이스, 네트워크 학습예정</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
