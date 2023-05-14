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

    // 공유 가능 사용자 아이디 발급 기능
    function RequestShareUserID(userID) {
        fetch(`${process.env.REACT_APP_SHARE_USERID}${userID}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((data) => {
                dispatch({ type: 'CHANGE_SHAREUSERID', data: String(data) });
            })
            .catch((error) => {
                alert('공유 가능한 사용자 주소를 정상적으로 받아오지 못했습니다. 공유 버튼을 다시 눌러주세요.');
            });
    };

    // 사용자 동의 항목 요청 기능
    function RequestUserMSG(userId) {
        fetch(`${process.env.REACT_APP_USER_MSG}${userId}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((data) => {
                dispatch({ type: 'CHANGE_AGREEMENT', data: data });
                RequestShareUserID(userId);
            })
            .catch((error) => {
                alert('정상적으로 사용자 동의 항목 정보를 응답 받지 못했습니다. 다시 로그인 해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/web/login');
            });
    };

    // 받은 편지 배열 요청 기능
    function RequestLetterArray(userId) {
        fetch(`${process.env.REACT_APP_LETTER_ARRAY}${userId}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((data) => {
                if (data.length > 37) {
                    for (let i = 0; data.length - 36; i++) {
                        data.pop();
                    };
                    dispatch({ type: 'CHANGE_LETTERDATA', data: data });
                } else {
                    dispatch({ type: 'CHANGE_LETTERDATA', data: data });
                };
                RequestUserMSG(userId);
            })
            .catch((error) => {
                alert('정상적으로 사용자 편지 데이터를 응답 받지 못했습니다. 다시 로그인 해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/web/login');
            });
    };

    // 사용자 정보 요청 기능
    function RequestUserData(userId) {
        fetch(`${process.env.REACT_APP_USER_DATA}${userId}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((data) => {
                dispatch({ type: 'CHANGE_USERNICKNAME', data: String(data.userNickName) });
                dispatch({ type: 'CHANGE_OPENDATE', data: Number(data.userOpenDate) });                
                RequestLetterArray(userId);
            })
            .catch((error) => {
                alert('정상적으로 사용자 데이터를 응답 받지 못했습니다. 다시 로그인 해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/web/login');
            });
    };

    // (랜더링 직후) 사용자 로그인 기능
    useEffect(() => {
        setTimeout(() => {
            if (nameErro === 'User denied access') {
                alert('로그인에 실패하였습니다.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/web/login');
            };
            const code = { code: name };
            const queryStringBody = Object.keys(code)
                .map(k => encodeURIComponent(k) + "=" + encodeURI(code[k]))
                .join("&");
            fetch(`${process.env.REACT_APP_KAKAO_LOGIN}`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryStringBody
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    };
                    return res.json();
                })
                .then((data) => {
                    fetch(`${process.env.REACT_APP_USERID}`, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => {
                            if (!res.ok) {
                                throw new Error();
                            };
                            return res.json();
                        })
                        .then((data) => {
                            dispatch({ type: 'CHANGE_USERID', data: data });
                            RequestUserData(data);
                            navigater('/web/main');
                        })
                        .catch((error) => {
                            alert('서버가 불안정 하여 사용자 아이디를 받아오지 못했습니다.');
                            dispatch({ type: 'CHANGE_USERID', data: null });
                            navigater('/web/login');
                        });
                })
                .catch((error) => {
                    alert('서버가 불안정 하여 로그인에 실패했습니다.');
                    dispatch({ type: 'CHANGE_USERID', data: null });
                    navigater('/web/login');
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