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
                            <p>제1조 목적</p>
                            <p>본 약관은 소소한 프로젝트(이하 ‘제공자’)가 제공하는 서비스(회원이 PC, 모바일 등의 각종 디지털 기기 또는 프로그램을 통하여 이용할 수 있도록 제공자가 제공하는 모든 서비스 의미)를 이용하는데 필요한 제공자와 회원 간의 절차 및 이용조건, 권리, 의무 및 책임사항 등 기타 필요한 사항들을 규정함을 목적으로 합니다.</p>
                            <p>제2조 약관의 명시 및 효력</p>
                            <article>
                                <p>1. 본 약관의 내용은 제공자가 제공하는 모든 서비스에 게시하여 공시합니다.</p>
                                <p>2. 제공자는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 제공자는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여 시행일 최소 7일 이전부터 시행일 후 상당한 기간 동안 공지하고, 기존 회원에게는 변경된 약관과 적용일자를 공식 홈페이지, 서비스 내 알림 등 합리적이고 수용 가능한 방법으로 변경사항을 공지 또는 통지합니다.</p>
                                <p>3. 회원은 변경된 약관에 동의하지 않을 권리가 있으며, 시행일로부터 7일 이내 변경된 약관에 대해 전자메일, 공식 홈페이지 문의 등 합리적인 방법으로 거절의 의사를 표시하지 않았을 때는 본 약관에 동의한 것으로 간주합니다.</p>
                            </article>
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
                            <p>〈소소한 프로젝트〉('www.plater.kr'이하 'PL@TER')는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
                            <p>○ 이 개인정보처리방침은 2023년 4월 1부터 적용됩니다.</p>
                            <p>제1조(개인정보의 처리 목적)</p>
                            <article>
                                <p>〈소소한 프로젝트〉('www.plater.kr'이하 'PL@TER')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.</p>
                                <p>① 서비스 회원가입 및 관리</p>
                                <p>회원제 서비스 제공에 따른 본인 식별·인증, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.</p>
                                <p>② 재화 또는 서비스 제공</p>
                                <p>서비스 제공을 목적으로 개인정보를 처리합니다.</p>
                            </article>
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