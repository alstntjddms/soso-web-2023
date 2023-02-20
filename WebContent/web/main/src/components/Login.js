import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Login.css';

function Login() {
    const navigater = useNavigate();
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.userID);
    const isConditions = useSelector((state) => state.isConditions);
    const isIndividual = useSelector((state) => state.isIndividual);

    useEffect(() => {
        if (userID !== null) {
            navigater('/main');
        };
    }, [navigater, userID]);

    function loginWithKakao(key, url) {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${key}&redirect_uri=${url}`;
    };

    function toggleConditions() {
        dispatch({ type: 'CHANGE_ISCONDITIONS', data: !isConditions });
    };

    function toggleIndividual() {
        dispatch({ type: 'CHANGE_ISINDIVIDUAL', data: !isIndividual });
    };

    function Conditions() {
        return (
            <React.Fragment>
                <div className={isConditions ? "login_conditions_wrap" : "login_conditions_wrap_fade"}>
                    <div className='login_conditions_outContainer'>
                        <div className='login_conditions_img' onClick={toggleConditions}></div>
                        <p className='login_conditions_title'>이용약관</p>
                        <article className='login_conditions_article'>
                            이용약관
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function Individual() {
        return (
            <React.Fragment>
                <div className={isIndividual ? "login_conditions_wrap" : "login_conditions_wrap_fade"}>
                    <div className='login_conditions_outContainer'>
                        <div className='login_conditions_img' onClick={toggleIndividual}></div>
                        <p className='login_conditions_title'>개인정보처리방침</p>
                        <article className='login_conditions_article'>
                            개인정보처리방침
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Conditions></Conditions>
            <Individual></Individual>
            <div className='login_wrap'>
                <div className='login_outContainer'>
                    <section className='section_shootingStar'>
                        <span className='shootingStar'></span>
                        <span className='shootingStar'></span>
                        <span className='shootingStar'></span>
                        <span className='shootingStar'></span>
                    </section>
                    <div className='login_innerContainer'>
                        <p className='login_title'>광활한 인터넷 우주 속</p>
                        <p className='login_title'>편지를 보내고 싶다면,</p>
                        <img alt='login_img' className='login_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/logo/logo.png?raw=true'></img>
                        <br></br>
                        <img alt='login_img_title' className='login_img_title' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/logo/logo_title.png?raw=true'></img>
                        <br></br>
                        <img alt='login_kakao' className='login_kakao' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/login/kakao_login_medium_narrow.png?raw=true' onClick={() => { loginWithKakao(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT) }}></img>
                        <div className='login_text'>
                            <span onClick={toggleConditions}>이용약관</span><span>│</span><span onClick={toggleIndividual}>개인정보처리방침</span><span>│</span><a className='go_to_notion_white' href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' target={'_blank'}><span>ContactUs</span></a>
                        </div>
                        <p className='login_name'>©소소한프로젝트</p>
                    </div>
                    <div className='login_img_bottom'></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;