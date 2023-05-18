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
// homepage = https://plater.kr/web

function App() {
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userID);
  const isFirstInfo = useSelector((state) => state.isFirstInfo);

  // 'vh' 자동 조정을 위한 기능(1)
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // (팝업) 모바일 사용 권유
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
  }, [navigater, userID])

  // Kakao AD 승인을 위한 Component
  function KakaoAD() {
    useEffect(() => {
      let ins = document.createElement('ins');
      let scr = document.createElement('script');
      ins.className = 'kakao_ad_area';
      ins.style = "display:none; width:100%;";
      scr.async = 'true';
      scr.type = "text/javascript";
      scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
      ins.setAttribute('data-ad-width', '320');
      ins.setAttribute('data-ad-height', '100');
      ins.setAttribute('data-ad-unit', 'DAN-wwtMTOs6oLrop9iK');
      document.querySelector('.adfit').appendChild(ins);
      document.querySelector('.adfit').appendChild(scr);
    }, []);

    return (
      <React.Fragment>
        <div className="adfit" style={{ width: '100%', position: 'absolute', bottom: '-1%', left: '0%' }}></div>
      </React.Fragment>
    )
  }

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
      <KakaoAD></KakaoAD>
      <Routes>
        <Route path="/web" element={<Main />}></Route>
        <Route path="/web/*" element={<Main />}></Route>
        <Route path="/web/login" element={<Login />}></Route>
        <Route path="/web/redirect" element={<Redirect />}></Route>
        <Route path="/web/redirect2" element={<Redirect2 />}></Route>
        <Route path="/web/send" element={<Send />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
