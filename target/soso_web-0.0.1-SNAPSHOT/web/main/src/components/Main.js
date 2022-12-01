import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';
import Menu from './Menu';

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
      {/* <ModalStory></ModalStory> */}
      <Menu></Menu>
      {/* <NameOfPlanet></NameOfPlanet> */}
      <h1 className='loging'><NavLink end to="/login"></NavLink></h1>
    </div>
  );
};

export default Main;