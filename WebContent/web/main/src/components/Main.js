import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Main.css';
import ModalStory from './ModalStory';
import Menu from './Menu';
import InnerPage from './InnerPage';

function Main() {

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
    const expires = new Date();
    expires.setDate(expires.getDate() - 1);
    const expiresDate = expires.toUTCString();
    let setCookie = '';
    setCookie += 'plater=190301;';
    setCookie += 'Expires=' + expiresDate;
    document.cookie = setCookie;
  };

  return (
    <div className='main_background'>
      <section className='section_shootingStar'>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
        <span className='shootingStar'></span>
      </section>
      <ModalStory></ModalStory>
      <Menu></Menu>
      <InnerPage></InnerPage>
      <img onClick={delCookie} style={{ width: "10%", position: "absolute", top: "80%", left: "85%" }} alt='cookie' src='https://cdn-icons-png.flaticon.com/512/1330/1330387.png'></img>
      <NavLink end to="/login" onClick={() => {
        dispatch({ type: 'CHANGE_USERID', data: null });
      }}><img style={{ width: "10%", position: "absolute", top: "70%", left: "85%" }} alt='login' src='https://cdn-icons-png.flaticon.com/512/295/295128.png'></img></NavLink>
    </div>
  );
};

export default Main;