import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import './Main.css';
import ModalStory from './ModalStory';
import Menu from './Menu';
import InnerPage from './InnerPage';

function Main() {
  const [render1, setRender1] = useState(0);
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const isStory = useSelector((state) => state.isStory);
  const userID = useSelector((state) => state.userID);
  // 
  const ShareUserID = useSelector((state) => state.ShareUserID);
  // 
  // (랜더링 직후) 사용자 쿠키 확인 기능 + 서버로 log 정보 보내는 기능
  useEffect(() => {
    const cookieData = document.cookie.split(';');
    for (let i = 0; i < cookieData.length; i++) {
      if (cookieData[i].indexOf('pl@ter') > -1) {
        dispatch({ type: 'CHANGE_ISSTORY', data: !isStory });
      } else break;
    };
    fetch(`${process.env.REACT_APP_REGISTER_LOG}main`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
      })
      .catch((error) => {
      });
    if (userID === null) {
      navigater('/login');
    };
  }, [dispatch]);

  // 쿠키 삭제 기능
  function delCookie() {
    alert('사용자의 쿠키 중 pl@ter를 삭제했습니다.');
    const expires = new Date();
    expires.setDate(expires.getDate() - 1);
    const expiresDate = expires.toUTCString();
    let setCookie = '';
    setCookie += 'pl@ter=190301;';
    setCookie += 'Expires=' + expiresDate;
    document.cookie = setCookie;
  };

  // 편지 읽을 수 있도록 시간 조정 기능
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
      <NavLink end to={"/send?userID=" + ShareUserID} onClick={() => {
      }}><img style={{ width: "10%", position: "absolute", top: "50%", left: "85%" }} alt='login' src='https://cdn-icons-png.flaticon.com/512/9072/9072392.png'></img></NavLink>
      <img onClick={settingTime} style={{ width: "10%", position: "absolute", top: "60%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/896/896266.png'></img>
      <img onClick={delCookie} style={{ width: "10%", position: "absolute", top: "80%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/1330/1330387.png'></img>
    </div>
  );
};

export default Main;