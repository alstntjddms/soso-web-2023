import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';
import Menu from './Menu';
import ModalStory from './ModalStory';

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
  }, [dispatch]);

  return (
    <div className='main_background'>
       <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      <ModalStory></ModalStory>
      <Menu></Menu>
      {/* <InnerPage></InnerPage> */}
    </div>
  );
};

export default Main;