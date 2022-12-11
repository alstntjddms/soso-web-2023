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

    useEffect(() => {
        setTimeout(() => {
            if (nameErro === 'User denied access') {
                alert('로그인에 실패하였습니다.');
                navigater('/login');
            };
            const code = { code: name };
            console.log(code);
            const queryStringBody = Object.keys(code)
                .map(k => encodeURIComponent(k) + "=" + encodeURI(code[k]))
                .join("&");
            fetch("https://plater.kr/api/kakao", {
                method: "POST",
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
                    console.log(data);
                    dispatch({ type: 'CHANGE_USERID', data: data });
                    // navigater('/main');
                })
                .catch((error) => {
                    console.log(error);
                    alert('서버가 불안정 하여 로그인에 실패했습니다.');
                    // navigater('/login');
                });
        }, 2000);
    }, [name, nameErro, navigater, dispatch]);

    return (
        <div className='redirect_outContainer'>
            <img alt='redirect_img' className='redirect_img' src='https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif'></img>
            <h3 className='redirect_h3'>로그인 중입니다</h3>
        </div>
    );
};

export default Redirect;