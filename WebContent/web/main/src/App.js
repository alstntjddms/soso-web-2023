import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Redirect from './components/Redirect';
import Redirect2 from './components/Redirect2';

function App() {

  const navigater = useNavigate();
  const userID = useSelector((state) => state.userID);
  const userData = useSelector((state) => state.userData);

  console.log(userID);

  useEffect(() => {
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
        <Route path="/redirect2" element={<Redirect2 />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
