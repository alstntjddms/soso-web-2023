import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Main.css';
import Menu from './Menu';
import ModalStory from './ModalStory';

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