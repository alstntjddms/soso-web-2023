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
    const isPopUpHowTo = useSelector((state) => state.isPopUpHowTo);
    const isPopUpInfo = useSelector((state) => state.isPopUpInfo);
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

    function PopUpHowTo() {
        return (
            <React.Fragment>
                <div className={isPopUpHowTo ? "isPopUpHowTo" : "isPopUpHowTo_fade"}>
                    <div className='isPopUpHowTo_outContainer'>
                        <div className='isPopUpHowTo_closed' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPHOWTO', data: !isPopUpHowTo });
                        }}></div>
                        <p className='isPopUpHowTo_title'>이용약관</p>
                        <article className='isPopUpHowTo_article'>
                            <p>제1조 목적</p>
                            <p>본 약관은 소소한 프로젝트(이하 ‘제공자’)가 제공하는 서비스(회원이 PC, 모바일 등의 각종 디지털 기기 또는 프로그램을 통하여 이용할 수 있도록 제공자가 제공하는 모든 서비스 의미)를 이용하는데 필요한 제공자와 회원 간의 절차 및 이용조건, 권리, 의무 및 책임사항 등 기타 필요한 사항들을 규정함을 목적으로 합니다.</p>
                            <p>제2조 약관의 명시 및 효력</p>
                            <article>
                                <p>1. 본 약관의 내용은 제공자가 제공하는 모든 서비스에 게시하여 공시합니다.</p>
                                <p>2. 제공자는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 제공자는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여 시행일 최소 7일 이전부터 시행일 후 상당한 기간 동안 공지하고, 기존 회원에게는 변경된 약관과 적용일자를 공식 홈페이지, 서비스 내 알림 등 합리적이고 수용 가능한 방법으로 변경사항을 공지 또는 통지합니다.</p>
                                <p>3. 회원은 변경된 약관에 동의하지 않을 권리가 있으며, 시행일로부터 7일 이내 변경된 약관에 대해 전자메일, 공식 홈페이지 문의 등 합리적인 방법으로 거절의 의사를 표시하지 않았을 때는 본 약관에 동의한 것으로 간주합니다.</p>
                            </article>
                            <p>제3조 약관 외 준칙</p>
                            <p>제공자는 본 이용약관 및 개별 서비스의 운영정책(이하 ‘운영정책’)을 정할 수 있으며, 본 약관에서 규정된 내용이 개별 서비스 약관에서 정한 운영정책과 충돌하는 경우 개별 서비스의 약관 규정을 우선하여 적용합니다. 본 약관에 규정되지 않은 사항에 대해서는 별도의 운영정책, 제공자의 공지, 이용안내, 상·관행, 관계법령에서 정한 바를 따릅니다.</p>
                            <p>제4조 서비스의 구분</p>
                            <article>
                                <p>1. 제공자가 회원에게 제공하는 무료 서비스, 유료 서비스, 개별 서비스 등 모든 서비스를 ‘서비스’라고 칭합니다.</p>
                                <p>2. 무료 서비스, 유료 서비스 등의 종류와 이용방법 등은 이 약관 및 제공자가 공지 또는 이용안내에서 별도로 정하는 바에 따릅니다.</p>
                            </article>
                            <p>제5조 이용계약의 성립</p>
                            <p>1. 제공자가 지정하는 타 서비스 계정(카카오 등)을 활용하여 본 서비스의 계정을 생성할 수 있습니다. 제공자는 가입신청자의 신청에 대하여 서비스 이용 승낙을 원칙으로 합니다. 이용 승낙을 통해 서비스를 자유롭게 이용할 수 있습니다.</p>
                            <p>제6조 계정 생성 거절 및 승낙 보류</p>
                            <article>
                                <p>1. 제공자는 아래와 같은 경우 이용계약을 거절 및 철회할 수 있습니다.</p>
                                <article>
                                    <p>가. 타인 명의의 전자메일 주소 및 개인정보를 이용하여 계정을 생성한 경우</p>
                                    <p>나. 회원의 귀책사유로 이용 승낙이 곤란한 경우</p>
                                </article>
                                <p>2. 제공자는 전항의 각호에 사유가 해당하는 경우, 즉시 사용자의 서비스 이용을 중단하거나 계정을 삭제하는 등 적절한 서비스 제한을 할 수 있습니다.</p>
                                <p>3. 제공자는 아래와 같은 경우에 이용계약을 보류할 수 있습니다.</p>
                                <article>
                                    <p>가. 제공 서비스 설비 용량에 현실적인 여유가 없는 경우</p>
                                    <p>나. 서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우</p>
                                    <p>다. 기타 제공자가 재정적, 기술적으로 사용 제한이 필요하다고 인정하는 경우</p>
                                </article>
                            </article>
                            <p>제7조 아이디 부여 및 관리</p>
                            <article>
                                <p>1. 제공자는 회원에게 임의의 아이디를 부여합니다.</p>
                                <p>2. 회원이 생성한 아이디는 변경할 수 없음을 원칙으로 합니다.</p>
                                <p>3. 회원이 생성한 계정의 정보는 회원 본인만 이용할 수 있으며, 다른 사람이 계정 정보를 사용하여 동일한 계정의 서비스를 이용할 수 없습니다. 회원 본인을 제외한 다른 사람이 계정을 무단으로 사용할 수 없도록 비밀번호는 회원이 직접 관리하여야 합니다.</p>
                                <p>4. 서비스 내 프로필 관리 메뉴를 통하여 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스의 제공 및 관리를 위해 아이디 등 일부 정보는 수정이 불가능합니다. 서비스 이용 신청 시 카카오가 제공한 내용에 변동이 있을 땐 이를 직접 수정하여야 합니다.</p>
                            </article>
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PopUpInfo() {
        return (
            <React.Fragment>
                <div className={isPopUpInfo ? "isPopUpInfo" : "isPopUpInfo_fade"}>
                    <div className='isPopUpInfo_outContainer'>
                        <div className='isPopUpInfo_closed' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPINFO', data: !isPopUpInfo });
                        }}></div>
                        <p className='isPopUpInfo_title'>개인정보처리방침</p>
                        <article className='isPopUpInfo_article'>
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
                        <PopUpHowTo></PopUpHowTo>
                        <PopUpInfo></PopUpInfo>
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
                        <p className='menu_bar_mypage_box_p' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPHOWTO', data: !isPopUpHowTo });
                        }}>이용약관</p>
                        <div className='menu_bar_mypage_line'></div>
                        <p className='menu_bar_mypage_box_p' onClick={() => {
                            dispatch({ type: 'CHANGE_ISPOPUPINFO', data: !isPopUpInfo });
                        }}>개인정보처리방침</p>
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