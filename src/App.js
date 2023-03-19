/** @format */

import './scss/style.scss';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Visual from './pages/Visual';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Vision from './pages/Vision';
import Portfolio from './pages/Portfolio';
import Life from './pages/Life';
import React, { useState, useEffect, useRef } from 'react';
import Anime from './assets/Anime';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gotop from './components/Gotop';
import MobileMenu from './components/MobileMenu';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/theme';

function App() {
  //Anime js 적용대상
  // 이동할 위치값 지정
  const main = useRef(null);
  // html 대상을 저장하는 용도 뿐만 아니라 state가 아닌 변수 저장
  // useRef : 화면갱신과 상관없는 아닌 변수 저장
  const pos = useRef([]);
  //화면이 리사이징 되므로 section 위치가 변경됨
  const getPos = () => {
    pos.current = [];
    // 각 section 위치값을 파악해서 저장
    const secs = main.current.querySelectorAll('.scroll');
    for (const item of secs) {
      // 각 영역의 스크롤 픽셀 위치값
      pos.current.push(item.offsetTop);
    }
    // 모바일 메뉴 숨기기
    const winW = window.innerWidth;
    if (winW > 860) {
      setOpen(false);
    }
  };

  // 6. header의 메뉴를 클릭시 페이지 번호 전달,
  const [page, setPage] = useState(0);

  useEffect(() => {
    new Anime(window, {
      prop: 'scroll',
      value: pos.current[page] - 80,
      duration: 500,
    });
  }, [page]);

  useEffect(() => {
    AOS.init();
    // 기본 section 스크롤 위치값을 초기화
    //최초 section 스크롤 위치값을 파악
    getPos();
    // 4. 화면 리사이즈 할 때도 getPos() 실행 필요
    window.addEventListener('resize', getPos);
    window.addEventListener('scroll', getPos);
    return () => {
      window.removeEventListener('resize', getPos);
      window.removeEventListener('scroll', getPos);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="wrap" ref={main}>
          <Gotop />
          <Header
            setPage={setPage}
            setOpen={setOpen}
            open={open}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <MobileMenu setPage={setPage} open={open} setOpen={setOpen} />
          <div className="container">
            <Visual />
            <Profile />
            <Skills />
            <Portfolio />
            <Life />
            <Vision/>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
