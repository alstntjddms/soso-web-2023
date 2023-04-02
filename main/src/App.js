import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Redirect from './components/Redirect';
import Redirect2 from './components/Redirect2';
import Send from './components/Send';

// set PORT=33381 && => package.json Script for Start

function App() {
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userID);
  const isFirstInfo = useSelector((state) => state.isFirstInfo);

  // 'vh' 자동 조정을 위한 기능(1)
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  
  function FirstInfo() {
    return (
      <React.Fragment>
        <div className={isFirstInfo ? "isFirstIngo_wrap" : "isFirstIngo_fade"}>
          <div className='isFirstIngo_outContainer'>
            <p className='isFirstIngo_title'>모바일로 접속해 주세요.</p>
            <p className='isFirstIngo_p'>PL@TER는 모바일에 최적화 되어 있어요.</p>
            <p className='isFirstIngo_p'>PC 등으로 접속 시 오류가 발생할 수 있어요.</p>
            <div className='isFirstIngo_button_confirm' onClick={() => { dispatch({ type: 'CHANGE_ISFIRSTINFO', data: !isFirstInfo }); }}>확인</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  useEffect(() => {
    // 화면 높이 자동 조절 기능(2)
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    // 사용자 기기 확인 기능
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {
      dispatch({ type: 'CHANGE_ISFIRSTINFO', data: !isFirstInfo });
    };
    if (userID === null) {
      navigater('/login');
    } else {
    };
  }, [navigater, userID])

  return (
    <React.Fragment>
      <div className='all_background_img'></div>
      <section className='section_shootingStar'>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
      </section>
      <FirstInfo></FirstInfo>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/redirect2" element={<Redirect2 />}></Route>
        <Route path="/send" element={<Send />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
