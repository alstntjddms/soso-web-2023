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

  return (
    <div className='main_background'>
      <ModalStory></ModalStory>
      <Menu></Menu>
      <InnerPage></InnerPage>
    </div>
  );
};

export default Main;