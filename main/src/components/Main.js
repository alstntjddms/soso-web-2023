import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Main.css';
import ModalStory from './ModalStory';
import Menu from './Menu';
import InnerPage from './InnerPage';

function Main() {
  const [render1, setRender1] = useState(0);
  const dispatch = useDispatch();
  const isStory = useSelector((state) => state.isStory);

  useEffect(() => {
    const cookieData = document.cookie.split(';');
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].indexOf('plater') > -1) {
        dispatch({ type: 'CHANGE_ISSTORY', data: !isStory });
      } else break;
    };
  }, [dispatch]);

  // Delete Cookie
  function delCookie() {
    alert('사용자의 쿠키 중 plater를 삭제했습니다.');
    const expires = new Date();
    expires.setDate(expires.getDate() - 1);
    const expiresDate = expires.toUTCString();
    let setCookie = '';
    setCookie += 'plater=190301;';
    setCookie += 'Expires=' + expiresDate;
    document.cookie = setCookie;
  };

  // Setting Time
  function settingTime() {
    alert('사용자의 openDate를 11일 전으로 설정했습니다.');
    const now = new Date();
    now.setDate(now.getDate() - 11);
    dispatch({ type: 'CHANGE_OPENDATE', data: Number(now.getTime()) });
    setRender1(render1 + 1);
  };

  return (
    <div className='main_background'>
      <ModalStory></ModalStory>
      <Menu></Menu>
      <InnerPage></InnerPage>
      <NavLink end to="/send?userID=4MSJSM2BZXWpVLnmzslVeqko7YvwMSJSM3DMSJSM3D" onClick={() => {
      }}><img style={{ width: "10%", position: "absolute", top: "50%", left: "85%" }} alt='login' src='https://cdn-icons-png.flaticon.com/512/9072/9072392.png'></img></NavLink>
      <img onClick={settingTime} style={{ width: "10%", position: "absolute", top: "60%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/896/896266.png'></img>
      <img onClick={delCookie} style={{ width: "10%", position: "absolute", top: "80%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/1330/1330387.png'></img>
      <NavLink end to="/login" onClick={() => {
        dispatch({ type: 'CHANGE_USERID', data: null });
      }}><img style={{ width: "10%", position: "absolute", top: "70%", left: "85%" }} alt='login' src='https://cdn-icons-png.flaticon.com/512/295/295128.png'></img></NavLink>
    </div>
  );
};

export default Main;