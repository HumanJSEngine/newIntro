/** @format */

import React from 'react';
import view1 from '../assets/images/list1.jpg';
import view2 from '../assets/images/list2.jpg';
import view3 from '../assets/images/list3.jpg';
import 'aos/dist/aos.css';

const Vision = () => {
  return (
    <section className="vision scroll">
      <div className="inner">
        <p className="visiontitle" data-aos="fade-up">
          Vision
        </p>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="todolists">
            <div className="list1">
              <p>개발 도서 읽기</p>
              <span>-목표는 월 2~3권 이상입니다</span>
            </div>
            <div className="list2">
              <p>개발 강의 듣기</p>
              <span>-이해가 필요한 부분을 학습합니다</span>
            </div>
            <div className="list3">
              <p>건강관리</p>
              <span>-생산성 향상을 위해 체력관리를 하고 있습니다</span>
            </div>
          </div>
          <div className="todoview">
            <div className="view1">
              <img className="view1img" src={view1} alt="book" />
              <span>독서</span>
            </div>
            <div className="view2">
              <img className="view2img" src={view2} alt="study" />
              <span>강의 수강</span>
            </div>
            <div className="view3">
              <img className="view3img" src={view3} alt="strength" />
              <span>체력관리</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
