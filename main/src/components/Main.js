import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
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
      navigater('/web/login');
    };
  }, [dispatch]);

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
      <img onClick={settingTime} style={{ width: "10%", position: "absolute", bottom: "30%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/896/896266.png'></img>
    </div>
  );
};

export default Main;