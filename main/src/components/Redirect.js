import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './Redirect.css';

function Redirect() {
    const navigater = useNavigate();
    const dispatch = useDispatch();
    const urlParams = new URL(window.location.href).searchParams;
    const name = urlParams.get('code');
    const urlParamsErro = new URL(window.location.href).searchParams;
    const nameErro = urlParamsErro.get('error_description');

    // console.log 삭제 필요.

    // 받은 편지 배열 요청 기능
    function RequestLetterArray(userId) {
        fetch('https://plater.kr/api/letter/userid/' + userId, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'CHANGE_LETTERDATA', data: data });
            })
            .catch((error) => {
                console.log(error);
                alert('정상적으로 사용자 편지 데이터를 응답 받지 못했습니다. 다시 로그인 해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/login');
            });
    };

    // 사용자 정보 요청 기능
    function RequestUserData(userId) {
        fetch('https://plater.kr/api/member/' + userId, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'CHANGE_USERNICKNAME', data: String(data.userNickName) });
                dispatch({ type: 'CHANGE_OPENDATE', data: Number(data.userOpenDate) });
                RequestLetterArray(userId);
            })
            .catch((userDate_error) => {
                console.log(userDate_error);
                alert('정상적으로 사용자 데이터를 응답 받지 못했습니다. 다시 로그인 해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/login');
            });
    };

    // (랜더링 직후) 사용자 로그인 기능
    useEffect(() => {
        setTimeout(() => {
            if (nameErro === 'User denied access') {
                alert('로그인에 실패하였습니다.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/login');
            };
            const code = { code: name };
            console.log(code);
            const queryStringBody = Object.keys(code)
                .map(k => encodeURIComponent(k) + "=" + encodeURI(code[k]))
                .join("&");
            fetch('https://plater.kr/api/kakao/', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryStringBody
            })
                .then(res => res.json())
                .then((data) => {
                    fetch('https://plater.kr/api/member/', {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then((data) => {
                            // 
                            console.log(data);
                            // 
                            dispatch({ type: 'CHANGE_USERID', data: data });
                            RequestUserData(data);
                            navigater('/main');
                        })
                        .catch((error) => {
                            console.log(error);
                            alert('서버가 불안정 하여 사용자 아이디를 받아오지 못했습니다.');
                            dispatch({ type: 'CHANGE_USERID', data: null });
                            navigater('/login');
                        })
                })
                .catch((error) => {
                    console.log(error);
                    alert('서버가 불안정 하여 로그인에 실패했습니다.');
                    dispatch({ type: 'CHANGE_USERID', data: null });
                    navigater('/login');
                });
        }, 500);
    }, []);

    return (
        <React.Fragment>
            <div className='redirect_outContainer'>
                <section className='section_shootingStar'>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                </section>
                <div className='redirect_gif'></div>
                <h3 className='redirect_h3'>로그인 중입니다...</h3>
                <h4 className='redirect_h4'>[리빙포인트] 달에는 토끼가 떡을 만들고 있다.</h4>
            </div>
        </React.Fragment>
    );
};

export default Redirect;