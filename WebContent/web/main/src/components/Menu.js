import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Menu.css';

function Menu() {
    const dispatch = useDispatch();
    const [speck, setSpeck] = useState(0);
    const userData = useSelector((state) => state.userData);
    const isMenu = useSelector((state) => state.isMenu);
    const isInner = useSelector((state) => state.isInner);
    const isMypage = useSelector((state) => state.isMypage);
    const isPlater = useSelector((state) => state.isPlater);
    const isHowto = useSelector((state) => state.isHowto);
    const isMembershipWithdrawal = useSelector((state) => state.isMembershipWithdrawal);

    function MembershipWithdrawal() {
        return (
            <div className={isMembershipWithdrawal ? "membershipWithdrawal" : "membershipWithdrawal_fade"}>
                <div className='membershipWithdrawal_outContainer'>
                    <p className='membershipWithdrawal_title'>서비스를</p>
                    <p className='membershipWithdrawal_title'>탈퇴하시겠습니까?</p>
                    <p className='membershipWithdrawal_p'>탈퇴 시 그동안 저장된 데이터는 모두 삭제됩니다.</p>
                    <span className='membershipWithdrawal_HLine'></span>
                    <span className='membershipWithdrawal_VLine'></span>
                    <div className='membershipWithdrawal_innerBox'>
                        <div className='membershipWithdrawal_button' onClick={() => { alert('아직 서비스 준비 중입니다.') }}>탈퇴</div>
                        <div className='membershipWithdrawal_button' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>취소</div>
                    </div>
                </div>
            </div>
        );
    };

    function toggleMenu() {
        if (isInner === false) {
            dispatch({ type: 'CHANGE_ISMENU', data: !isMenu });
            dispatch({ type: 'CHANGE_ISINNER', data: false });
            dispatch({ type: 'CHANGE_ISMYPAGE', data: false });
            dispatch({ type: 'CHANGE_ISPLATER', data: false });
            dispatch({ type: 'CHANGE_ISHOWTO', data: false });
        } else if (isInner === true) {
            dispatch({ type: 'CHANGE_ISINNER', data: false });
            dispatch({ type: 'CHANGE_ISMYPAGE', data: false });
            dispatch({ type: 'CHANGE_ISPLATER', data: false });
            dispatch({ type: 'CHANGE_ISHOWTO', data: false });
        };
    };

    function toggleMypage() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISMYPAGE', data: !isMypage });
        // Speech Synthesis
        setTimeout(() => {
            if (speck === 0) {
                const speech = new SpeechSynthesisUtterance(userData.nickname + '님 안녕하세요.');
                window.speechSynthesis.speak(speech);
                setSpeck(speck + 1);
            };
        }, 500);
    };

    function togglePlanetter() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISPLATER', data: !isPlater });
    };

    function toggleHowto() {
        dispatch({ type: 'CHANGE_ISINNER', data: !isInner });
        dispatch({ type: 'CHANGE_ISHOWTO', data: !isHowto });
    };

    function logoutWithKakao(key, url) {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${key}&logout_redirect_uri=${url}`;
    };

    return (
        <React.Fragment>
            <div className={isMenu ? "menu_wrap" : ""}>
                <div className={isMenu ? "menu_wrap2" : ""} onClick={toggleMenu}></div>
                <MembershipWithdrawal></MembershipWithdrawal>
                <div className="menu_outContainer">
                    <div className={`menu_img${isMenu ? "_active" : ""}${isMypage || isPlater || isHowto ? "_plus" : ""}`} onClick={toggleMenu}></div>
                </div>
                <div className={`menu_bar${isMenu ? "_active" : ""}${isInner ? "_wide" : ""}`}>
                    <div className={isInner ? "menu_bar_inner_true" : "menu_bar_inner"}>
                        <p onClick={toggleMypage}>마이페이지</p>
                        <p onClick={togglePlanetter}>Pl@ter</p>
                        <p onClick={toggleHowto} >이용 방법</p>
                        <p>Contact Us</p>
                    </div>
                    <div className={isMypage ? "menu_bar_mypage" : "menu_bar_mypage_true"}>
                        <div className='menu_bar_mypage_box1'>
                            <p className='menu_bar_mypage_box1_p'>안녕하세요!</p>
                            <div></div>
                            <p className='menu_bar_mypage_box1_p'>{userData.nickname} 님</p>
                            <div className='menu_bar_mypage_box1_innerBox'>
                                <div className='menu_bar_mypage_box1_logout' onClick={() => { logoutWithKakao(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT2) }}>로그아웃</div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line1'></div>
                        <div className='menu_bar_mypage_box2'>
                            <p className='menu_bar_mypage_box2_p'>카카오톡 알림</p>
                            <div className='menu_bar_mypage_box2_innerBox'>
                                <div className='menu_bar_mypage_box2_notice' onClick={() => { alert('아직 서비스 준비 중입니다.') }}><div className='menu_bar_mypage_box2_notice_inner'></div></div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line2'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>회원탈퇴</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p'>서비스 이용 약관</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p'>개인정보 처리 방침</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p'>문의하기</p>
                    </div>
                    <div className={isPlater ? "menu_bar_planetter" : "menu_bar_planetter_true"}>
                        <p>Pl@ter</p>
                    </div>
                    <div className={isHowto ? "menu_bar_howto" : "menu_bar_howto_true"}>
                        <p>이용방법</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Menu;