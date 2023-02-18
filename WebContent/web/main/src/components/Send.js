import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Adsense } from '@ctrl/react-adsense';
// import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import './Send.css'

function Send() {
    // const navigater = useNavigate();
    const dispatch = useDispatch();
    const textareaFocus = useRef('');
    const isSendMain = useSelector((state) => state.isSendMain);
    const text = useSelector((state) => state.text);
    const textLength = useSelector((state) => state.textLength);
    const stickerArray = useSelector((state) => state.stickerArray);
    const stickerNumber = useSelector((state) => state.stickerNumber);
    // 
    const isSendPopUp = useSelector((state) => state.isSendPopUp);
    const isSendPopUpCancel = useSelector((state) => state.isSendPopUpCancel);
    const isSendPopUpCheck = useSelector((state) => state.isSendPopUpCheck);
    const isPreLetterBox = useSelector((state) => state.isPreLetterBox);
    const author = useSelector((state) => state.author);
    const stamp = useSelector((state) => state.stamp);
    const isStamp = useSelector((state) => state.isStamp);
    //
    const isSendingPage = useSelector((state) => state.isSendingPage);
    //
    const isSendingEnd = useSelector((state) => state.isSendingEnd);
    // 
    const isLetterOption = useSelector((state) => state.isLetterOption);
    const isFontFamily = useSelector((state) => state.isFontFamily);
    const isRange = useSelector((state) => state.isRange);
    const isColor = useSelector((state) => state.isColor);
    const isLetterPaper = useSelector((state) => state.isLetterPaper);
    const isSticker = useSelector((state) => state.isSticker);
    //
    const [userOpenDateRequired, setUserOpenDateRequired] = useState(null);
    const [userLetterCountRequired, setUserLetterCountRequired] = useState(null);
    const [userNickName, setUserNickName] = useState(null);
    // 
    const [styleLetter, setStyleLetter] = useState({ "fontSize": "0.875rem", "fontFamily": "SpoqaHanSansNeo-Regular", "color": "black", "textAlign": "left", "backgroundImage": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true')" });
    const [letterMenu, setLetterMenu] = useState({
        font: false,
        range: false,
        color: false,
        paper: false,
        sticker: false
    });
    const [fontItem, setFontItem] = useState({
        a: true,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false
    });
    const [rangeItem, setRangeItem] = useState({
        left: true,
        center: false,
        right: false
    });
    const [colorItem, setColorItem] = useState({
        a: true,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false
    });
    const [paperItem, setPaperItem] = useState({
        a: false,
        b: false,
        c: false,
        d: true,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false,
        a1: false,
        b1: false,
        c1: false,
        d1: false,
        e1: false,
        f1: false,
        g1: false
    });
    //
    const [completion, setCompletion] = useState(false);
    // 
    const bad_word = ['<', '>', '씨발', '시발', '♡년', '병신', '개새끼', '강간', '따먹', '로리', '쇼타', '씹', '앰창', '엠창', '좆', '창남', '창녀', '창놈', '창년', '걸레', '갈보', '멍청도', '보전깨', '빨통', '쌍놈', '쌍년', '썅년', '썅놈', '자살', '자해', '육변기', '느갭', '미친년', '미친놈', '염병', '♡빻', '재기', '젖', '성괴', '호로년', '호로잡년', '조건만남', '장애년', '좆창년', '♡련', '쪽바리', '니애미', '느금마', '니애비', '피싸개', '도태남', '부랄발작', '헤으응', '한남충', '한녀', '성매매', '장애인년', '니미', '사지절단', '엿', '맘충', '짱깨', '예수쟁이', '개독교', '똥꼬충', '소추', '두창', '죽어라', '떡치', '지년', '박고', '박아', '받이'];
    //
    function SendPopUp() {
        return (
            <React.Fragment>
                <div className={isSendPopUp ? "isSendPopUp" : "isSendPopUp_fade"}>
                    <div className='isSendPopUp_outContainer'>
                        <p className='isSendPopUp_title'>〈 {userNickName}님의 행성 〉</p>
                        <p className='isSendPopUp_p'>어서오세요! 이곳은</p>
                        <p className='isSendPopUp_p'>{userNickName}님의 행성입니다.</p>
                        <div className='isSendPopUp_innerBox'>
                            <div className='isSendPopUp_button_signOut' onClick={() => {
                                window.location.replace('/main');
                            }}>행성 개설하기</div>
                            <div className='isSendPopUp_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISSENDPOPUP', data: !isSendPopUp });
                                textareaFocus.current.focus();
                            }}>편지 작성하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function SendPopUpCancel() {
        return (
            <React.Fragment>
                <div className={isSendPopUpCancel ? "isSendPopUpCancel" : "isSendPopUpCancel_fade"}>
                    <div className='isSendPopUpCancel_outContainer'>
                        <p className='isSendPopUpCancel_title'>작성을 취소하겠습니까?</p>
                        <p className='isSendPopUpCancel_p'>작성을 취소하면 작성 중이던</p>
                        <p className='isSendPopUpCancel_p'>내용은 모두 삭제됩니다.</p>
                        <div className='isSendPopUpCancel_innerBox'>
                            <div className='isSendPopUpCancel_button_signOut' onClick={() => {
                                window.location.replace('/main');
                            }}>작성 취소</div>
                            <div className='isSendPopUpCancel_button_cancel' onClick={() => {
                                dispatch({ type: 'CHANGE_ISSENDPOPUPCANCEL', data: !isSendPopUpCancel });
                            }}>편지 작성하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function SendPopUpCheck() {
        return (
            <React.Fragment>
                <div className={isSendPopUpCheck ? "isSendPopUpCheck" : "isSendPopUpCheck_fade"}>
                    <div className='isSendPopUpCheck_outContainer'>
                        <p className='isSendPopUpCheck_title'>편지가 비어 있습니다.</p>
                        <p className='isSendPopUpCheck_p'>당신의 소중한 이야기를 들려주세요.</p>
                        <div className='isSendPopUpCheck_button_cancel' onClick={() => {
                            dispatch({ type: 'CHANGE_ISSENDPOPUPCHECK', data: !isSendPopUpCheck });
                        }}>계속 작성하기</div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PreLetter() {
        const [preAuthor, setPreAuthor] = useState(author);
        const [preIsStamp, setPreIsStamp] = useState(isStamp);
        const [stampNum, setStampNum] = useState(stamp);
        const settings = {
            draggable: true,
            swipe: true,
            arrows: false,
            dots: false,
            infinite: false,
            speed: 1250,
            slidesToShow: 5,
            slidesToScroll: 3
        };

        function changeAuthor(props) {
            dispatch({ type: 'CHANGE_AUTHOR', data: props });
        };

        function changeStamp() {
            dispatch({ type: 'CHANGE_ISSTAMP', data: preIsStamp });
            dispatch({ type: 'CHANGE_STAMP', data: stampNum });
        };

        // pre letter stamp select
        function selectStamp(props) {
            let newStampItem = { ...preIsStamp };
            switch (props) {
                case 'stamp_1':
                    newStampItem['a'] = true;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_2':
                    newStampItem['a'] = false;
                    newStampItem['b'] = true;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_3':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = true;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_4':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = true;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_5':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = true;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_6':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = true;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_7':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = true;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_8':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = true;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_9':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = true;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_10':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = true;
                    newStampItem['k'] = false;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_11':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = true;
                    newStampItem['l'] = false;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_12':
                    newStampItem['a'] = false;
                    newStampItem['b'] = false;
                    newStampItem['c'] = false;
                    newStampItem['d'] = false;
                    newStampItem['e'] = false;
                    newStampItem['f'] = false;
                    newStampItem['g'] = false;
                    newStampItem['h'] = false;
                    newStampItem['i'] = false;
                    newStampItem['j'] = false;
                    newStampItem['k'] = false;
                    newStampItem['l'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                default:
                    break;
            };
        };

        function filter() {
            let compare_data = text;
            for (let i = 0; i < bad_word.length; i++) {
                for (let j = 0; j < compare_data.length; j++) {
                    if (bad_word[i] === compare_data.substring(j, j + bad_word[i].length)) {
                        compare_data = compare_data.replace(compare_data.substring(j, j + bad_word[i].length), '♡')
                    };
                };
            };
            dispatch({ type: 'CHANGE_TEXT', data: compare_data });
        };

        useEffect(() => {
            makeLetter();
        }, []);

        return (
            <React.Fragment>
                <div className={isPreLetterBox ? 'pre_letter_outBox_active' : 'pre_letter_outBox'}>
                    <div className='pre_letter_wrap'>
                        <section className='section_shootingStar'>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                        </section>
                        <div className='send_top_menu' style={{ 'marginBottom': '0.5rem' }}>
                            <img alt='backIMG' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/back.png?raw=true' onClick={() => {
                                changeAuthor(preAuthor);
                                changeStamp();
                                dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                                dispatch({ type: 'CHANGE_ISSENDMAIN', data: !isSendMain });
                            }}></img>
                            <h3>수정하기</h3>
                            <span onClick={() => {
                                changeAuthor(preAuthor);
                                changeStamp();
                                filter();
                                dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                                dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
                            }}>보내기</span>
                        </div>
                        <div className='pre_letter_outContainer'>
                            <textarea style={styleLetter} className='send_pre_textbox' readOnly></textarea>
                        </div>
                        <div className='pre_letter_author_outContainer'>
                            <p className='pre_letter_autho_title'>발신자 명</p>
                            <div className='pre_letter_author_input_div'>
                                <span className='pre_letter_author_input_title'>from.</span>
                                <input className='pre_letter_author_input' type='text' maxLength={10} placeholder={author} onChange={(e) => {
                                    setPreAuthor(e.target.value);
                                }}></input><span className='pre_letter_author_input_length'>{preAuthor.length}/10</span>
                            </div>
                        </div>
                        <div className='pre_letter_author_outContainer'>
                            <p className='pre_letter_autho_title'>우표</p>
                            <div className='pre_letter_stamp_outContainer'>
                                <Slider {...settings}>
                                    <div>
                                        <div id='pre_letter_stamp_img_1' className={preIsStamp.a ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_1');
                                            setStampNum(0);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_2' className={preIsStamp.b ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_2');
                                            setStampNum(1);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_3' className={preIsStamp.c ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_3');
                                            setStampNum(2);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_4' className={preIsStamp.d ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_4');
                                            setStampNum(3);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_5' className={preIsStamp.e ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_5');
                                            setStampNum(4);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_6' className={preIsStamp.f ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_6');
                                            setStampNum(5);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_7' className={preIsStamp.g ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_7');
                                            setStampNum(6);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_8' className={preIsStamp.h ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_8');
                                            setStampNum(7);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_9' className={preIsStamp.i ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_9');
                                            setStampNum(8);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_10' className={preIsStamp.j ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_10');
                                            setStampNum(9);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_11' className={preIsStamp.k ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_11');
                                            setStampNum(10);
                                        }}></div>
                                    </div>
                                    <div>
                                        <div id='pre_letter_stamp_img_12' className={preIsStamp.l ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                            selectStamp('stamp_12');
                                            setStampNum(11);
                                        }}></div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function SendingPage() {

        function checkLetterData() {
            let sendLetterData = {
                'text': text,
                'font': styleLetter['fontFamily'],
                'align': styleLetter['textAlign'],
                'size': styleLetter['fontSize'],
                'color': styleLetter['color'],
                'paper': styleLetter['backgroundImage'],
                'icon': stamp,
                'sticker': stickerArray,
                'author': author
            };
            console.log(sendLetterData);
            alert(sendLetterData);
            alert(`text : ${text}
             / font : ${styleLetter['fontFamily']} 
             / align : ${styleLetter['textAlign']} 
             / size : ${styleLetter['fontSize']} 
             / color : ${styleLetter['color']}
             / paper : ${styleLetter['backgroundImage']}
             / icon : ${stamp}
             / sticker : ${stickerArray}
             / author : ${author}
            `);
            dispatch({ type: 'CHANGE_ISSENDINGEND', data: !isSendingEnd });
            dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
        };

        useEffect(() => {
            setTimeout(() => {
                checkLetterData();
            }, 3000);
        }, []);

        return (
            <React.Fragment>
                <div className={isSendingPage ? 'sending_page_outBox_active' : 'sending_page_outBox'}>
                    <div className='sending_page_wrap'>
                        <section className='section_shootingStar'>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                        </section>
                        <div className='sending_page_gif'></div>
                        <h3 className='sending_page_h3'>Loading..</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function SendingEnd() {
        // useEffect(() => {
        //     let ins = document.createElement('ins');
        //     let scr = document.createElement('script');
        //     ins.className = 'kakao_ad_area';
        //     ins.style = "display:none; width:100%;";
        //     scr.async = 'true';
        //     scr.type = "text/javascript";
        //     scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        //     ins.setAttribute('data-ad-width', '320');
        //     ins.setAttribute('data-ad-height', '100');
        //     ins.setAttribute('data-ad-unit', 'DAN-BB4EbobLalrwPI7o');
        //     document.querySelector('.adfit').appendChild(ins);
        //     document.querySelector('.adfit').appendChild(scr);
        // }, [])
        return (
            <React.Fragment>
                <div className={isSendingEnd ? 'sending_end_active' : 'sending_end'}>
                    <div className='sending_end_wrap'>
                        <section className='section_shootingStar'>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                            <span className='shootingStar'></span>
                        </section>
                        <div className='sending_end_img'></div>
                        <p className='sending_end_p'>발송을 완료했어요!</p>
                        <div className='sending_end_div' onClick={() => {
                            window.location.replace('/main');
                        }}>나도 행성 개설하기</div>
                        {/* <div className="adfit"></div> */}
                        <div className='googleAdsense'>
                            <Adsense
                                client={process.env.REACT_APP_GOOGLE_ADSENSE}
                                slot={process.env.REACT_APP_GOOGLE_ADSENSE_SLOT}
                                style={{ display: 'block' }}
                                layout="in-article"
                                format="fluid"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // make letter func
    function makeLetter() {
        let copyStickerArray = stickerArray;
        for (let i = 0; i < copyStickerArray.length; i++) {
            let item = document.createElement('div');
            let stage = document.querySelector('.pre_letter_outContainer');
            item.setAttribute('id', '_' + copyStickerArray[i].id);
            item.setAttribute('class', 'send_item_sticker' + copyStickerArray[i].class);
            stage.appendChild(item);
            setTranslate(Math.round(Number(copyStickerArray[i].X)), Math.round((Number(copyStickerArray[i].Y))), item);
        };

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        };
        // Enter text
        let copyText = text;
        let enterText = document.querySelector('.send_pre_textbox');
        enterText.value = copyText;
    };

    useEffect(() => {
        if (text === "") {
            setCompletion(false);
        } else {
            setCompletion(true);
        };
    }, [text]);

    // Require INFO
    function requireUserCheckData(props) {
        fetch('http://plater.kr/api/member/' + props, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((userData) => {
                console.log(userData);
                setUserOpenDateRequired(userData.userOpenDate);
                setUserLetterCountRequired(userData.userGetLetterCount);
                setUserNickName(userData.userNickName);
            })
            .catch((userDate_error) => {
                console.log(userDate_error);
                alert('서버로부터 행성 개설자 정보를 받아오지 못했습니다. 다시 시도해주세요.');
                window.location.replace('/main');
            });
    };

    // function finalCheck() {
    //     const url = document.location.href;
    //     const qs = url.substring(url.indexOf('?') + 1).split('&');
    //     const result = {};
    //     for (let i = 0; i < qs.length; i++) {
    //         qs[i] = qs[i].split('='); result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    //     };
    //     requireUserCheckData(result.userID);
    //     let now = new Date().getTime();
    //     let distance = Number(userOpenDateRequired) - now;
    //     if (distance >= 0) {
    //         if (Number(userLetterCountRequired) >= 36) {
    //             alert('조금 전에 행성이 편지로 가득찼습니다. Pl@ter 페이지로 이동합니다.');
    //             window.location.replace('/main');
    //         };
    //     } else {
    //         alert('조금 전에 행성이 만료되었습니다. Pl@ter 페이지로 이동합니다.');
    //         window.location.replace('/main');
    //     };
    // };

    // ?userID=userID
    const get_query = useCallback(() => {
        const url = document.location.href;
        const qs = url.substring(url.indexOf('?') + 1).split('&');
        const result = {};
        for (let i = 0; i < qs.length; i++) {
            qs[i] = qs[i].split('='); result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        };
        console.log(result.userID);
        if (result.userID !== undefined) {
            requireUserCheckData(result.userID);
            let now = new Date().getTime();
            let distance = Number(userOpenDateRequired) - now;
            if (distance >= 0) {
                if (Number(userLetterCountRequired) >= 36) {
                    alert('행성이 편지로 가득찼습니다. Pl@ter 페이지로 이동합니다.');
                    // window.location.replace('/main');
                };
            } else {
                alert('행성이 만료되었습니다. Pl@ter 페이지로 이동합니다.');
                // window.location.replace('/main');
            };
        } else {
            alert('정상적인 접근 방법이 아닙니다. Pl@ter 페이지로 이동합니다.');
            // window.location.replace('/main');
        };
    }, []);

    useEffect(() => {
        get_query();

    }, [get_query]);

    function locationData(data, id, X, Y, num) {
        if (id === '') {
        } else {
            if (data.length === 0) {
                data.push({ 'id': id, 'X': Math.round(X), 'Y': Math.round(Y), 'class': num });
                dispatch({ type: 'CHANGE_STICKER', data: data });
            } else {
                if (data.some((e) => e.id === id)) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].id === id) {
                            data[i] = { 'id': id, 'X': Math.round(X), 'Y': Math.round(Y), 'class': num };
                            dispatch({ type: 'CHANGE_STICKER', data: data });
                        };
                    };
                } else {
                    data.push({ 'id': id, 'X': Math.round(X), 'Y': Math.round(Y), 'class': num });
                    dispatch({ type: 'CHANGE_STICKER', data: data });
                };
            };
        };
        console.log(data);
    };

    function remove(props) {
        let newData = stickerArray;
        let item = document.querySelector('#id' + props);
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === 'id' + props) {
                newData.splice(i, 1);
                dispatch({ type: 'CHANGE_STICKER', data: newData });
            };
        };
        item.remove();
        console.log(stickerArray);
    };

    function createEl(props, num) {
        // Creating elements
        let item = document.createElement('div');
        let itemClose = document.createElement('div');
        let stage = document.querySelector('#send_textarea');
        item.setAttribute('id', 'id' + props);
        item.setAttribute('class', 'send_item_sticker' + num);
        itemClose.setAttribute('class', 'send_close');
        itemClose.addEventListener('click', () => { remove(props) });
        stage.appendChild(item);
        let stageClose = document.querySelector('#id' + props);
        stageClose.appendChild(itemClose);
        dispatch({ type: 'CHANGE_STICKER_NUMBER', data: stickerNumber + 1 });

        // Function to move elements
        let dragItem = document.querySelector("#id" + props);
        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        dragItem.addEventListener("touchstart", dragStart, false);
        dragItem.addEventListener("touchend", dragEnd, false);
        dragItem.addEventListener("touchmove", drag, false);
        dragItem.addEventListener("mousedown", dragStart, false);
        dragItem.addEventListener("mouseup", dragEnd, false);
        dragItem.addEventListener("mousemove", drag, false);

        function dragStart(e) {
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            };
            if (e.target === dragItem) {
                active = true;
            };
        };

        function drag(e) {
            if (active) {
                e.preventDefault();
                if (e.type === "touchmove") {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                };
                xOffset = currentX;
                yOffset = currentY;
                if (currentX >= 140 || currentY >= 165 || currentX <= -140 || currentY <= -165) {
                    setTranslate(Math.round(currentX), Math.round(currentY), dragItem);
                    dragEnd(e);
                    alert('편지지 안쪽에 스티커를 붙여주세요.');
                } else {
                    setTranslate(Math.round(currentX), Math.round(currentY), dragItem);
                };
            };
        };

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            el.style.position = "relative";
        };

        function dragEnd(e) {
            locationData(stickerArray, e.target.id, currentX, currentY, num);
            console.log(Math.round(currentX), Math.round(currentY));
            active = false;
            dragItem.style.position = "absolute";
        };
    };

    // letter option active
    function activeLetterOption() {
        if (isLetterOption === false) {
            dispatch({ type: 'CHANGE_ISLETTEROPTION', data: true });
            dispatch({ type: 'CHANGE_ISFONTFAMILY', data: true });
        };
    };

    // letter option inactive
    function inactiveLetterOption() {
        if (isLetterOption === true) {
            dispatch({ type: 'CHANGE_ISLETTEROPTION', data: false });
            dispatch({ type: 'CHANGE_ISFONTFAMILY', data: false });
            dispatch({ type: 'CHANGE_ISRANGE', data: false });
            dispatch({ type: 'CHANGE_ISCOLOR', data: false });
            dispatch({ type: 'CHANGE_ISLETTERPAPER', data: false });
            dispatch({ type: 'CHANGE_ISSTICKER', data: false });
        };
    };

    // change letter option menu
    function changeLetterOption(props) {
        switch (props) {
            case 'CHANGE_ISFONTFAMILY':
                dispatch({ type: 'CHANGE_ISFONTFAMILY', data: true });
                dispatch({ type: 'CHANGE_ISRANGE', data: false });
                dispatch({ type: 'CHANGE_ISCOLOR', data: false });
                dispatch({ type: 'CHANGE_ISLETTERPAPER', data: false });
                dispatch({ type: 'CHANGE_ISSTICKER', data: false });
                break;
            case 'CHANGE_ISRANGE':
                dispatch({ type: 'CHANGE_ISFONTFAMILY', data: false });
                dispatch({ type: 'CHANGE_ISRANGE', data: true });
                dispatch({ type: 'CHANGE_ISCOLOR', data: false });
                dispatch({ type: 'CHANGE_ISLETTERPAPER', data: false });
                dispatch({ type: 'CHANGE_ISSTICKER', data: false });
                break;
            case 'CHANGE_ISCOLOR':
                dispatch({ type: 'CHANGE_ISFONTFAMILY', data: false });
                dispatch({ type: 'CHANGE_ISRANGE', data: false });
                dispatch({ type: 'CHANGE_ISCOLOR', data: true });
                dispatch({ type: 'CHANGE_ISLETTERPAPER', data: false });
                dispatch({ type: 'CHANGE_ISSTICKER', data: false });

                break;
            case 'CHANGE_ISLETTERPAPER':
                dispatch({ type: 'CHANGE_ISFONTFAMILY', data: false });
                dispatch({ type: 'CHANGE_ISRANGE', data: false });
                dispatch({ type: 'CHANGE_ISCOLOR', data: false });
                dispatch({ type: 'CHANGE_ISLETTERPAPER', data: true });
                dispatch({ type: 'CHANGE_ISSTICKER', data: false });
                break;
            case 'CHANGE_ISSTICKER':
                dispatch({ type: 'CHANGE_ISFONTFAMILY', data: false });
                dispatch({ type: 'CHANGE_ISRANGE', data: false });
                dispatch({ type: 'CHANGE_ISCOLOR', data: false });
                dispatch({ type: 'CHANGE_ISLETTERPAPER', data: false });
                dispatch({ type: 'CHANGE_ISSTICKER', data: true });
                break;
            default:
                break;
        };
    };

    // change fontFamily
    function setFontFamily(props, size) {
        let newStyle = { ...styleLetter };
        newStyle['fontFamily'] = props;
        newStyle['fontSize'] = size;
        setStyleLetter(newStyle);
    };

    // change range
    function setRange(props) {
        let newStyle = { ...styleLetter };
        newStyle['textAlign'] = props;
        setStyleLetter(newStyle);
    };

    // change color
    function setColor(props) {
        let newStyle = { ...styleLetter };
        newStyle['color'] = props;
        setStyleLetter(newStyle);
    };

    // change paper
    function setPaper(props) {
        let newStyle = { ...styleLetter };
        newStyle['backgroundImage'] = props;
        setStyleLetter(newStyle);
    };

    // letter_menu select
    function selectLetterMenu(props) {
        let newLetterMenu = { ...letterMenu };
        switch (props) {
            case 'font':
                newLetterMenu['font'] = true;
                newLetterMenu['range'] = false;
                newLetterMenu['color'] = false;
                newLetterMenu['paper'] = false;
                newLetterMenu['sticker'] = false;
                setLetterMenu(newLetterMenu);
                break;
            case 'range':
                newLetterMenu['font'] = false;
                newLetterMenu['range'] = true;
                newLetterMenu['color'] = false;
                newLetterMenu['paper'] = false;
                newLetterMenu['sticker'] = false;
                setLetterMenu(newLetterMenu);
                break;
            case 'color':
                newLetterMenu['font'] = false;
                newLetterMenu['range'] = false;
                newLetterMenu['color'] = true;
                newLetterMenu['paper'] = false;
                newLetterMenu['sticker'] = false;
                setLetterMenu(newLetterMenu);
                break;
            case 'paper':
                newLetterMenu['font'] = false;
                newLetterMenu['range'] = false;
                newLetterMenu['color'] = false;
                newLetterMenu['paper'] = true;
                newLetterMenu['sticker'] = false;
                setLetterMenu(newLetterMenu);
                break;
            case 'sticker':
                newLetterMenu['font'] = false;
                newLetterMenu['range'] = false;
                newLetterMenu['color'] = false;
                newLetterMenu['paper'] = false;
                newLetterMenu['sticker'] = true;
                setLetterMenu(newLetterMenu);
                break;
            default:
                break;
        };
    };

    // font_item select
    function selectFontItem(props) {
        let newFontItem = { ...fontItem };
        switch (props) {
            case 'fontItem_1':
                newFontItem['a'] = true;
                newFontItem['b'] = false;
                newFontItem['c'] = false;
                newFontItem['d'] = false;
                newFontItem['e'] = false;
                newFontItem['f'] = false;
                setFontItem(newFontItem);
                break;
            case 'fontItem_2':
                newFontItem['a'] = false;
                newFontItem['b'] = true;
                newFontItem['c'] = false;
                newFontItem['d'] = false;
                newFontItem['e'] = false;
                newFontItem['f'] = false;
                setFontItem(newFontItem);
                break;
            case 'fontItem_3':
                newFontItem['a'] = false;
                newFontItem['b'] = false;
                newFontItem['c'] = true;
                newFontItem['d'] = false;
                newFontItem['e'] = false;
                newFontItem['f'] = false;
                setFontItem(newFontItem);
                break;
            case 'fontItem_4':
                newFontItem['a'] = false;
                newFontItem['b'] = false;
                newFontItem['c'] = false;
                newFontItem['d'] = true;
                newFontItem['e'] = false;
                newFontItem['f'] = false;
                setFontItem(newFontItem);
                break;
            case 'fontItem_5':
                newFontItem['a'] = false;
                newFontItem['b'] = false;
                newFontItem['c'] = false;
                newFontItem['d'] = false;
                newFontItem['e'] = true;
                newFontItem['f'] = false;
                setFontItem(newFontItem);
                break;
            case 'fontItem_6':
                newFontItem['a'] = false;
                newFontItem['b'] = false;
                newFontItem['c'] = false;
                newFontItem['d'] = false;
                newFontItem['e'] = false;
                newFontItem['f'] = true;
                setFontItem(newFontItem);
                break;
            default:
                break;
        };
    };

    // range_item select
    function selectRangeItem(props) {
        let newRangeItem = { ...rangeItem };
        switch (props) {
            case 'left':
                newRangeItem['left'] = true;
                newRangeItem['center'] = false;
                newRangeItem['right'] = false;
                setRangeItem(newRangeItem);
                break;
            case 'center':
                newRangeItem['left'] = false;
                newRangeItem['center'] = true;
                newRangeItem['right'] = false;
                setRangeItem(newRangeItem);
                break;
            case 'right':
                newRangeItem['left'] = false;
                newRangeItem['center'] = false;
                newRangeItem['right'] = true;
                setRangeItem(newRangeItem);
                break;
            default:
                break;
        };
    };

    // color_item select
    function selectColorItem(props) {
        let newColorItem = { ...colorItem };
        switch (props) {
            case 'color_1':
                newColorItem['a'] = true;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_2':
                newColorItem['a'] = false;
                newColorItem['b'] = true;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_3':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = true;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_4':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = true;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_5':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = true;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_6':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = true;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_7':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = true;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_8':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = true;
                newColorItem['i'] = false;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_9':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = true;
                newColorItem['j'] = false;
                setColorItem(newColorItem);
                break;
            case 'color_10':
                newColorItem['a'] = false;
                newColorItem['b'] = false;
                newColorItem['c'] = false;
                newColorItem['d'] = false;
                newColorItem['e'] = false;
                newColorItem['f'] = false;
                newColorItem['g'] = false;
                newColorItem['h'] = false;
                newColorItem['i'] = false;
                newColorItem['j'] = true;
                setColorItem(newColorItem);
                break;
            default:
                break;
        };
    };

    // paper_item select
    function selectPaperItem(props) {
        let newPaperItem = { ...paperItem };
        switch (props) {
            case 'paper_1':
                newPaperItem['a'] = true;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_2':
                newPaperItem['a'] = false;
                newPaperItem['b'] = true;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_3':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = true;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_4':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = true;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_5':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = true;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_6':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = true;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_7':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = true;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_8':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = true;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_9':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = true;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_10':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = true;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_11':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = true;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_12':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = true;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_13':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = true;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_14':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = true;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_15':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = true;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_16':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = true;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_17':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = true;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_18':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = true;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_19':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = true;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_20':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = true;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_21':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = true;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_22':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = true;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_23':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = true;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_24':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = true;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_25':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = true;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_26':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = true;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_27':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = true;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_28':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = true;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_29':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = true;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_30':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = true;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_31':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = true;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_32':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = true;
                newPaperItem['g1'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_33':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                newPaperItem['e'] = false;
                newPaperItem['f'] = false;
                newPaperItem['g'] = false;
                newPaperItem['h'] = false;
                newPaperItem['i'] = false;
                newPaperItem['j'] = false;
                newPaperItem['k'] = false;
                newPaperItem['l'] = false;
                newPaperItem['m'] = false;
                newPaperItem['n'] = false;
                newPaperItem['o'] = false;
                newPaperItem['p'] = false;
                newPaperItem['q'] = false;
                newPaperItem['r'] = false;
                newPaperItem['s'] = false;
                newPaperItem['t'] = false;
                newPaperItem['u'] = false;
                newPaperItem['v'] = false;
                newPaperItem['w'] = false;
                newPaperItem['x'] = false;
                newPaperItem['y'] = false;
                newPaperItem['z'] = false;
                newPaperItem['a1'] = false;
                newPaperItem['b1'] = false;
                newPaperItem['c1'] = false;
                newPaperItem['d1'] = false;
                newPaperItem['e1'] = false;
                newPaperItem['f1'] = false;
                newPaperItem['g1'] = true;
                setPaperItem(newPaperItem);
                break;
            default:
                break;
        };
    };

    return (
        <React.Fragment>
            <SendingEnd></SendingEnd>
            {isSendingPage ? <SendingPage></SendingPage> : ''}
            <PreLetter></PreLetter>
            <SendPopUp></SendPopUp>
            <SendPopUpCancel></SendPopUpCancel>
            <SendPopUpCheck></SendPopUpCheck>
            <div className={isSendMain ? 'send_main_fade' : 'send_main_active'}>
                <section className='section_shootingStar'>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                    <span className='shootingStar'></span>
                </section>
                <div className='send_top_menu'>
                    <img alt='backIMG' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/back.png?raw=true' onClick={() => {
                        dispatch({ type: 'CHANGE_ISSENDPOPUPCANCEL', data: !isSendPopUpCancel });
                    }}></img>
                    <h3>To. {userNickName}</h3>
                    <span className={completion ? 'set_top_menu_completion_active' : 'set_top_menu_completion'} onClick={() => {
                        if (text === '') {
                            dispatch({ type: 'CHANGE_ISSENDPOPUPCHECK', data: !isSendPopUpCheck });
                        } else {
                            dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                            inactiveLetterOption();
                            dispatch({ type: 'CHANGE_ISSENDMAIN', data: !isSendMain });
                        };
                    }}>완성하기</span>
                </div>
                <div>
                    <div id="send_textarea">
                        <textarea style={styleLetter} ref={textareaFocus} className="send_textbox" maxLength={240} placeholder='※ 편지를 작성해주세요.&#13;&#10;※ 240자 또는 1쪽 이내' onChange={(e) => {
                            inactiveLetterOption();
                            if (e.target.scrollHeight > 320) {
                                alert('아직 쪽을 넘겨서 작성하면 편지가 올바르게 전달되지 않습니다.');
                                let modifiedText = e.target.value.slice(0, -1);
                                e.target.value = modifiedText;
                            };
                            dispatch({ type: 'CHANGE_TEXTLENGTH', data: e.target.value.length });
                            dispatch({ type: 'CHANGE_TEXT', data: e.target.value });
                        }} onFocus={() => {
                            inactiveLetterOption();
                            // let focusEle = document.activeElement;
                            // if (document.getElementsByClassName('send_textbox')[0] === focusEle) {
                            //     inactiveLetterOption();
                            // }; 
                        }}
                        >
                        </textarea>
                    </div>
                    <div className='send_textLength'>{textLength}/240</div>
                </div>

                <div className='send_option_button_div'>
                <div className='send_option_button' onClick={() => {
                    activeLetterOption();
                    selectLetterMenu('font');
                }}></div>
                </div>
                <div className={isLetterOption ? 'send_letter_option_active' : 'send_letter_option'} >
                    <img className='send_letter_menu_close' alt='option_closed' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/etc/send/closed_btn.png?raw=true' onClick={() => {
                        inactiveLetterOption();
                        selectLetterMenu('font');
                    }}></img>
                    <div className='send_letter_option_innerContainer'>
                        <div className='send_letter_option_menu'>
                            <div className={letterMenu.font ? 'send_letter_menu_active' : 'send_letter_menu'} onClick={() => {
                                changeLetterOption('CHANGE_ISFONTFAMILY');
                                selectLetterMenu('font');
                            }}>글꼴</div>
                            <div className={letterMenu.range ? 'send_letter_menu_active' : 'send_letter_menu'} onClick={() => {
                                changeLetterOption('CHANGE_ISRANGE');
                                selectLetterMenu('range');
                            }}>정렬</div>
                            <div className={letterMenu.color ? 'send_letter_menu_active' : 'send_letter_menu'} onClick={() => {
                                changeLetterOption('CHANGE_ISCOLOR');
                                selectLetterMenu('color');
                            }}>색상</div>
                            <div className={letterMenu.paper ? 'send_letter_menu_active' : 'send_letter_menu'} onClick={() => {
                                changeLetterOption('CHANGE_ISLETTERPAPER');
                                selectLetterMenu('paper');
                            }}>편지지</div>
                            <div className={letterMenu.sticker ? 'send_letter_menu_active' : 'send_letter_menu'} onClick={() => {
                                changeLetterOption('CHANGE_ISSTICKER');
                                selectLetterMenu('sticker');
                            }}>스티커</div>
                        </div>
                    </div>
                    <div className={isFontFamily ? 'send_font_active' : 'send_font'}>
                        <div className={fontItem.a ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SpoqaHanSansNeo-Regular' }} onClick={() => {
                            setFontFamily('SpoqaHanSansNeo-Regular', '0.875rem');
                            selectFontItem('fontItem_1');
                        }}>
                            <div className='send_item_font_title'>Spoqa Han Sans Neo R</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.b ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'GyeonggiBatang' }} onClick={() => {
                            setFontFamily('GyeonggiBatang', '0.875rem');
                            selectFontItem('fontItem_2');
                        }}>
                            <div className='send_item_font_title'>경기천년바탕 R</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.c ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'NeoDunggeunmo' }} onClick={() => {
                            setFontFamily('NeoDunggeunmo', '0.8125rem');
                            selectFontItem('fontItem_3');
                        }}>
                            <div className='send_item_font_title'>Neo 둥근모</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.d ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'Saying_tobe_strong' }} onClick={() => {
                            setFontFamily('Saying_tobe_strong', '1.20rem');
                            selectFontItem('fontItem_4');
                        }}>
                            <div className='send_item_font_title'>힘내라는 말보단</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.e ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'ROEHOE-CHAN' }} onClick={() => {
                            setFontFamily('ROEHOE-CHAN', '0.98rem');
                            selectFontItem('fontItem_5');
                        }}>
                            <div className='send_item_font_title'>노회찬체</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.f ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SBAggroB' }} onClick={() => {
                            setFontFamily('SBAggroB', '0.84rem');
                            selectFontItem('fontItem_6');
                        }}>
                            <div className='send_item_font_title'>어그로체 L</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                    </div>
                    <div className={isRange ? 'send_range_active' : 'send_range'}>
                        <div className={rangeItem.left ? 'send_item_range_active' : 'send_item_range'} onClick={() => {
                            setRange('left');
                            selectRangeItem('left');
                        }}><div className='send_item_range_left'></div></div>
                        <div className={rangeItem.center ? 'send_item_range_active' : 'send_item_range'} onClick={() => {
                            setRange('center');
                            selectRangeItem('center');
                        }}><div className='send_item_range_center'></div></div>
                        <div className={rangeItem.right ? 'send_item_range_active' : 'send_item_range'} onClick={() => {
                            setRange('right');
                            selectRangeItem('right');
                        }}><div className='send_item_range_right'></div></div>
                    </div>
                    <div className={isColor ? 'send_color_active' : 'send_color'}>
                        <div id='color_1' className={colorItem.a ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(6 18 42)');
                            selectColorItem('color_1');
                        }}></div>
                        <div id='color_2' className={colorItem.b ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(169 19 25)');
                            selectColorItem('color_2');
                        }}></div>
                        <div id='color_3' className={colorItem.c ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(242 202 22)');
                            selectColorItem('color_3');
                        }}></div>
                        <div id='color_4' className={colorItem.d ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(77 168 77)');
                            selectColorItem('color_4');
                        }}></div>
                        <div id='color_5' className={colorItem.e ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(8 160 222)');
                            selectColorItem('color_5');
                        }}></div>
                        <div id='color_6' className={colorItem.f ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(76 76 253)');
                            selectColorItem('color_6');
                        }}></div>
                        <div id='color_7' className={colorItem.g ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(221 79 136)');
                            selectColorItem('color_7');
                        }}></div>
                        <div id='color_8' className={colorItem.h ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(73 36 25)');
                            selectColorItem('color_8');
                        }}></div>
                        <div id='color_9' className={colorItem.i ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(1 124 136)');
                            selectColorItem('color_9');
                        }}></div>
                        <div id='color_10' className={colorItem.j ? 'send_item_color_active' : 'send_item_color'} onClick={() => {
                            setColor('rgb(220 233 243)');
                            selectColorItem('color_10');
                        }}></div>
                    </div>
                    <div className={isLetterPaper ? 'send_paper_active' : 'send_paper'}>
                        <div id='paper_1' className={paperItem.a ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_city.gif?raw=true\')');
                            selectPaperItem('paper_1');
                        }}><div className='send_item_paper_title'>도시 편지지</div></div>
                        <div id='paper_2' className={paperItem.b ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_curce.gif?raw=true\')');
                            selectPaperItem('paper_2');
                        }}><div className='send_item_paper_title'>저주 편지지</div></div>
                        <div id='paper_3' className={paperItem.c ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_space.gif?raw=true\')');
                            selectPaperItem('paper_3');
                        }}><div className='send_item_paper_title'>우주 편지지</div></div>
                        <div id='paper_4' className={paperItem.d ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true\')');
                            selectPaperItem('paper_4');
                        }}><div className='send_item_paper_title'>하얀 편지지</div></div>
                        <div id='paper_5' className={paperItem.e ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_birthday.gif?raw=true\')');
                            selectPaperItem('paper_5');
                        }}><div className='send_item_paper_title'>생일 편지지</div></div>
                        <div id='paper_6' className={paperItem.f ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_birthday_2.gif?raw=true\')');
                            selectPaperItem('paper_6');
                        }}><div className='send_item_paper_title'>생일 편지지2</div></div>
                        <div id='paper_7' className={paperItem.g ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_blue.gif?raw=true\')');
                            selectPaperItem('paper_7');
                        }}><div className='send_item_paper_title'>파랑 편지지</div></div>
                        <div id='paper_8' className={paperItem.h ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_blue_pastel.gif?raw=true\')');
                            selectPaperItem('paper_8');
                        }}><div className='send_item_paper_title'>푸른 편지지</div></div>
                        <div id='paper_9' className={paperItem.i ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_cheese.gif?raw=true\')');
                            selectPaperItem('paper_9');
                        }}><div className='send_item_paper_title'>치즈 편지지</div></div>
                        <div id='paper_10' className={paperItem.j ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_error.gif?raw=true\')');
                            selectPaperItem('paper_10');
                        }}><div className='send_item_paper_title'>오류 편지지</div></div>
                        <div id='paper_11' className={paperItem.k ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_flower.gif?raw=true\')');
                            selectPaperItem('paper_11');
                        }}><div className='send_item_paper_title'>흰꽃 편지지</div></div>
                        <div id='paper_12' className={paperItem.l ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_green_donut.gif?raw=true\')');
                            selectPaperItem('paper_12');
                        }}><div className='send_item_paper_title'>도넛 편지지</div></div>
                        <div id='paper_13' className={paperItem.m ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_green_pastel.gif?raw=true\')');
                            selectPaperItem('paper_13');
                        }}><div className='send_item_paper_title'>누런 편지지</div></div>
                        <div id='paper_14' className={paperItem.n ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_little_flower.gif?raw=true\')');
                            selectPaperItem('paper_14');
                        }}><div className='send_item_paper_title'>들꽃 편지지</div></div>
                        <div id='paper_15' className={paperItem.o ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_magenta.gif?raw=true\')');
                            selectPaperItem('paper_15');
                        }}><div className='send_item_paper_title'>자홍 편지지</div></div>
                        <div id='paper_16' className={paperItem.p ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_mint.gif?raw=true\')');
                            selectPaperItem('paper_16');
                        }}><div className='send_item_paper_title'>민트 편지지</div></div>
                        <div id='paper_17' className={paperItem.q ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_orange.gif?raw=true\')');
                            selectPaperItem('paper_17');
                        }}><div className='send_item_paper_title'>주황 편지지</div></div>
                        <div id='paper_18' className={paperItem.r ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_mint_pastel.gif?raw=true\')');
                            selectPaperItem('paper_18');
                        }}><div className='send_item_paper_title'>초록 편지지</div></div>
                        <div id='paper_19' className={paperItem.s ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_pastel.gif?raw=true\')');
                            selectPaperItem('paper_19');
                        }}><div className='send_item_paper_title'>몽환 편지지</div></div>
                        <div id='paper_20' className={paperItem.t ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_pink_cloud.gif?raw=true\')');
                            selectPaperItem('paper_20');
                        }}><div className='send_item_paper_title'>구름 편지지</div></div>
                        <div id='paper_21' className={paperItem.u ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_postit.gif?raw=true\')');
                            selectPaperItem('paper_21');
                        }}><div className='send_item_paper_title'>쪽지 편지지</div></div>
                        <div id='paper_22' className={paperItem.v ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_purple.gif?raw=true\')');
                            selectPaperItem('paper_22');
                        }}><div className='send_item_paper_title'>보라 편지지</div></div>
                        <div id='paper_23' className={paperItem.w ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_purple_pastel.gif?raw=true\')');
                            selectPaperItem('paper_23');
                        }}><div className='send_item_paper_title'>모란 편지지</div></div>
                        <div id='paper_24' className={paperItem.x ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_rainbow.gif?raw=true\')');
                            selectPaperItem('paper_24');
                        }}><div className='send_item_paper_title'>무지개 편지지</div></div>
                        <div id='paper_25' className={paperItem.y ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_red.gif?raw=true\')');
                            selectPaperItem('paper_25');
                        }}><div className='send_item_paper_title'>붉은 편지지</div></div>
                        <div id='paper_26' className={paperItem.z ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_red_pastel.gif?raw=true\')');
                            selectPaperItem('paper_26');
                        }}><div className='send_item_paper_title'>분홍 편지지</div></div>
                        <div id='paper_27' className={paperItem.a1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_sprout.gif?raw=true\')');
                            selectPaperItem('paper_27');
                        }}><div className='send_item_paper_title'>새싹 편지지</div></div>
                        <div id='paper_28' className={paperItem.b1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_stripe.gif?raw=true\')');
                            selectPaperItem('paper_28');
                        }}><div className='send_item_paper_title'>줄무늬 편지지</div></div>
                        <div id='paper_29' className={paperItem.c1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_vivid.gif?raw=true\')');
                            selectPaperItem('paper_29');
                        }}><div className='send_item_paper_title'>비비드 편지지</div></div>
                        <div id='paper_30' className={paperItem.d1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white_room.gif?raw=true\')');
                            selectPaperItem('paper_30');
                        }}><div className='send_item_paper_title'>하얀방 편지지</div></div>
                        <div id='paper_31' className={paperItem.e1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_wrinkle.gif?raw=true\')');
                            selectPaperItem('paper_31');
                        }}><div className='send_item_paper_title'>구겨진 편지지</div></div>
                        <div id='paper_32' className={paperItem.f1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_yellow.gif?raw=true\')');
                            selectPaperItem('paper_32');
                        }}><div className='send_item_paper_title'>노란 편지지</div></div>
                        <div id='paper_33' className={paperItem.g1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/papre_green.gif?raw=true\')');
                            selectPaperItem('paper_33');
                        }}><div className='send_item_paper_title'>형광 편지지</div></div>
                    </div>
                    <div className={isSticker ? 'send_sticker_active' : 'send_sticker'}>
                        <button className='send_item_sticker_0' onClick={() => { createEl(stickerNumber, 0) }}></button>
                        <button className='send_item_sticker_1' onClick={() => { createEl(stickerNumber, 1) }}></button>
                        <button className='send_item_sticker_2' onClick={() => { createEl(stickerNumber, 2) }}></button>
                        <button className='send_item_sticker_3' onClick={() => { createEl(stickerNumber, 3) }}></button>
                        <button className='send_item_sticker_4' onClick={() => { createEl(stickerNumber, 4) }}></button>
                        <button className='send_item_sticker_5' onClick={() => { createEl(stickerNumber, 5) }}></button>
                        <button className='send_item_sticker_6' onClick={() => { createEl(stickerNumber, 6) }}></button>
                        <button className='send_item_sticker_7' onClick={() => { createEl(stickerNumber, 7) }}></button>
                        <button className='send_item_sticker_8' onClick={() => { createEl(stickerNumber, 8) }}></button>
                        <button className='send_item_sticker_9' onClick={() => { createEl(stickerNumber, 9) }}></button>
                        <button className='send_item_sticker_10' onClick={() => { createEl(stickerNumber, 10) }}></button>
                        <button className='send_item_sticker_11' onClick={() => { createEl(stickerNumber, 11) }}></button>
                        <button className='send_item_sticker_12' onClick={() => { createEl(stickerNumber, 12) }}></button>
                        <button className='send_item_sticker_13' onClick={() => { createEl(stickerNumber, 13) }}></button>
                        <button className='send_item_sticker_14' onClick={() => { createEl(stickerNumber, 14) }}></button>
                        <button className='send_item_sticker_15' onClick={() => { createEl(stickerNumber, 15) }}></button>
                        <button className='send_item_sticker_16' onClick={() => { createEl(stickerNumber, 16) }}></button>
                        <button className='send_item_sticker_17' onClick={() => { createEl(stickerNumber, 17) }}></button>
                        <button className='send_item_sticker_18' onClick={() => { createEl(stickerNumber, 18) }}></button>
                        <button className='send_item_sticker_19' onClick={() => { createEl(stickerNumber, 19) }}></button>
                        <button className='send_item_sticker_20' onClick={() => { createEl(stickerNumber, 20) }}></button>
                        <button className='send_item_sticker_21' onClick={() => { createEl(stickerNumber, 21) }}></button>
                        <button className='send_item_sticker_22' onClick={() => { createEl(stickerNumber, 22) }}></button>
                        <button className='send_item_sticker_23' onClick={() => { createEl(stickerNumber, 23) }}></button>
                        <button className='send_item_sticker_24' onClick={() => { createEl(stickerNumber, 24) }}></button>
                        <button className='send_item_sticker_25' onClick={() => { createEl(stickerNumber, 25) }}></button>
                        <button className='send_item_sticker_26' onClick={() => { createEl(stickerNumber, 26) }}></button>
                        <button className='send_item_sticker_27' onClick={() => { createEl(stickerNumber, 27) }}></button>
                        <button className='send_item_sticker_28' onClick={() => { createEl(stickerNumber, 28) }}></button>
                        <button className='send_item_sticker_29' onClick={() => { createEl(stickerNumber, 29) }}></button>
                        <button className='send_item_sticker_30' onClick={() => { createEl(stickerNumber, 30) }}></button>
                        <button className='send_item_sticker_31' onClick={() => { createEl(stickerNumber, 31) }}></button>
                        <button className='send_item_sticker_32' onClick={() => { createEl(stickerNumber, 32) }}></button>
                        <button className='send_item_sticker_33' onClick={() => { createEl(stickerNumber, 33) }}></button>
                        <button className='send_item_sticker_34' onClick={() => { createEl(stickerNumber, 34) }}></button>
                        <button className='send_item_sticker_35' onClick={() => { createEl(stickerNumber, 35) }}></button>
                        <button className='send_item_sticker_36' onClick={() => { createEl(stickerNumber, 36) }}></button>
                        <button className='send_item_sticker_37' onClick={() => { createEl(stickerNumber, 37) }}></button>
                        <button className='send_item_sticker_38' onClick={() => { createEl(stickerNumber, 38) }}></button>
                        <button className='send_item_sticker_39' onClick={() => { createEl(stickerNumber, 39) }}></button>
                        <button className='send_item_sticker_40' onClick={() => { createEl(stickerNumber, 40) }}></button>
                        <button className='send_item_sticker_41' onClick={() => { createEl(stickerNumber, 41) }}></button>
                        <button className='send_item_sticker_42' onClick={() => { createEl(stickerNumber, 42) }}></button>
                        <button className='send_item_sticker_43' onClick={() => { createEl(stickerNumber, 43) }}></button>
                        <button className='send_item_sticker_44' onClick={() => { createEl(stickerNumber, 44) }}></button>
                        <button className='send_item_sticker_45' onClick={() => { createEl(stickerNumber, 45) }}></button>
                        <button className='send_item_sticker_46' onClick={() => { createEl(stickerNumber, 46) }}></button>
                        <button className='send_item_sticker_47' onClick={() => { createEl(stickerNumber, 47) }}></button>
                        <button className='send_item_sticker_48' onClick={() => { createEl(stickerNumber, 48) }}></button>
                        <button className='send_item_sticker_49' onClick={() => { createEl(stickerNumber, 49) }}></button>
                        <button className='send_item_sticker_50' onClick={() => { createEl(stickerNumber, 50) }}></button>
                        <button className='send_item_sticker_51' onClick={() => { createEl(stickerNumber, 51) }}></button>
                        <button className='send_item_sticker_52' onClick={() => { createEl(stickerNumber, 52) }}></button>
                        <button className='send_item_sticker_53' onClick={() => { createEl(stickerNumber, 53) }}></button>
                        <button className='send_item_sticker_54' onClick={() => { createEl(stickerNumber, 54) }}></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Send;