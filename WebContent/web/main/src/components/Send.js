import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import './Send.css'

function Send() {
    // const navigater = useNavigate();
    const isSendMain = useSelector((state) => state.isSendMain);
    const dispatch = useDispatch();
    const textareaFocus = useRef('');
    const userID = useSelector((state) => state.userID);
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
    const [styleLetter, setStyleLetter] = useState({ "fontSize": "0.875rem", "fontFamily": "SpoqaHanSansNeo-Regular", "color": "black", "textAlign": "left", "backgroundImage": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.png?raw=true')" });
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
        d: true
    });

    const bad_word = ['<', '>', '씨발', '시발', '♡년', '병신', '개새끼', '강간', '따먹', '로리', '쇼타', '씹', '앰창', '엠창', '좆', '창남', '창녀', '창놈', '창년', '걸레', '갈보', '멍청도', '보전깨', '빨통', '쌍놈', '쌍년', '썅년', '썅놈', '자살', '자해', '육변기', '느갭', '미친년', '미친놈', '염병', '♡빻', '재기', '젖', '성괴', '호로년', '호로잡년', '조건만남', '장애년', '좆창년', '♡련', '쪽바리', '니애미', '느금마', '니애비', '피싸개', '도태남', '부랄발작', '헤으응', '한남충', '한녀', '성매매', '장애인년', '니미', '사지절단', '엿', '맘충', '짱깨', '예수쟁이', '개독교', '똥꼬충', '소추', '두창', '죽어라', '떡치', '지년', '박고', '박아', '받이'];

    function SendPopUp() {
        return (
            <React.Fragment>
                <div className={isSendPopUp ? "isSendPopUp" : "isSendPopUp_fade"}>
                    <div className='isSendPopUp_outContainer'>
                        <p className='isSendPopUp_title'>〈 {userID}님의 행성 〉</p>
                        <p className='isSendPopUp_p'>어서오세요! 이곳은</p>
                        <p className='isSendPopUp_p'>{userID}님의 행성입니다.</p>
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
            slidesToScroll: 1
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
            dispatch({ type: 'CHANGE_USERID', data: result.userID });
        } else {
            alert('정상적인 접근 방법이 아닙니다. Pl@ter 페이지로 이동합니다.');
            window.location.replace('/main');
        };
    }, [dispatch]);

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
                setPaperItem(newPaperItem);
                break;
            case 'paper_2':
                newPaperItem['a'] = false;
                newPaperItem['b'] = true;
                newPaperItem['c'] = false;
                newPaperItem['d'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_3':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = true;
                newPaperItem['d'] = false;
                setPaperItem(newPaperItem);
                break;
            case 'paper_4':
                newPaperItem['a'] = false;
                newPaperItem['b'] = false;
                newPaperItem['c'] = false;
                newPaperItem['d'] = true;
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
                    <h3>To. {userID}</h3>
                    <span onClick={() => {
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
                        <textarea style={styleLetter} ref={textareaFocus} className="send_textbox" maxLength={400} placeholder='편지를 작성해주세요.(400자 이내)' onChange={(e) => {
                            dispatch({ type: 'CHANGE_TEXTLENGTH', data: e.target.value.length });
                            dispatch({ type: 'CHANGE_TEXT', data: e.target.value });
                        }}>
                        </textarea>
                    </div>
                    <div className='send_textLength'>{textLength}/400</div>
                </div>

                <div className='send_option_button' onClick={() => {
                    activeLetterOption();
                    selectLetterMenu('font');
                }}></div>
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
                            setFontFamily('Saying_tobe_strong', '1.0rem');
                            selectFontItem('fontItem_4');
                        }}>
                            <div className='send_item_font_title'>힘내라는 말보단</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.e ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'ROEHOE-CHAN' }} onClick={() => {
                            setFontFamily('ROEHOE-CHAN', '0.875rem');
                            selectFontItem('fontItem_5');
                        }}>
                            <div className='send_item_font_title'>노회찬체</div>
                            <div className='send_item_font_content'>안녕, 플래터</div>
                        </div>
                        <div className={fontItem.f ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SBAggroB' }} onClick={() => {
                            setFontFamily('SBAggroB', '0.8125rem');
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
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_space.png?raw=true\')');
                            selectPaperItem('paper_3');
                        }}><div className='send_item_paper_title'>우주 편지지</div></div>
                        <div id='paper_4' className={paperItem.d ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.png?raw=true\')');
                            selectPaperItem('paper_4');
                        }}><div className='send_item_paper_title'>하얀 편지지</div></div>
                    </div>
                    <div className={isSticker ? 'send_sticker_active' : 'send_sticker'}>
                        <button className='send_item_sticker_0' onClick={() => { createEl(stickerNumber, 0) }}></button>
                        <button className='send_item_sticker_1' onClick={() => { createEl(stickerNumber, 1) }}></button>
                        <button className='send_item_sticker_2' onClick={() => { createEl(stickerNumber, 2) }}></button>
                        <button className='send_item_sticker_3' onClick={() => { createEl(stickerNumber, 3) }}></button>
                        <button className='send_item_sticker_4' onClick={() => { createEl(stickerNumber, 4) }}></button>
                        <button className='send_item_sticker_5' onClick={() => { createEl(stickerNumber, 5) }}></button>
                        <button className='send_item_sticker_6' onClick={() => { createEl(stickerNumber, 6) }}></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Send;