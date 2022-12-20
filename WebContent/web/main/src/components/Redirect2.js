import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './Redirect2.css';

function Redirect2() {
    const navigater = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'CHANGE_USERID', data: null });
            navigater('/main');
        }, 2500);
    }, [navigater, dispatch]);

    return (
        <div className='redirect2_outContainer'>
            {/* <img alt='redirect2_img' className='redirect_img' src='https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif'></img> */}
            <div className='redirect2_gif'></div>
            <h3 className='redirect2_h3'>로그아웃 중입니다...</h3>
            <h4 className='redirect2_h4'>[리빙포인트] 음식이 싱거울때는 소금을 넣으면 좋다.</h4>
        </div>
    );
};

export default Redirect2;