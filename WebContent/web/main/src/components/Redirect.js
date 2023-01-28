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

    // function requestToken() {
    //     const body = {
    //         grant_type: "authorization_code",
    //         client_id: process.env.REACT_APP_REST_API_KEY,
    //         redirect_uri: "",
    //         code: name
    //     };
    //     const queryStringBody = Object.keys(body)
    //         .map(k => encodeURIComponent(k) + "=" + encodeURI(body[k]))
    //         .join("&");
    //     fetch("https://kauth.kakao.com/oauth/token", {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //         },
    //         body: queryStringBody
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             console.log(data.access_token);
    //             usertoken = data.access_token;
    //         });
    // };

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
            fetch('https://plater.kr/api/kakao', {
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
                    console.log('암호화된 ID: ' + data);
                    fetch('https://plater.kr/api/member', {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                        },
                        body: data
                    })
                        .then(plus_res => plus_res.json())
                        .then((plus_data) => {
                            console.log('비암호화된 ID: ' + plus_data);
                            dispatch({ type: 'CHANGE_USERID', data: plus_data });
                            navigater('/main');
                        })
                        .catch((plus_error) => {
                            console.log('비암호화된 ID 오류: ' + plus_error);
                            alert('서버가 불안정 하여 비암호화된 사용자 ID를 받아오지 못했습니다.');
                            dispatch({ type: 'CHANGE_USERID', data: null });
                            navigater('/login');
                        })
                })
                .catch((error) => {
                    console.log('암호화된 ID 오류: ' + error);
                    alert('서버가 불안정 하여 로그인에 실패했습니다.');
                    dispatch({ type: 'CHANGE_USERID', data: null });
                    navigater('/login');
                });
        }, 2000);
    }, [name, nameErro, navigater, dispatch]);

    return (
        <React.Fragment>
            <div className='redirect_outContainer'>
                <div className='redirect_gif'></div>
                <h3 className='redirect_h3'>로그인 중입니다...</h3>
                <h4 className='redirect_h4'>[리빙포인트] 달에는 토끼가 떡을 만들고 있다.</h4>
            </div>
        </React.Fragment>
    );
};

export default Redirect;