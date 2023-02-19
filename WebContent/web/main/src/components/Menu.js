import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import './Menu.css';

function Menu() {
    const [render, setRender] = useState(0);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    const isMenu = useSelector((state) => state.isMenu);
    const isYesAgreement = useSelector((state) => state.isYesAgreement);
    const isNoAgreement = useSelector((state) => state.isNoAgreement);
    const isInner = useSelector((state) => state.isInner);
    const isMypage = useSelector((state) => state.isMypage);
    const isPlater = useSelector((state) => state.isPlater);
    const isHowto = useSelector((state) => state.isHowto);
    const isMembershipWithdrawal = useSelector((state) => state.isMembershipWithdrawal);
    const [isPopUpLogOut, setIsPopUpLogOut] = useState(false);

    const settings = {
        draggable: true,
        swipe: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1250,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // function singOut() {
    //     fetch("https://kapi.kakao.com/v1/user/unlink", {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${usertoken}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //         });
    // };

    function YesAgreement() {
        return (
            <React.Fragment>
                <div className={isYesAgreement ? "isYesAgreement" : "isYesAgreement_fade"}>
                    <div className='isYesAgreement_outContainer'>
                        <p className='isYesAgreement_title'>카카오톡 알림을</p>
                        <p className='isYesAgreement_title'>받으시겠습니까?</p>
                        <p className='isYesAgreement_p'>행성 만료, 공지사항 등을</p>
                        <p className='isYesAgreement_p'>카카오톡 '나와의 채팅'으로 받을 수 있습니다.</p>
                        <div className='isYesAgreement_innerBox'>
                            <div className='isYesAgreement_button_signOut' onClick={() => {
                                alert('API 요청 필요/동의 후 다시 로그인 해주세요.');
                                agreement(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT3);
                                dispatch({ type: 'CHANGE_AGREEMENT', data: !userData.agreement });
                                setRender(render + 1);
                                dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                            }}>동의하기</div>
                            <div className='isYesAgreement_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                            }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };

    function NoAgreement() {
        return (
            <React.Fragment>
                <div className={isNoAgreement ? "isNoAgreement" : "isNoAgreement_fade"}>
                    <div className='isNoAgreement_outContainer'>
                        <p className='isNoAgreement_title'>카카오톡 알림</p>
                        <p className='isNoAgreement_title'>동의를 해제하시겠습니까?</p>
                        <p className='isNoAgreement_p'>동의 해제 시</p>
                        <p className='isNoAgreement_p'>행성 만료, 공지사항 등을 받아 볼 수 없습니다</p>
                        <div className='isNoAgreement_innerBox'>
                            <div className='isNoAgreement_button_signOut' onClick={() => {
                                alert('API 요청 필요');
                                dispatch({ type: 'CHANGE_AGREEMENT', data: !userData.agreement });
                                setRender(render - 1);
                                dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                            }}>동의 해제하기</div>
                            <div className='isNoAgreement_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                            }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function MembershipWithdrawal() {
        return (
            <React.Fragment>
                <div className={isMembershipWithdrawal ? "membershipWithdrawal" : "membershipWithdrawal_fade"}>
                    <div className='membershipWithdrawal_outContainer'>
                        <p className='membershipWithdrawal_title'>서비스를 탈퇴..</p>
                        <p className='membershipWithdrawal_title'>하시겠습니까?</p>
                        <p className='membershipWithdrawal_p'>탈퇴 시 그동안 저장된 데이터는</p>
                        <p className='membershipWithdrawal_p'>모두 삭제되며 복구할 수 없어요.</p>
                        <div className='membershipWithdrawal_innerBox'>
                            <div className='membershipWithdrawal_button_signOut' onClick={() => { alert('아직 서비스 준비 중입니다.') }}>탈퇴하기</div>
                            <div className='membershipWithdrawal_button_cancel' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PopUPLogOut() {
        return (
            <React.Fragment>
                <div className={isPopUpLogOut ? "isPopUpLogOut" : "isPopUpLogOut_fade"}>
                    <div className='isPopUpLogOut_outContainer'>
                        <p className='isPopUpLogOut_title'>로그아웃..</p>
                        <p className='isPopUpLogOut_title'>하시겠습니까?</p>
                        <p className='isPopUpLogOut_p'>로그아웃 해도 남은 시간은 지나</p>
                        <p className='isPopUpLogOut_p'>갑니다. 다녀오세요!</p>
                        <div className='isPopUpLogOut_innerBox'>
                            <div className='isPopUpLogOut_button_signOut' onClick={() => { logoutWithKakao(process.env.REACT_APP_REST_API_KEY, process.env.REACT_APP_REDIRECT2); }}>로그아웃</div>
                            <div className='isPopUpLogOut_button_cancel' onClick={() => { setIsPopUpLogOut(!isPopUpLogOut); }}>취소</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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

    function agreement(key, url) {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${url}&response_type=code&scope=talk_message`;
    };

    return (
        <React.Fragment>
            <div className={isMenu ? "menu_wrap" : ""}>
                <div className={isMenu ? "menu_wrap2" : ""} onClick={toggleMenu}></div>
                <MembershipWithdrawal></MembershipWithdrawal>
                <PopUPLogOut></PopUPLogOut>
                <div className="menu_outContainer">
                    <div className={`menu_img${isMenu ? "_active" : ""}${isMypage || isPlater || isHowto ? "_plus" : ""}`} onClick={toggleMenu}></div>
                </div>
                <div className={`menu_bar${isMenu ? "_active" : ""}${isInner ? "_wide" : ""}`}>
                    <div className={isInner ? "menu_bar_inner_true" : "menu_bar_inner"}>
                        <span className='menu_bar_icon_1'></span><p onClick={toggleMypage}>마이페이지</p>
                        <span className='menu_bar_icon_2'></span><p onClick={togglePlanetter}>Pl@ter</p>
                        <span className='menu_bar_icon_3'></span><p onClick={toggleHowto} >이용 방법</p>
                        <span className='menu_bar_icon_4'></span>
                        <a className='go_to_notion' href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}>
                            <p>Contact Us</p></a>
                    </div>
                    <div className={isMypage ? "menu_bar_mypage" : "menu_bar_mypage_true"}>
                        <YesAgreement></YesAgreement>
                        <NoAgreement></NoAgreement>
                        <div className='menu_bar_mypage_box1'>
                            <p className='menu_bar_mypage_box1_p'>안녕하세요!</p>
                            <div></div>
                            <p className='menu_bar_mypage_box1_p'>{userData.nickname} 님</p>
                            <div className='menu_bar_mypage_box1_innerBox'>
                                <div className='menu_bar_mypage_box1_logout' onClick={() => { setIsPopUpLogOut(!isPopUpLogOut); }}>로그아웃</div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line1'></div>
                        <div className='menu_bar_mypage_box2'>
                            <p className='menu_bar_mypage_box2_p'>카카오톡 알림</p>
                            <div className='menu_bar_mypage_box2_innerBox'>
                                <div className='menu_bar_mypage_box2_notice' onClick={() => {
                                    if (userData.agreement === true) {
                                        dispatch({ type: 'CHANGE_ISNOAGREEMENT', data: !isNoAgreement });
                                    } else {
                                        dispatch({ type: 'CHANGE_ISYESAGREEMENT', data: !isYesAgreement });
                                    };
                                }}><div className={userData.agreement ? 'menu_bar_mypage_box2_notice_inner_active' : 'menu_bar_mypage_box2_notice_inner'}></div></div>
                            </div>
                        </div>
                        <div className='menu_bar_mypage_line2'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => { dispatch({ type: 'CHANGE_ISMEMBERSHIPWITHDRAWAL', data: !isMembershipWithdrawal }); }}>회원탈퇴</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p'>서비스 이용 약관</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p'>개인정보 처리 방침</p>
                        <div className='menu_bar_mypage_line'></div>
                        <a className='go_to_notion' href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}><p style={{ marginTop: '-1.8rem' }} className='menu_bar_mypage_box_p'>문의하기</p></a>
                    </div>
                    <div className={isPlater ? "menu_bar_planetter" : "menu_bar_planetter_true"}>
                        <article className='menu_plater_page'>
                            <h5>삐삐-</h5>
                            <p>지구와 교신 중…</p>
                            <div className='menu_plater_img_outContainer'>
                                <Slider {...settings}>
                                    <div className='menu_plater_img_outContainer'>
                                        <img className='menu_plater_img' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main.jpg?raw=true'></img>
                                    </div>
                                </Slider>
                            </div>
                            <h5>광활한 인터넷 우주 속</h5>
                            <h5>감성 충만한 편지를 보내고 싶다면,</h5>
                            <h5>PL@TER</h5>
                            <div className='menu_plater_img_outContainer'>
                                <img className='menu_plater_img' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main_2.gif?raw=true'></img>
                            </div>
                            <p>도착까지 D-10</p>
                            <h5>모든 행성의 편지가 도착하기까지는</h5>
                            <h5>10일의 시간이 소요돼요.</h5>
                            <h5>링크를 복사해 편지를 모으거나 기대하며</h5>
                            <h5>기다리다 보면 멋진 편지가 도착할 거예요!</h5>
                            <div className='menu_plater_img_outContainer'>
                                <img className='menu_plater_img' alt='main_img' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/detail/pl@ter_main_3.gif?raw=true'></img>
                            </div>
                            <p>세상에 단 하나밖에 없는 편지</p>
                            <h5>다양한 폰트부터 편지지, 스티커를 통해</h5>
                            <h5>당신만의 멋진 편지를 만들어보세요!</h5>
                            <div className='menu_palter_bottom_pading'></div>
                            <p>자세한 이용 방법이</p>
                            <p>궁금하다면 이쪽으로!</p>
                            <a style={{ textDecoration: 'none' }} href='https://elfin-shelf-a6a.notion.site/PL-TER-83d6a7213845476f84c780d863591e90' rel="noopener noreferrer" target={'_blank'}><div className='menu_palter_bottom_button'>
                                이용방법 알아보기</div></a>
                            <div className='menu_palter_bottom_pading_2'></div>
                            <br></br>
                        </article>
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