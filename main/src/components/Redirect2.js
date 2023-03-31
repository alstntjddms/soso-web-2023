import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './Redirect2.css';

function Redirect2() {
    const navigater = useNavigate();
    const dispatch = useDispatch();

    // 서버로 log 정보 보내는 기능(랜더링 직후)
    useEffect(() => {
        fetch('https://plater.kr/api/request/log?/web/logout', {
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
                console.log(error);
            });
        setTimeout(() => {
            dispatch({ type: 'CHANGE_USERID', data: null });
            navigater('/main');
        }, 2500);
    }, [navigater, dispatch]);

    return (
        <React.Fragment>
            <div className='redirect2_outContainer'>
                <section className='section_shootingStar'>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                </section>
                <div className='redirect2_gif'></div>
                <h3 className='redirect2_h3'>로그아웃 중입니다...</h3>
                <h4 className='redirect2_h4'>[리빙포인트] 음식이 싱거울때는 소금을 넣으면 좋다.</h4>
            </div>
        </React.Fragment>
    );
};

export default Redirect2;