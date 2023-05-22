import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import './ModalStory.css';

function ModalStory() {
    const dispatch = useDispatch();
    const isStory = useSelector((state) => state.isStory);
    // Slick 설정 값
    const settings = {
        draggable: false,
        swipe: false,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 1250,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // 창 닫기 기능
    function toggleCheck() {
        dispatch({ type: 'CHANGE_ISSTORY', data: !isStory });
    };

    // 쿠키 설정 기능
    function setCookie() {
        let checkCookie = document.querySelector('.modalStory_cookie_input');
        if (checkCookie.checked === true) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 10);
            const expiresDate = expires.toUTCString();
            let setCookie = '';
            setCookie += 'pl@ter=190301;';
            setCookie += 'Expires=' + expiresDate;
            document.cookie = setCookie;
        } else {
            delCookie();
        };
    };

    // 쿠키 삭제 기능
    function delCookie() {
        const expires = new Date();
        expires.setDate(expires.getDate() - 1);
        const expiresDate = expires.toUTCString();
        let setCookie = '';
        setCookie += 'pl@ter=190301;';
        setCookie += 'Expires=' + expiresDate;
        document.cookie = setCookie;
    };

    // Slider (수정 중)
    return (
        <React.Fragment>
            <div className={isStory ? "modalStory_fade" : "modalStory_nonFade"}>
                <div className="modalStory_outContainer">
                    <div className="modalStory_innerContainer">
                        <div className="modalStory_close" onClick={toggleCheck}></div>
                        <Slider {...settings}>
                            {/*  */}
                            <div className='modalStory_outDiv'>
                                <div style={{ textAlign: 'center' }}>
                                    <div className='modalStory_img1' style={{ backgroundImage: "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/logo/logo.png?raw=true')", backgroundSize: 'cover', width: '35%', height: '7rem', marginTop: '1.5rem' }}></div>
                                    <p className="modalStory_p_1_1" style={{ marginTop: '1.5rem', fontSize: '1.5rem', marginBottom: '0.5rem' }}>OPEN BETA TEST</p>
                                    <p className="modalStory_p_1_2" style={{ marginBottom: '0.5rem' }}>기간: 2023. 5. 29. ~ 2023. 6. 12.</p>
                                    <p className="modalStory_p_1_2">※ 상기 기간 종료 후 모든 데이터가 삭제 될 수 있습니다.</p>
                                    <button style={{ fontSize: '0.8rem', border: 'none', marginTop: '1rem', height: '2rem', width: '50%', fontFamily: 'SpoqaHanSansNeo-Regular', backgroundColor: '#DBDBFF', color: '#4A4AFF', borderRadius: '0.75rem' }} onClick={() => {
                                        window.open('https://www.notion.so/PL-TER-83d6a7213845476f84c780d863591e90', '_blank');
                                    }}>자세히 알아보기</button>
                                </div>
                            </div>
                            {/*  */}
                            <div className='modalStory_outDiv'>
                                <div>
                                    <div className='modalStory_img1'></div>
                                    <p className="modalStory_p_1_1">"외로워…"</p>
                                    <p className="modalStory_p_1_2">작은별이 달에게 푸념했습니다.</p>
                                </div>
                            </div>
                            <div className='modalStory_outDiv'>
                                <div>
                                    <div className='modalStory_img2'></div>
                                    <p className="modalStory_p_2_1">"옛날에는 지구인이</p>
                                    <p className="modalStory_p_2_2">종종 찾아오건 했지"</p>
                                    <p className="modalStory_p_2_3">달은 작은별에게 지구의</p>
                                    <p className="modalStory_p_2_4">이야기를 들려줬습니다.</p>
                                </div>
                            </div>
                            <div className='modalStory_outDiv'>
                                <div>
                                    <div className='modalStory_img3'></div>
                                    <p className="modalStory_p_3_1">작은별은 지구인을 동경하게</p>
                                    <p className="modalStory_p_3_2">되었습니다. 작은별은 힘을 내</p>
                                    <p className="modalStory_p_3_3">지구인들에게 신호를 보내기로</p>
                                    <p className="modalStory_p_3_4">결심했어요.</p>
                                </div>
                            </div>
                            <div className='modalStory_outDiv'>
                                <div>
                                    <div className='modalStory_img4'></div>
                                    <p className="modalStory_p_4_1">"나에게 편지를 보내줘.</p>
                                    <p className="modalStory_p_4_2">내 이름은 -"</p>
                                    <div className='modalStory_startButton' onClick={toggleCheck}>신호 보내기</div>
                                </div>
                            </div>
                        </Slider>
                        <div className='modalStory_cookie'><input className='modalStory_cookie_input' type='checkbox' onChange={setCookie}></input> 다시 보지 않기(10일 동안)</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ModalStory;