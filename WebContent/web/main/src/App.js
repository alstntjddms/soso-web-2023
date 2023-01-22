import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Redirect from './components/Redirect';
import Redirect2 from './components/Redirect2';
import Send from './components/Send';

function App() {
  const navigater = useNavigate();
  const userID = useSelector((state) => state.userID);

  console.log(userID);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  useEffect(() => {
    // resize
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    // Check user device.
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {
      alert("모바일 환경에 최적화 되어 있습니다.");
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
