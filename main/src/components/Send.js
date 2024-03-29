import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Adsense } from '@ctrl/react-adsense';
import './Send.css'

function Send() {
    // const navigater = useNavigate();
    const dispatch = useDispatch();
    const textareaFocus = useRef('');
    const isSendMain = useSelector((state) => state.isSendMain);
    const [shareUserID, setShareUserID] = useState(null);
    const text = useSelector((state) => state.text);
    const textLength = useSelector((state) => state.textLength);
    const stickerArray = useSelector((state) => state.stickerArray);
    const stickerNumber = useSelector((state) => state.stickerNumber);
    const isThirdInfo = useSelector((state) => state.isThirdInfo);
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
    const isSendingEnd = useSelector((state) => state.isSendingEnd);
    // 
    const isLetterOption = useSelector((state) => state.isLetterOption);
    const isFontFamily = useSelector((state) => state.isFontFamily);
    const isRange = useSelector((state) => state.isRange);
    const isColor = useSelector((state) => state.isColor);
    const isLetterPaper = useSelector((state) => state.isLetterPaper);
    const isSticker = useSelector((state) => state.isSticker);
    // 
    const [stickerNUM, setStickerNUM] = useState([]);
    //
    const [userNickName, setUserNickName] = useState(null);
    const [openUserOpenDate, setOpenUserOpenDate] = useState(null);
    const [userLetterCount, setUserLetterCount] = useState(null);
    // 편지 기본 설정 값
    const [styleLetter, setStyleLetter] = useState({ "fontSize": "0.875rem", "fontFamily": "SpoqaHanSansNeo-Regular", "color": "black", "textAlign": "left", "backgroundImage": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true')" });
    // 
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
    // 편지 내용 선별 DB
    const bad_word = ['<', '>', '씨발', '시발', '♡년', '병신', '개새끼', '강간', '따먹', '로리', '쇼타', '씹', '앰창', '엠창', '좆', '창남', '창녀', '창놈', '창년', '걸레', '갈보', '멍청도', '보전깨', '빨통', '쌍놈', '쌍년', '썅년', '썅놈', '자살', '자해', '육변기', '느갭', '미친년', '미친놈', '염병', '♡빻', '재기', '젖', '성괴', '호로년', '호로잡년', '조건만남', '장애년', '좆창년', '♡련', '쪽바리', '니애미', '느금마', '니애비', '피싸개', '도태남', '부랄발작', '헤으응', '한남충', '한녀', '성매매', '장애인년', '니미', '사지절단', '엿', '맘충', '짱깨', '예수쟁이', '개독교', '똥꼬충', '소추', '두창', '죽어라', '떡치', '지년', '박고', '박아', '받이'];

    // 스티커 옵션 생성 기능
    useEffect(() => {
        let stickerBox = document.querySelector('#stickerBox').innerHTML;
        const origin = 65;
        let newstickerNUM = [...stickerNUM];
        if (stickerBox === '') {
            for (let i = 0; i < origin; i++) {
                newstickerNUM.push(i);
            };
            setStickerNUM(newstickerNUM);
        };
    }, [])
    const stickerArrayOption = stickerNUM.map(function (i) {
        return <button className={`send_item_sticker_` + i} key={i} onClick={() => { createEl(stickerNumber, i) }}></button>
    });

    // (팝업) 모바일 사용 권유
    function ThirdInfo() {
        return (
            <React.Fragment>
                <div className={isThirdInfo ? "isFirstIngo_wrap" : "isFirstIngo_fade"}>
                    <div className='isFirstIngo_outContainer'>
                        <p className='isFirstIngo_title'>모바일로 접속해 주세요.</p>
                        <p className='isFirstIngo_p'>PL@TER는 모바일에 최적화 되어 있어요.</p>
                        <p className='isFirstIngo_p'>PC 등으로 접속 시 오류가 발생할 수 있어요.</p>
                        <div className='isFirstIngo_button_confirm' onClick={() => { dispatch({ type: 'CHANGE_ISTHIRDINFO', data: !isThirdInfo }); }}>확인</div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // (팝업) 편지 작성 페이지 첫 안내 
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
                                window.location.replace('/web/main');
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

    // (팝업) 편지 작성 취소
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
                                window.location.replace('/web/main');
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

    // (팝업) 편지 내용이 없는 경우
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

    // 편지 미리보기 Component
    function PreLetter() {
        const [preAuthor, setPreAuthor] = useState(author);
        const [preIsStamp, setPreIsStamp] = useState(isStamp);
        const [stampNum, setStampNum] = useState(stamp);

        // 작성자 변경 기능
        function changeAuthor(props) {
            dispatch({ type: 'CHANGE_AUTHOR', data: props });
        };

        // 우표 선택 기능(표현)
        function changeStamp() {
            dispatch({ type: 'CHANGE_ISSTAMP', data: preIsStamp });
            dispatch({ type: 'CHANGE_STAMP', data: stampNum });
        };

        // 우표 선택하는 기능
        function selectStamp(props) {
            let newStampItem = { ...preIsStamp };
            switch (props) {
                case 'stamp_1':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['a'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_2':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['b'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_3':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['c'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_4':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['d'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_5':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['e'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_6':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['f'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_7':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['g'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_8':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['h'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_9':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['i'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_10':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['j'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_11':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['k'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                case 'stamp_12':
                    Object.keys(newStampItem).forEach(key => {
                        newStampItem[key] = false;
                    });
                    newStampItem['l'] = true;
                    setPreIsStamp(newStampItem);
                    break;
                default:
                    break;
            };
        };

        // 편지 내용 선별 기능
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
                            <p className='pre_letter_autho_title' style={{ marginTop: '1.0rem' }}>우표</p>
                            <div className='pre_letter_stamp_outContainer'>
                                <div id='pre_letter_stamp_img_1' className={preIsStamp.a ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_1');
                                    setStampNum(0);
                                }}></div>
                                <div id='pre_letter_stamp_img_2' className={preIsStamp.b ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_2');
                                    setStampNum(1);
                                }}></div>
                                <div id='pre_letter_stamp_img_3' className={preIsStamp.c ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_3');
                                    setStampNum(2);
                                }}></div>
                                <div id='pre_letter_stamp_img_4' className={preIsStamp.d ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_4');
                                    setStampNum(3);
                                }}></div>
                                <div id='pre_letter_stamp_img_5' className={preIsStamp.e ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_5');
                                    setStampNum(4);
                                }}></div>
                                <div id='pre_letter_stamp_img_6' className={preIsStamp.f ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_6');
                                    setStampNum(5);
                                }}></div>
                                <div id='pre_letter_stamp_img_7' className={preIsStamp.g ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_7');
                                    setStampNum(6);
                                }}></div>
                                <div id='pre_letter_stamp_img_8' className={preIsStamp.h ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_8');
                                    setStampNum(7);
                                }}></div>
                                <div id='pre_letter_stamp_img_9' className={preIsStamp.i ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_9');
                                    setStampNum(8);
                                }}></div>
                                <div id='pre_letter_stamp_img_10' className={preIsStamp.j ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_10');
                                    setStampNum(9);
                                }}></div>
                                <div id='pre_letter_stamp_img_11' className={preIsStamp.k ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_11');
                                    setStampNum(10);
                                }}></div>
                                <div id='pre_letter_stamp_img_12' className={preIsStamp.l ? 'pre_letter_stamp_innerContainer_active' : 'pre_letter_stamp_innerContainer'} onClick={() => {
                                    selectStamp('stamp_12');
                                    setStampNum(11);
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // 미리보기 편지 제작 기능
    function makeLetter() {
        let copyStickerArray = stickerArray;
        for (let i = 0; i < copyStickerArray.length; i++) {
            let item = document.createElement('div');
            let stage = document.querySelector('.pre_letter_outContainer');
            item.setAttribute('id', '_' + copyStickerArray[i].id);
            item.setAttribute('class', 'send_item_sticker' + copyStickerArray[i].stickerIcon);
            stage.appendChild(item);
            setTranslate(Math.round(Number(copyStickerArray[i].stickerX)), Math.round((Number(copyStickerArray[i].stickerY))), item);
        };
        // 스티커 미리보기 기능
        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        };
        // 편지 내용 삽입 기능
        let copyText = text;
        let enterText = document.querySelector('.send_pre_textbox');
        enterText.value = copyText;
    };

    // 편지 보내는 중 Component(수정 중)
    function SendingPage() {
        // 최종 사용자 정보 확인 기능(open, count)
        async function finalCheck(letterData) {
            await fetch(`${process.env.REACT_APP_USER_DATA_SHARE}${shareUserID}`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error();
                    };
                    return res.json();
                })
                .then((data) => {
                    let now = new Date().getTime();
                    let distance = Number(data.userOpenDate) - now;
                    if (distance > 0) {
                        // if (distance >= 0) {
                        fetch(`${process.env.REACT_APP_LETTER_COUNT_SHARE}${shareUserID}`, {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                            .then((res) => {
                                if (!res.ok) {
                                    throw new Error();
                                };
                                return res.json();
                            })
                            .then((data) => {
                                if (Number(data) >= 36) {
                                    alert('방금 전에 행성이 편지로 가득찼습니다. Pl@ter 페이지로 이동합니다.');
                                    window.location.replace('/web/main');
                                } else {
                                    sendLetterFunc(letterData);
                                };
                            })
                            .catch((error) => {
                                alert('정상적으로 편지 발송에 실패했습니다. 잠시 후 다시 편지를 보내주세요.');
                                dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
                                dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                            })
                    } else {
                        alert('방금 전에 행성이 만료되었습니다. Pl@ter 페이지로 이동합니다.');
                        window.location.replace('/web/main');
                    };
                })
                .catch((error) => {
                    alert('정상적으로 편지 발송에 실패했습니다. 잠시 후 다시 편지를 보내주세요.');
                    dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
                    dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                });
        };
        // 편지 보내기 기능
        async function sendLetterFunc(props) {
            await fetch(`${process.env.REACT_APP_REGISTER_LETTER}`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    };
                    return res.json();
                })
                .then((data) => {
                    dispatch({ type: 'CHANGE_ISSENDINGEND', data: !isSendingEnd });
                    dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
                })
                .catch((error) => {
                    alert('서버가 불안정 하여 편지가 정상적으로 발송되지 않았습니다. 잠시 후 다시 시도해주세요.');
                    dispatch({ type: 'CHANGE_ISSENDINGPAGE', data: !isSendingPage });
                    dispatch({ type: 'CHANGE_ISPRELETTERBOX', data: !isPreLetterBox });
                });
        };
        // 편지 내용 취합 기능
        function checkLetterData() {
            let sticker = [...stickerArray];
            for (let i = 0; i < sticker.length; i++) {
                delete sticker[i].id;
            };
            let letterData = {
                'letter': {
                    'userId': String(shareUserID),
                    'letterContent': String(text),
                    'letterFont': String(styleLetter['fontFamily']),
                    'letterTextAlign': String(styleLetter['textAlign']),
                    'letterFontSize': String(styleLetter['fontSize']),
                    'letterFontColor': String(styleLetter['color']),
                    'letterPaper': String(styleLetter['backgroundImage']),
                    'letterWriter': String(author),
                    'letterIcon': String(stamp)
                },
                sticker
            };
            finalCheck(letterData);
        };

        useEffect(() => {
            setTimeout(() => {
                checkLetterData();
            }, 1000);
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
                        <h3 className='sending_page_h3'>편지 보내는 중...</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // 편지 발송 완료 Component(수정 중)
    function SendingEnd() {
        const [whenDay, setWhenDay] = useState('');
        // 편지 도착 일자 안내 기능(확인 필요)
        function noticeDay() {
            let goal = openUserOpenDate;
            let now = new Date();
            let originTime = Math.abs(goal - now.getTime());
            let originDay = Math.ceil(originTime / (1000 * 60 * 60 * 24));
            if (originDay < 1) {
                setWhenDay('잠시 후');
            } else if (originDay === 1) {
                setWhenDay('내일');
            } else {
                setWhenDay(Number(originDay) + '일 후에');
            };
        };
        // 카카오 애드 관련 기능
        useEffect(() => {
            noticeDay();
            let ins = document.createElement('ins');
            let scr = document.createElement('script');
            ins.className = 'kakao_ad_area';
            ins.style = "display:none; width:100%;";
            scr.async = 'true';
            scr.type = "text/javascript";
            scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
            ins.setAttribute('data-ad-width', '320');
            ins.setAttribute('data-ad-height', '100');
            ins.setAttribute('data-ad-unit', 'DAN-wwtMTOs6oLrop9iK');
            document.querySelector('.adfit').appendChild(ins);
            document.querySelector('.adfit').appendChild(scr);
        }, [])
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
                        <p className='sending_end_p2'>당신의 소중한 편지는 {whenDay} 도착합니다.</p>
                        <div className='sending_end_div' onClick={() => {
                            window.location.replace('/web/main');
                        }}>나도 행성 개설하기</div>
                        <br></br>
                        <div className="adfit"></div>
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

    // 편지 내용 여부 확인 기능(랜더링 직후)
    useEffect(() => {
        if (text === "") {
            setCompletion(false);
        } else {
            setCompletion(true);
        };
    }, [text]);

    // 사용자 정보 요청 기능
    function requireUserCheckData(props) {
        fetch(`${process.env.REACT_APP_USER_DATA_SHARE}${props}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((userData) => {
                setUserNickName(String(userData.userNickName));
                setOpenUserOpenDate(Number(userData.userOpenDate));
                fetch(`${process.env.REACT_APP_LETTER_COUNT_SHARE}${props}`, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error();
                        };
                        return res.json();
                    })
                    .then((letterCount) => {
                        setUserLetterCount(Number(letterCount));
                    })
                    .catch((error) => {
                        alert('서버로부터 행성 개설자의 편지함 정보를 받아오지 못했습니다. 잠시 후 다시 시도해주세요.');
                        window.location.replace('/web/main');
                    });
            })
            .catch((error) => {
                alert('서버로부터 행성 개설자 정보를 받아오지 못했습니다. 잠시 후 다시 시도해주세요.');
                window.location.replace('/web/main');
            });
    };

    // 최초 사용자 정보 확인 기능(open, count)
    function firstCheck() {
        if (openUserOpenDate !== null && userLetterCount !== null) {
            let now = new Date().getTime();
            let distance = openUserOpenDate - now;
            if (distance >= 0) {
                if (userLetterCount >= 36) {
                    alert('행성이 편지로 가득찼습니다. Pl@ter 페이지로 이동합니다.');
                    window.location.replace('/web/main');
                };
            } else {
                alert('행성이 만료되었습니다. Pl@ter 페이지로 이동합니다.');
                window.location.replace('/web/main');
            };
        };
    };

    // 사용자 공유 아이디 확인 기능(?userID=userID)
    const get_query = useCallback(() => {
        const url = document.location.href;
        const qs = url.substring(url.indexOf('?') + 1).split('&');
        const result = {};
        for (let i = 0; i < qs.length; i++) {
            qs[i] = qs[i].split('='); result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        };
        setShareUserID(qs[0][1]);
        if (qs[0][1] !== undefined) {
            requireUserCheckData(qs[0][1]);
        } else {
            alert('정상적인 접근 방법이 아닙니다. Pl@ter 페이지로 이동합니다.');
            window.location.replace('/web/main');
        };
    }, []);

    // 최초 사용자 정보 확인 기능(랜더링 직후)
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'CHANGE_ISSENDPOPUP', data: true });
            firstCheck();
        }, 500);
        // firstCheck();
    }, [openUserOpenDate, userLetterCount])

    // 사용자 공유 아이디 확인 기능(랜더링 직후) + 서버로 log 정보 보내는 기능(랜더링 직후)
    useEffect(() => {
        // 사용자 기기 확인 기능
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        } else {
            dispatch({ type: 'CHANGE_ISTHIRDINFO', data: !isThirdInfo });
        };
        get_query();
        fetch(`${process.env.REACT_APP_REGISTER_LOG}send`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
            })
            .catch((error) => {
            });
    }, [get_query]);

    // (편지 작성) 스티커 배열 추가 기능
    function locationData(data, id, X, Y, num) {
        if (id === '') {
        } else {
            if (data.length === 0) {
                data.push({ 'id': id, 'stickerX': Math.round(X), 'stickerY': Math.round(Y), 'stickerIcon': num });
                dispatch({ type: 'CHANGE_STICKER', data: data });
            } else {
                if (data.some((e) => e.id === id)) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].id === id) {
                            data[i] = { 'id': id, 'stickerX': Math.round(X), 'stickerY': Math.round(Y), 'stickerIcon': num };
                            dispatch({ type: 'CHANGE_STICKER', data: data });
                        };
                    };
                } else {
                    data.push({ 'id': id, 'stickerX': Math.round(X), 'stickerY': Math.round(Y), 'stickerIcon': num });
                    dispatch({ type: 'CHANGE_STICKER', data: data });
                };
            };
        };
    };

    // (편지 작성) 스티커 삭제(배열 포함) 기능
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
    };

    // 스티커 추가 기능
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
        // 스티커 이동 기능(1)
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
        // 스티커 이동 기능(2)
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
        // 스티커 이동 기능(3)
        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            el.style.position = "relative";
        };
        // 스티커 이동 기능(4)
        function dragEnd(e) {
            locationData(stickerArray, e.target.id, currentX, currentY, num);
            active = false;
            dragItem.style.position = "absolute";
        };
    };

    // (편지 작성) 편지 꾸미기 옵션 활성화 기능
    function activeLetterOption() {
        if (isLetterOption === false) {
            dispatch({ type: 'CHANGE_ISLETTEROPTION', data: true });
            dispatch({ type: 'CHANGE_ISFONTFAMILY', data: true });
        };
    };

    // (편지 작성) 편지 꾸미기 옵션 비활성화 기능
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

    // (편지 작성) 편지 꾸미기 상세 옵션 선택 기능
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

    // (편지 작성) 폰트 변경 기능
    function setFontFamily(props, size) {
        let newStyle = { ...styleLetter };
        newStyle['fontFamily'] = props;
        newStyle['fontSize'] = size;
        setStyleLetter(newStyle);
    };

    // (편지 작성) 정렬 변경 기능
    function setRange(props) {
        let newStyle = { ...styleLetter };
        newStyle['textAlign'] = props;
        setStyleLetter(newStyle);
    };

    // (편지 작성) 색상 변경 기능
    function setColor(props) {
        let newStyle = { ...styleLetter };
        newStyle['color'] = props;
        setStyleLetter(newStyle);
    };

    // (편지 작성) 편지지 변경 기능
    function setPaper(props) {
        let newStyle = { ...styleLetter };
        newStyle['backgroundImage'] = props;
        setStyleLetter(newStyle);
    };

    // (편지 작성) 편지 꾸미기 상세 옵션 선택 기능(표현)
    function selectLetterMenu(props) {
        let newLetterMenu = { ...letterMenu };
        switch (props) {
            case 'font':
                Object.keys(newLetterMenu).forEach(key => {
                    newLetterMenu[key] = false;
                });
                newLetterMenu['font'] = true;
                setLetterMenu(newLetterMenu);
                break;
            case 'range':
                Object.keys(newLetterMenu).forEach(key => {
                    newLetterMenu[key] = false;
                });
                newLetterMenu['range'] = true;
                setLetterMenu(newLetterMenu);
                break;
            case 'color':
                Object.keys(newLetterMenu).forEach(key => {
                    newLetterMenu[key] = false;
                });
                newLetterMenu['color'] = true;
                setLetterMenu(newLetterMenu);
                break;
            case 'paper':
                Object.keys(newLetterMenu).forEach(key => {
                    newLetterMenu[key] = false;
                });
                newLetterMenu['paper'] = true;
                setLetterMenu(newLetterMenu);
                break;
            case 'sticker':
                Object.keys(newLetterMenu).forEach(key => {
                    newLetterMenu[key] = false;
                });
                newLetterMenu['sticker'] = true;
                setLetterMenu(newLetterMenu);
                break;
            default:
                break;
        };
    };

    // (편지 작성) 폰트 변경 기능(표현)
    function selectFontItem(props) {
        let newFontItem = { ...fontItem };
        switch (props) {
            case 'fontItem_1':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['a'] = true;
                setFontItem(newFontItem);
                break;
            case 'fontItem_2':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['b'] = true;
                setFontItem(newFontItem);
                break;
            case 'fontItem_3':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['c'] = true;
                setFontItem(newFontItem);
                break;
            case 'fontItem_4':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['d'] = true;
                setFontItem(newFontItem);
                break;
            case 'fontItem_5':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['e'] = true;
                setFontItem(newFontItem);
                break;
            case 'fontItem_6':
                Object.keys(newFontItem).forEach(key => {
                    newFontItem[key] = false;
                });
                newFontItem['f'] = true;
                setFontItem(newFontItem);
                break;
            default:
                break;
        };
    };

    // (편지 작성) 정렬 변경 기능(표현)
    function selectRangeItem(props) {
        let newRangeItem = { ...rangeItem };
        switch (props) {
            case 'left':
                Object.keys(newRangeItem).forEach(key => {
                    newRangeItem[key] = false;
                });
                newRangeItem['left'] = true;
                setRangeItem(newRangeItem);
                break;
            case 'center':
                Object.keys(newRangeItem).forEach(key => {
                    newRangeItem[key] = false;
                });
                newRangeItem['center'] = true;
                setRangeItem(newRangeItem);
                break;
            case 'right':
                Object.keys(newRangeItem).forEach(key => {
                    newRangeItem[key] = false;
                });
                newRangeItem['right'] = true;
                setRangeItem(newRangeItem);
                break;
            default:
                break;
        };
    };

    // (편지 작성) 색상 변경 기능(표현)
    function selectColorItem(props) {
        let newColorItem = { ...colorItem };
        switch (props) {
            case 'color_1':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['a'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_2':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['b'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_3':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['c'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_4':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['d'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_5':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['e'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_6':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['f'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_7':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['g'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_8':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['h'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_9':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['i'] = true;
                setColorItem(newColorItem);
                break;
            case 'color_10':
                Object.keys(newColorItem).forEach(key => {
                    newColorItem[key] = false;
                });
                newColorItem['j'] = true;
                setColorItem(newColorItem);
                break;
            default:
                break;
        };
    };

    // (편지 작성) 편지지 변경 기능(표현)
    function selectPaperItem(props) {
        let newPaperItem = { ...paperItem };
        switch (props) {
            case 'paper_1':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['a'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_2':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['b'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_3':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['c'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_4':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['d'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_5':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['e'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_6':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['f'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_7':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['g'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_8':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['h'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_9':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['i'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_10':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['j'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_11':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['k'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_12':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['l'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_13':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['m'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_14':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['n'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_15':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['o'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_16':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['p'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_17':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['q'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_18':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['r'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_19':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['s'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_20':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['t'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_21':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['u'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_22':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['v'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_23':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['w'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_24':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['x'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_25':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['y'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_26':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['z'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_27':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['a1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_28':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['b1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_29':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['c1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_30':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['d1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_31':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['e1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_32':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['f1'] = true;
                setPaperItem(newPaperItem);
                break;
            case 'paper_33':
                Object.keys(newPaperItem).forEach(key => {
                    newPaperItem[key] = false;
                });
                newPaperItem['g1'] = true;
                setPaperItem(newPaperItem);
                break;
            default:
                break;
        };
    };

    // 스티커 배열, 스티커 숫자, 스티커 아이템 초기화 및 삭제 for Template
    async function initialzation() {
        let content = document.querySelector('#send_textarea').childNodes;
        delItem(content);
        function delItem(props) {
            let newData = stickerArray;
            newData.length = 0;
            let number = Number(props.length);
            dispatch({ type: 'CHANGE_STICKER', data: newData.length });
            dispatch({ type: 'CHANGE_STICKER_NUMBER', data: 0 });
            if (number > 1) {
                for (let i = 0; i < number - 1; i++) {
                    props[1].remove();
                };
            };
        };
    };

    // 스티커 추가 기능 for Template
    function stickerSetting(props) {
        for (let i = 0; i < props.length; i++) {
            createEl2(props[i].templateNum, props[i].templateIcon, props[i].templateXpos, props[i].templateYpos);
            let dragItem = document.querySelector("#id" + i);
            let active = false;
            setTranslate2(props[i].templateXpos, props[i].templateYpos, dragItem);
            dragEnd2(i, props[i].templateXpos, props[i].templateYpos, props[i].templateIcon, dragItem, active);
        };
        // 스티커 이동 기능(4)
        function dragEnd2(i, currentX, currentY, num, dragItem, active) {
            locationData(stickerArray, 'id' + i, currentX, currentY, num, dragItem);
            active = false;
            dragItem.style.position = "absolute";
        };
        // 스티커 이동 기능(3)
        function setTranslate2(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            el.style.position = "relative";
        };
        // 스티커 추가 기능
        function createEl2(props, num, xPos, yPos) {
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
            dispatch({ type: 'CHANGE_STICKER_NUMBER', data: props + 1 });
            // Function to move elements
            let dragItem = document.querySelector("#id" + props);
            let active = false;
            let currentX = xPos;
            let currentY = yPos;
            let initialX = xPos;
            let initialY = yPos;
            let xOffset = xPos;
            let yOffset = yPos;
            dragItem.addEventListener("touchstart", dragStart, false);
            dragItem.addEventListener("touchend", dragEnd, false);
            dragItem.addEventListener("touchmove", drag, false);
            dragItem.addEventListener("mousedown", dragStart, false);
            dragItem.addEventListener("mouseup", dragEnd, false);
            dragItem.addEventListener("mousemove", drag, false);
            // 스티커 이동 기능(1)
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
            // 스티커 이동 기능(2)
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
            // 스티커 이동 기능(3)
            function setTranslate(xPos, yPos, el) {
                el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
                el.style.position = "relative";
            };
            // 스티커 이동 기능(4)
            function dragEnd(e) {
                locationData(stickerArray, e.target.id, currentX, currentY, num);
                active = false;
                dragItem.style.position = "absolute";
            };
        };
    };

    // 정보 for template
    let templateArray = [
        {
            templateStyle: {
                fontSize: 0.875, fontFamily: 'SpoqaHanSansNeo-Regular', color: 'rgb(6 18 42)', textAlign: 'center', backgroundImage: "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_wrinkle.gif?raw=true')"
            }, templateArraySticker: [
                { templateNum: 0, templateIcon: 54, templateXpos: 21, templateYpos: -90 },
                { templateNum: 1, templateIcon: 54, templateXpos: -55, templateYpos: -62 },
                { templateNum: 2, templateIcon: 54, templateXpos: -66, templateYpos: -51 },
                { templateNum: 3, templateIcon: 54, templateXpos: 73, templateYpos: -59 },
                { templateNum: 4, templateIcon: 54, templateXpos: 38, templateYpos: -23 },
                { templateNum: 5, templateIcon: 54, templateXpos: 116, templateYpos: 1 },
                { templateNum: 6, templateIcon: 54, templateXpos: -93, templateYpos: 24 },
                { templateNum: 7, templateIcon: 54, templateXpos: 71, templateYpos: 49 },
                { templateNum: 8, templateIcon: 54, templateXpos: -15, templateYpos: 116 },
                { templateNum: 9, templateIcon: 53, templateXpos: 8, templateYpos: 115 }
            ]
        },
        {
            templateStyle: {
                fontSize: 0.875, fontFamily: 'SpoqaHanSansNeo-Regular', color: 'rgb(8 160 222)', textAlign: 'center', backgroundImage: "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_little_flower.gif?raw=true')"
            }, templateArraySticker: [
                { templateNum: 0, templateIcon: 38, templateXpos: -54, templateYpos: -127 },
                { templateNum: 1, templateIcon: 40, templateXpos: -90, templateYpos: -128 },
                { templateNum: 2, templateIcon: 33, templateXpos: 0, templateYpos: -123 },
                { templateNum: 3, templateIcon: 38, templateXpos: 54, templateYpos: -126 },
                { templateNum: 4, templateIcon: 40, templateXpos: 90, templateYpos: -126 },
                { templateNum: 5, templateIcon: 33, templateXpos: 0, templateYpos: 113 }
            ]
        },
        {
            templateStyle: {
                fontSize: 0.8125, fontFamily: 'NeoDunggeunmo', color: 'rgb(76 76 253)', textAlign: 'center', backgroundImage: "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_city.gif?raw=true')"
            }, templateArraySticker: [
                { templateNum: 0, templateIcon: 59, templateXpos: 77, templateYpos: -122 },
                { templateNum: 1, templateIcon: 24, templateXpos: 106, templateYpos: -132 },
                { templateNum: 2, templateIcon: 24, templateXpos: 125, templateYpos: -92 },
                { templateNum: 3, templateIcon: 24, templateXpos: -110, templateYpos: -132 },
                { templateNum: 4, templateIcon: 24, templateXpos: -123, templateYpos: -97 }
            ]
        }
    ];

    // 템플릿 설정 기능(수정 중)
    async function template(props) {
        let newStyle = { ...styleLetter };
        newStyle['fontSize'] = props.templateStyle.fontSize + 'rem';
        newStyle['fontFamily'] = props.templateStyle.fontFamily;
        newStyle['color'] = props.templateStyle.color;
        newStyle['textAlign'] = props.templateStyle.textAlign;
        newStyle['backgroundImage'] = props.templateStyle.backgroundImage;
        setStyleLetter(newStyle);
        await initialzation();
        stickerSetting(props.templateArraySticker);
    };

    return (
        <React.Fragment>
            <SendingEnd></SendingEnd>
            {isSendingPage ? <SendingPage></SendingPage> : ''}
            <PreLetter></PreLetter>
            <SendPopUp></SendPopUp>
            <SendPopUpCancel></SendPopUpCancel>
            <SendPopUpCheck></SendPopUpCheck>
            <ThirdInfo></ThirdInfo>
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
                        }}
                        >
                        </textarea>
                    </div>
                    <div className='send_textLength'>{textLength}/240</div>
                </div>
                <div className='template' onClick={() => {
                    template(templateArray[0]);
                    selectFontItem('fontItem_1');
                    selectRangeItem('center');
                    selectColorItem('color_1');
                    selectPaperItem('paper_31');
                }}></div>
                <div className='template2' onClick={() => {
                    template(templateArray[1]);
                    selectFontItem('fontItem_1');
                    selectRangeItem('center');
                    selectColorItem('color_5');
                    selectPaperItem('paper_14');
                }}></div>
                <div className='template3' onClick={() => {
                    template(templateArray[2]);
                    selectFontItem('fontItem_3');
                    selectRangeItem('center');
                    selectColorItem('color_6');
                    selectPaperItem('paper_1');
                }}></div>
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
                        <div id='paper_4' className={paperItem.d ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true\')');
                            selectPaperItem('paper_4');
                        }}><div className='send_item_paper_title'>하얀 편지지</div></div>
                        <div id='paper_7' className={paperItem.g ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_blue.gif?raw=true\')');
                            selectPaperItem('paper_7');
                        }}><div className='send_item_paper_title'>파랑 편지지</div></div>
                        <div id='paper_33' className={paperItem.g1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/papre_green.gif?raw=true\')');
                            selectPaperItem('paper_33');
                        }}><div className='send_item_paper_title'>초록 편지지</div></div>
                        <div id='paper_17' className={paperItem.q ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_orange.gif?raw=true\')');
                            selectPaperItem('paper_17');
                        }}><div className='send_item_paper_title'>주황 편지지</div></div>
                        <div id='paper_25' className={paperItem.y ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_red.gif?raw=true\')');
                            selectPaperItem('paper_25');
                        }}><div className='send_item_paper_title'>붉은 편지지</div></div>
                        <div id='paper_22' className={paperItem.v ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_purple.gif?raw=true\')');
                            selectPaperItem('paper_22');
                        }}><div className='send_item_paper_title'>보라 편지지</div></div>
                        <div id='paper_16' className={paperItem.p ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_mint.gif?raw=true\')');
                            selectPaperItem('paper_16');
                        }}><div className='send_item_paper_title'>민트 편지지</div></div>
                        <div id='paper_15' className={paperItem.o ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_magenta.gif?raw=true\')');
                            selectPaperItem('paper_15');
                        }}><div className='send_item_paper_title'>자홍 편지지</div></div>
                        <div id='paper_32' className={paperItem.f1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_yellow.gif?raw=true\')');
                            selectPaperItem('paper_32');
                        }}><div className='send_item_paper_title'>노란 편지지</div></div>
                        <div id='paper_11' className={paperItem.k ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_flower.gif?raw=true\')');
                            selectPaperItem('paper_11');
                        }}><div className='send_item_paper_title'>목화 편지지</div></div>
                        <div id='paper_23' className={paperItem.w ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_purple_pastel.gif?raw=true\')');
                            selectPaperItem('paper_23');
                        }}><div className='send_item_paper_title'>모란 편지지</div></div>
                        <div id='paper_8' className={paperItem.h ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_blue_pastel.gif?raw=true\')');
                            selectPaperItem('paper_8');
                        }}><div className='send_item_paper_title'>푸른 편지지</div></div>
                        <div id='paper_13' className={paperItem.m ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_green_pastel.gif?raw=true\')');
                            selectPaperItem('paper_13');
                        }}><div className='send_item_paper_title'>누런 편지지</div></div>
                        <div id='paper_26' className={paperItem.z ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_red_pastel.gif?raw=true\')');
                            selectPaperItem('paper_26');
                        }}><div className='send_item_paper_title'>분홍 편지지</div></div>
                        <div id='paper_18' className={paperItem.r ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_mint_pastel.gif?raw=true\')');
                            selectPaperItem('paper_18');
                        }}><div className='send_item_paper_title'>녹색 편지지</div></div>
                        <div id='paper_19' className={paperItem.s ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_pastel.gif?raw=true\')');
                            selectPaperItem('paper_19');
                        }}><div className='send_item_paper_title'>파스텔샤워 편지지</div></div>
                        <div id='paper_12' className={paperItem.l ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_green_donut.gif?raw=true\')');
                            selectPaperItem('paper_12');
                        }}><div className='send_item_paper_title'>도넛 편지지</div></div>
                        <div id='paper_28' className={paperItem.b1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_stripe.gif?raw=true\')');
                            selectPaperItem('paper_28');
                        }}><div className='send_item_paper_title'>줄무늬 편지지</div></div>
                        <div id='paper_20' className={paperItem.t ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_pink_cloud.gif?raw=true\')');
                            selectPaperItem('paper_20');
                        }}><div className='send_item_paper_title'>구름 편지지</div></div>
                        <div id='paper_27' className={paperItem.a1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_sprout.gif?raw=true\')');
                            selectPaperItem('paper_27');
                        }}><div className='send_item_paper_title'>새싹 편지지</div></div>
                        <div id='paper_14' className={paperItem.n ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_little_flower.gif?raw=true\')');
                            selectPaperItem('paper_14');
                        }}><div className='send_item_paper_title'>들꽃 편지지</div></div>
                        <div id='paper_5' className={paperItem.e ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_birthday.gif?raw=true\')');
                            selectPaperItem('paper_5');
                        }}><div className='send_item_paper_title'>생일 편지지</div></div>
                        <div id='paper_6' className={paperItem.f ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_birthday_2.gif?raw=true\')');
                            selectPaperItem('paper_6');
                        }}><div className='send_item_paper_title'>생일 편지지2</div></div>
                        <div id='paper_30' className={paperItem.d1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white_room.gif?raw=true\')');
                            selectPaperItem('paper_30');
                        }}><div className='send_item_paper_title'>하얀방 편지지</div></div>
                        <div id='paper_9' className={paperItem.i ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_cheese.gif?raw=true\')');
                            selectPaperItem('paper_9');
                        }}><div className='send_item_paper_title'>치즈 편지지</div></div>
                        <div id='paper_1' className={paperItem.a ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_city.gif?raw=true\')');
                            selectPaperItem('paper_1');
                        }}><div className='send_item_paper_title'>도시 편지지</div></div>
                        <div id='paper_3' className={paperItem.c ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_space.gif?raw=true\')');
                            selectPaperItem('paper_3');
                        }}><div className='send_item_paper_title'>우주 편지지</div></div>
                        <div id='paper_10' className={paperItem.j ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_error.gif?raw=true\')');
                            selectPaperItem('paper_10');
                        }}><div className='send_item_paper_title'>오류 편지지</div></div>
                        <div id='paper_21' className={paperItem.u ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_postit.gif?raw=true\')');
                            selectPaperItem('paper_21');
                        }}><div className='send_item_paper_title'>쪽지 편지지</div></div>
                        <div id='paper_2' className={paperItem.b ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_curce.gif?raw=true\')');
                            selectPaperItem('paper_2');
                        }}><div className='send_item_paper_title'>저주 편지지</div></div>
                        <div id='paper_31' className={paperItem.e1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_wrinkle.gif?raw=true\')');
                            selectPaperItem('paper_31');
                        }}><div className='send_item_paper_title'>구겨진 편지지</div></div>
                        <div id='paper_29' className={paperItem.c1 ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_vivid.gif?raw=true\')');
                            selectPaperItem('paper_29');
                        }}><div className='send_item_paper_title'>비비드 편지지</div></div>
                        <div id='paper_24' className={paperItem.x ? 'send_item_paper_active' : 'send_item_paper'} onClick={() => {
                            setPaper('url(\'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_rainbow.gif?raw=true\')');
                            selectPaperItem('paper_24');
                        }}><div className='send_item_paper_title'>무지개 편지지</div></div>
                    </div>
                    <div id='stickerBox' className={isSticker ? 'send_sticker_active' : 'send_sticker'}>
                        {stickerArrayOption}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Send;