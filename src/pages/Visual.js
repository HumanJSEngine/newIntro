/** @format */

import React, { useState, useEffect } from 'react';
import logo from '../assets/images/main.jpg';
// import Anime from '../assets/Anime';

const Visual = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = '"네 가능합니다, 전혀 문제 없습니다."';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return (
    <section className="visual scroll">
      <div className="inner">
        <div className="intro">
          <img src={logo} alt="visual" />
          <p>
            어떠한 요구사항에도
            <br />
            "그건 좀 어려울 것 같은데요." 가 아닌
            <br />
            <span>{blogTitle}</span> 라고 대답할 수 있는
            <br />
            <span>정확</span>하고 <span>유능</span>한 개발자 배민준이
            되겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visual;
