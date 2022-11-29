import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { Adsense } from '@ctrl/react-adsense';
// import Slider from "react-slick";
import './App.css';
import Login from './components/Login';
import Redirect from './components/Redirect';


function Main() {

  const dispatch = useDispatch();
  const checkStory = useSelector((state) => state.checkStory);

  useEffect(() => {
    const cookieData = document.cookie.split(';');
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].indexOf('planetter') > -1) {
      } else {
        dispatch({ type: 'CHANGE_CHECKSTORY', data: !checkStory });
      } break;
    };
  }, []);

  return (
    <div className='main_background'>
      {/* <ModalStory></ModalStory>
      <Menu></Menu>
      <NameOfPlanet></NameOfPlanet> */}
      <h1 className='loging'><NavLink end to="/login"></NavLink></h1>
    </div>
  );
};


function App() {

  const navigater = useNavigate();
  const userID = useSelector((state) => state.userID);

  useEffect(() => {
    console.log(userID);
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
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        {/* <Route path="/redirect2" element={<Redirect2 />}></Route> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
