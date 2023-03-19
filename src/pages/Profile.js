/** @format */

import React from 'react';
import 'aos/dist/aos.css';
// import { FcPhoneAndroid } from 'react-icons/fc';
// import { SiGmail } from 'react-icons/si';
import bmj from '../assets/images/bmj2.jpeg';

const Profile = () => {
  return (
    <section className="profile scroll">
      <div className="inner">
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profileleft">
            <div className="imgwrapper">
              <img className="bmjimg" src={bmj} alt="bmjimg" />
            </div>
            <div className="infowrapper">
              <div className="bmj">
                <p>능동적인 프론트엔드 개발자</p>
                <p>배민준 입니다</p>
              </div>
              <div className="profile">
                <p className="profiletitle">PROFILE</p>
                <p>010-4457-1627</p>
                <p>bmj44571627@gmail.com</p>
                <span className="github">
                  <a
                    href="https://github.com/HumanJSEngine/KyoboBooks"
                    alt="kyobo"
                  >
                    Github
                  </a>
                  <img src="https://skillicons.dev/icons?i=github" alt="" />{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="profileright">
            <div className="mbti">
              <p>사교적인 외교관 ESFJ</p>
              <p>타고난 협력자로서 동료애가 많고</p>
              <p>친절하고 능동적인 유형</p>
            </div>
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
    </section>
  );
};

export default Profile;
