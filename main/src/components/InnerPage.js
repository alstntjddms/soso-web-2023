import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import { Adsense } from '@ctrl/react-adsense';
// import Typewriter from 'typewriter-effect/dist/core';
import './InnerPage.css';
import ShareBt from './ShareBt';
import Restart from './Restart';
import Refresh from './Refresh';

function InnerPage() {
    const dispatch = useDispatch();
    // For component Letter box
    const [render, setRender] = useState(-1);
    const [slickPage, setSlickPage] = useState(0);
    // 편지지 기본 설정 값
    const [setStyle, setSetStyle] = useState({ 'fontSize': '', 'fontFamily': '', 'color': '', 'textAlign': '', 'backgroundImage': '' });
    const userID = useSelector((state) => state.userID);
    const ShareUserID = useSelector((state) => state.ShareUserID);
    const userData = useSelector((state) => state.userData);
    const letterData = useSelector((state) => state.letterData);
    const isNamePage = useSelector((state) => state.isNamePage);
    const ModalCreateUrl = useSelector((state) => state.ModalCreateUrl);
    const isPopUpCopyLink = useSelector((state) => state.isPopUpCopyLink);
    const isYesName = useSelector((state) => state.isYesName);
    const isRestart = useSelector((state) => state.isRestart);
    const isImagePreload = useSelector((state) => state.isImagePreload);
    const [startBtn, setStartBtn] = useState(true);

    // 사용자 개설일 확인 기능
    useEffect(() => {
        if (userData.openDate === 0) {
            dispatch({ type: 'CHANGE_ISNAMEPAGE', data: false });
        } else if (userData.openDate !== 0) {
            dispatch({ type: 'CHANGE_ISNAMEPAGE', data: true });
        };
    }, [dispatch, userData.openDate]);

    // 신규 사용자 용 Component
    function SetSignal() {
        const isSendSignal = useSelector((state) => state.isSendSignal);
        const [isPopUpOpenPlanet, setIsPopUpOpenPlanet] = useState(false);
        const [isPopUpOpenPlanetName, setIsPopUpOpenPlanetName] = useState(false);
        const [stringUserNickname, setStringUserNickname] = useState(String(userData.nickname));
        const [lengthUserNickname, setLengthUserNickname] = useState(Number(userData.nickname.length));
        const [startMonth, setStartMonth] = useState(null);
        const [startHours, setStartHours] = useState(null);
        const [endMonth, setEndMonth] = useState(null);
        const [endHours, setEndHours] = useState(null);

        // (팝업) 행성 개설 시 이름 기재 여부 확인
        function PopUpOpenPlanetNoName() {
            return (
                <React.Fragment>
                    <div className={isPopUpOpenPlanetName ? "ispopupopenplanetnoname" : "ispopupopenplanetnoname_fade"}>
                        <div className='ispopupopenplanetnoname_outContainer'>
                            <p className='ispopupopenplanetnoname_title'>행성 이름이 비어있습니다.</p>
                            <p className='ispopupopenplanetnoname_p'>이름이 없는 행성은 조금 울적할지도 몰라요.</p>
                            <div className='ispopupopenplanetnoname_innerBox'>
                                <div className='ispopupopenplanetnoname_button_cancel' onClick={() => {
                                    setIsPopUpOpenPlanetName(!isPopUpOpenPlanetName);
                                }}>돌아가기</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };

        // (팝업) 행성 개설 안내
        function PopUpOpenPlanet() {
            // 공유 가능 사용자 아이디 발급 기능
            async function RequestShareUserID(userID) {
                setStartBtn(false);
                await fetch(`${process.env.REACT_APP_SHARE_USERID}${userID}`, {
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
                        dispatch({ type: 'CHANGE_SHAREUSERID', data: String(userData) });
                    })
                    .catch((error) => {
                        // error 무시하고 진행, 실제 공유 가능 링크 생성 시 별도 기능 재실행 예정
                    });
                await sendSignal_confirm();
            };

            return (
                <React.Fragment>
                    <div className={isPopUpOpenPlanet ? "ispopupopenplanet" : "ispopupopenplanet_fade"}>
                        <div className='ispopupopenplanet_outContainer'>
                            <p className='ispopupopenplanet_title'>{stringUserNickname}(이)란 행성을</p>
                            <p className='ispopupopenplanet_title'>개설할까요?</p>
                            <p className='ispopupopenplanet_p'>행성의 이름과</p>
                            <p className='ispopupopenplanet_p'>시간을 확인해주세요.</p>
                            <div className='ispopupopenplanet_innerBox'>
                                <div className='ispopupopenplanet_button_signOut' onClick={() => { setIsPopUpOpenPlanet(!isPopUpOpenPlanet); }}>취소</div>
                                <div className='ispopupopenplanet_button_cancel' onClick={() => {
                                    setIsPopUpOpenPlanet(!isPopUpOpenPlanet);
                                    RequestShareUserID(userID);
                                }}>개설하기</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };

        // '일' 시작 생성 기능
        function settingStartMonth() {
            setInterval(function () {
                let now = new Date();
                let months = now.getMonth() + 1;
                let days = now.getDate();
                setStartMonth(months + '-' + days);
            }, 300);
        };

        // '시간' 시작 생성 기능
        function settingStartHours() {
            setInterval(function () {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                setStartHours(hours + ':' + minutes + ':' + seconds);
            }, 300);
        };

        // '일' 마감 생성 기능
        function settingEndtMonth() {
            setInterval(function () {
                let now = new Date();
                now.setDate(now.getDate() + 10)
                let months = now.getMonth() + 1;
                let days = now.getDate();
                setEndMonth(months + '-' + days);
            }, 300);
        };

        // '시간' 마감 생성 기능
        function settingEndHours() {
            setInterval(function () {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                setEndHours(hours + ':' + minutes + ':' + seconds);
            }, 300);
        };

        // 일자 생성 기능 통합
        function showCreateSendSingalPage() {
            dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
            settingStartMonth();
            settingStartHours();
            settingEndtMonth();
            settingEndHours();
        };

        // (팝업) 행성 개설 안내 비활성화 기능
        function fadeCreateSendSingalPage() {
            const originalUserNickname = String(userData.nickname);
            const originalUserNicknameLength = Number(userData.nickname.length);
            setStringUserNickname(originalUserNickname);
            setLengthUserNickname(originalUserNicknameLength);
            dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
        };

        // 사용자 행성 생성 정보 전달 기능
        async function sendSignal_confirm() {
            // 사용자 개설일 정보 전달 기능
            await fetch(`${process.env.REACT_APP_REGISTER_OPENDATE}`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userID)
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error();
                    };
                    const now = new Date();
                    now.setDate(now.getDate() + 10);
                    const finalDate = Number(now.getTime());
                    dispatch({ type: 'CHANGE_OPENDATE', data: finalDate });
                    // 사용자 별명 정보 전달 기능
                    fetch(`${process.env.REACT_APP_REGISTER_NICKNAME}${userID}/`, {
                        method: 'PATCH',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(String(stringUserNickname))
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw new Error();
                            };
                            dispatch({ type: 'CHANGE_USERNICKNAME', data: stringUserNickname });
                            dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
                            dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl });
                            dispatch({ type: 'CHANGE_ISYESNAME', data: true });
                        })
                        .catch((error) => {
                            setStartBtn(true);
                            alert('서버가 불안정 하여 행성 개설(행성 이름)에 실패했습니다. 다시 시도해주세요.');
                            fadeCreateSendSingalPage();
                        })
                })
                .catch((error) => {
                    setStartBtn(true);
                    alert('서버가 불안정 하여 행성 개설(개설 일자)에 실패했습니다. 다시 시도해주세요.');
                    fadeCreateSendSingalPage();
                });
        };

        return (
            <React.Fragment>
                <PopUpOpenPlanet></PopUpOpenPlanet>
                <PopUpOpenPlanetNoName></PopUpOpenPlanetNoName>
                <div className='noname_outContainer'>
                    <p>아직 신호를 보내지</p>
                    <p>않았습니다.</p>
                    <div className='noname_sendSignal' onClick={showCreateSendSingalPage}>신호 보내기</div>
                    <div className={isSendSignal ? "noname_sendSignal_outContainer" : "noname_sendSignal_outContainer_fade"}>
                        <div className='noname_sendSignal_innerTitle'>
                            <img alt='back_icon' className='noname_sendSignal_innerTitle_backIcon' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/back.png?raw=true' onClick={fadeCreateSendSingalPage}></img>
                            <p className='noname_sendSignal_innerTitle_p'>안녕하세요.
                                <br></br>
                                제 이름은...
                            </p>
                        </div>
                        <div className='noname_sendSignal_innerName'>
                            <p className='noname_sendSignal_innerName_p'>행성의 이름</p>
                            <input id='input_userName' maxLength={10} onChange={(e) => {
                                setLengthUserNickname(e.target.value.length);
                                setStringUserNickname(e.target.value);
                            }} value={stringUserNickname}></input><span className='inputUserNameLength'>{lengthUserNickname}/10</span>
                        </div>
                        <div className='noname_sendSignal_innerTime'>
                            <p className='noname_sendSignal_innerTime_p'>시작 & 마감</p>
                            <h6 className='noname_sendSignal_innerTime_h6'>10일 동안 편지를 받을 수 있습니다.</h6>
                        </div>
                        <div className='noname_sendSignal_innerTime_view'>
                            <div className='noname_sendSignal_innerTime_view_start'>
                                <div className='noname_sendSignal_innerTime_view_bolt_div'>
                                    <div className='noname_sendSignal_innerTime_view_bolt_1'></div>
                                    <div className='noname_sendSignal_innerTime_view_bolt_2'></div>
                                </div>
                                <p className='noname_sendSignal_innerTime_view_p'>Start</p>
                                <p className='noname_sendSignal_innerTime_view_month'>{startMonth}</p>
                                <p className='noname_sendSignal_innerTime_view_hours'>{startHours}</p>
                            </div>
                            <div className='noname_sendSignal_innerTime_view_pause'></div>
                            <div className='noname_sendSignal_innerTime_view_end'>
                                <div className='noname_sendSignal_innerTime_view_bolt_div'>
                                    <div className='noname_sendSignal_innerTime_view_bolt_1'></div>
                                    <div className='noname_sendSignal_innerTime_view_bolt_2'></div>
                                </div>
                                <p className='noname_sendSignal_innerTime_view_p'>End</p>
                                <p className='noname_sendSignal_innerTime_view_month'>{endMonth}</p>
                                <p className='noname_sendSignal_innerTime_view_hours'>{endHours}</p>
                            </div>
                        </div>
                        <div className='noname_sendSignal_innerNotice'>
                        </div>
                        <div className='noname_sendSignal_startDiv'>
                            <div className={startBtn ? 'noname_sendSignal_startDiv_button' : 'noname_sendSignal_startDiv_button_fade'} onClick={
                                () => {
                                    if (lengthUserNickname === 0) {
                                        setIsPopUpOpenPlanetName(!isPopUpOpenPlanetName);
                                    } else {
                                        setIsPopUpOpenPlanet(!isPopUpOpenPlanet);
                                    };
                                }}>시작하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // (팝업) 행성 개설 완료 안내
    function CreateNameURL() {
        // 공유 가능한 사용자 아이디 요청 기능
        function RequestShareUserIDforUrlCopy() {
            fetch(`${process.env.REACT_APP_SHARE_USERID}${userID}`, {
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
                    dispatch({ type: 'CHANGE_SHAREUSERID', data: String(userData) });
                })
                .catch((error) => {
                    alert('정상적으로 공유 가능한 사용자 링크를 받아오지 못했습니다. 공유하기 버튼을 이용해주세요.');
                    dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl });
                });
        };
        // 사용자 공유 URL 제작 기능
        function urlCopy() {
            RequestShareUserIDforUrlCopy();
            setTimeout(() => {
                let Dummy_Tag = document.createElement("input");
                let Current_URL = `${process.env.REACT_APP_BASIC_URL2}userID=${ShareUserID}`;
                document.body.appendChild(Dummy_Tag);
                Dummy_Tag.value = Current_URL;
                Dummy_Tag.select();
                document.execCommand("copy");
                document.body.removeChild(Dummy_Tag);
                dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl });
                dispatch({ type: 'CHANGE_ISPOPUPCOPYLINK', data: !isPopUpCopyLink });
            }, 100);
        };
        // (팝업) 링크 복사
        function PopUpCopyLink() {
            return (
                <React.Fragment>
                    <div className={isPopUpCopyLink ? "isPopupCopyLink" : "isPopupCopyLink_fade"}>
                        <div className='isPopupCopyLink_outContainer'>
                            <p className='isPopupCopyLink_title'>신호 복사 완료!</p>
                            <p className='isPopupCopyLink_p'>링크가 복사 되었어요.</p>
                            <div className='isPopupCopyLink_button_signOut' onClick={() => { dispatch({ type: 'CHANGE_ISPOPUPCOPYLINK', data: !isPopUpCopyLink }); }}>확인</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };

        return (
            <React.Fragment>
                <PopUpCopyLink></PopUpCopyLink>
                <div className={ModalCreateUrl ? "yesNameUrl" : "yesNameUrl_fade"}>
                    <div className='yesNameUrl_outContainer'>
                        <p className='yesNameUrl_title'>행성 개설 완료!</p>
                        <p className='yesNameUrl_p'>행성 개설이 완료되었습니다.</p>
                        <p className='yesNameUrl_p'>신호를 공유해 편지를 받아보세요.</p>
                        <div className='yesNameUrl_innerBox'>
                            <div className='yesNameUrl_button_signOut' onClick={() => { dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl }); }}>확인</div>
                            <div className='yesNameUrl_button_cancel' onClick={urlCopy}>신호 복사하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // 기존 사용자 용 Component
    function ShowMemberInf() {
        // 사용자 남은 시간 표현 기능
        const [Dday, setDday] = useState(Number(userData.openDate));
        const setDDay = useCallback(() => {
            let count = setInterval(function () {
                let now = new Date().getTime();
                let distance = Dday - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDday(days + ' 일 ' + hours + ' : ' + minutes + ' : ' + seconds);
                if (distance < 0) {
                    clearInterval(count);
                    dispatch({ type: 'CHANGE_ISSHAREBT', data: false });
                    dispatch({ type: 'CHANGE_ISSHARE', data: false });
                    dispatch({ type: 'CHANGE_ISRESTART', data: true });
                    dispatch({ type: 'CHANGE_ISYESNAME', data: false });
                    setDday("만료된 행성");
                };
            }, 0);
        }, [Dday]);

        // (랜더링 직후)
        useEffect(() => {
            setDDay();
        }, []);

        return (
            <React.Fragment>
                <div className='yesname_outContainer'>
                    <h3><span>{userData.nickname}</span></h3>
                    <div className={isYesName ? '' : 'yesname_outContainer_div_fade'}>
                        <Refresh></Refresh>
                        <h4>남은 시간</h4>
                    </div>
                    <h4 className={isYesName ? '' : 'h4_new'} >{Dday}</h4>
                </div>
            </React.Fragment>
        );
    };

    // 편지 박스 Component
    function LetterBox() {
        const isNotYetLetter = useSelector((state) => state.isNotYetLetter);
        const isLetterBlockConfirm = useSelector((state) => state.isLetterBlockConfirm);
        const isLetter = useSelector((state) => state.isLetter);
        const [list, setList] = useState([<span key={1} style={{ color: "white" }}>Loading...</span>]);
        const [list2, setList2] = useState([<span key={2} style={{ color: "white" }}>Loading...</span>]);
        const [list3, setList3] = useState([<span key={3} style={{ color: "white" }}>Loading...</span>]);
        const [list4, setList4] = useState([<span key={4} style={{ color: "white" }}>Loading...</span>]);

        // 편지 박스 위치 설정 기능
        function setSlickPageNum(i) {
            if (i <= 8) {
                setSlickPage(0);
            } else if (i >= 9 && i <= 17) {
                setSlickPage(1);
            } else if (i >= 18 && i <= 26) {
                setSlickPage(2);
            } else if (i >= 27 && i <= 35) {
                setSlickPage(3);
            };
        };

        // (팝업) 편지 차단
        function LetterBlockConfirm() {
            return (
                <React.Fragment>
                    <div className={isLetterBlockConfirm ? "isLetterBlockConfirm" : "isLetterBlockConfirm_fade"}>
                        <div className='isLetterBlockConfirm_outContainer'>
                            <p className='isLetterBlockConfirm_title'>이 편지를</p>
                            <p className='isLetterBlockConfirm_title'>차단하겠습니까?</p>
                            <p className='isLetterBlockConfirm_p'>차단된 편지는 다시 읽을 수 없고</p>
                            <p className='isLetterBlockConfirm_p'>서비스질 개선에 사용됩니다.</p>
                            <div className='isLetterBlockConfirm_innerBox'>
                                <div className='isLetterBlockConfirm_button_signOut' onClick={() => {
                                    dispatch({ type: 'CHANGE_ISLETTER', data: false });
                                    dispatch({ type: 'CHANGE_ISLETTERBLOCKCONFIRM', data: false });
                                }}>취소</div>
                                <div className='isLetterBlockConfirm_button_cancel' onClick={() => {
                                    letterBlcok(render);
                                    dispatch({ type: 'CHANGE_ISLETTERBLOCKCONFIRM', data: false });
                                }}>차단하기</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };

        // 편지 차단 기능(1)
        function letterBlcok(i) {
            const copyLetter = [...letterData];
            copyLetter[i].letterIcon = 'block';
            dispatch({ type: 'CHANGE_LETTERDATA', data: copyLetter });
            dispatch({ type: 'CHANGE_ISLETTER', data: false });
            setRender(-1);
            shareLetterBlock(i);
        };

        // 편지 차단 기능(2)
        function shareLetterBlock(i) {
            fetch(`${process.env.REACT_APP_REGISTER_BLOCK}${String(letterData[i].letterId)}`, {
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
                .then((data) => {
                })
                .catch((error) => {
                    alert('편지 차단이 정상적으로 진행되지 않았습니다. 다시 시도해주세요.');
                });
        };

        // 편지지 기본 설정 초기화 기능
        function resetLetterStyle() {
            let newStyle = { ...setStyle };
            newStyle['fontFamily'] = '';
            newStyle['textAlign'] = '';
            newStyle['fontSize'] = '';
            newStyle['color'] = '';
            newStyle['backgroundImage'] = '';
            setSetStyle(newStyle);
        };

        // 편지지 설정 변경 기능
        async function changeLetterStyle(i, newLetterData) {
            let newStyle = { ...setStyle };
            newStyle['fontFamily'] = newLetterData[i].letterFont;
            newStyle['textAlign'] = newLetterData[i].letterTextAlign;
            newStyle['fontSize'] = newLetterData[i].letterFontSize;
            newStyle['color'] = newLetterData[i].letterFontColor;
            newStyle['backgroundImage'] = newLetterData[i].letterPaper;
            setSetStyle(newStyle);
        };

        // 편지 내용 삽입 및 타이핑 효과 기능
        function enterDesc(i, checkTyping, newLetterData) {
            if (checkTyping === false) {
                let copyText = [newLetterData[i].letterContent];
                let enterText = document.querySelector('.textbox');
                let typingBool = false;
                let typingIdx = 0;
                let liIndex = 0;
                setTimeout(() => {
                    let arrayData = copyText[Object.keys(copyText)[liIndex]];
                    let arraySplitData = arrayData.split('');
                    let liLength = copyText.length;
                    if (typingBool === false) {
                        typingBool = true;
                        var tyInt = setInterval(typing, 150);
                    } function typing() {
                        if (typingIdx < arrayData.length + 1) {
                            enterText.value = arrayData.slice(undefined, typingIdx);
                            typingIdx++;
                        } else {
                            if (liIndex < liLength - 1) {
                                liIndex++;
                                typingIdx = 0;
                                typingBool = false;
                                arrayData = copyText[Object.keys(copyText)[liIndex]]
                                arraySplitData = arrayData.split('');
                                clearInterval(tyInt);
                                setTimeout(function () {
                                    tyInt = setInterval(typing, 150);
                                }, 250);
                            } else if (liIndex === liLength - 1) {
                                clearInterval(tyInt);
                                copyText.splice(0, 1);
                                typingBool = false;
                                typingIdx = 0;
                                liIndex = 0;
                            };
                        };
                    };
                }, 250);
                // let copyText = letterData[i].letterContent;
                // let content = document.querySelector('.textbox');
                // new Typewriter(content, {
                //     strings: copyText,
                //     autoStart: true
                // });
            } else {
                let copyText = newLetterData[i].letterContent;
                let enterText = document.querySelector('.textbox');
                enterText.value = copyText;
            };
        };

        // 작성자 추가 기능
        function enterAuthor(i, newLetterData) {
            let copyAuthor = `${newLetterData[i].letterWriter}`;
            let enterAuthor = document.querySelector('.author');
            enterAuthor.value = copyAuthor;
        };

        // 스티커 추가 기능
        function attach(i, checkTyping, newLetterData) {
            function setTranslate(xPos, yPos, el) {
                el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            };
            let copyStrickerArray = newLetterData[i].sticker;
            for (let i = 0; i < copyStrickerArray.length; i++) {
                let item = document.createElement('div');
                let stage = document.querySelector('.letter_textarea');
                item.setAttribute('id', '_' + copyStrickerArray[i].stickerId);
                item.setAttribute('class', 'item' + copyStrickerArray[i].stickerIcon);
                stage.appendChild(item);
                setTranslate(Math.round(Number(copyStrickerArray[i].stickerX)), Math.round((Number(copyStrickerArray[i].stickerY))), item);
            };
            enterDesc(i, checkTyping, newLetterData);
            enterAuthor(i, newLetterData);
        };

        // 편지 열기 기능
        async function openLetter(i) {
            setRender(i);
            dispatch({ type: 'CHANGE_ISSHAREBT', data: false });
            let now = new Date().getTime();
            let distance = userData.openDate - now;
            if (distance <= 0) {
                dispatch({ type: 'CHANGE_ISLETTER', data: true });
                setSlickPageNum(i);
                await RequestThisLetterData(i);
            } else {
                dispatch({ type: 'CHANGE_ISNOTYETLETTER', data: true });
            };
        };

        // 편지 정보 요청 기능
        async function RequestThisLetterData(i) {
            let newEachLetter = null;
            if (letterData[i].userId === '') {
                let eachLetter = {};
                await fetch(`${process.env.REACT_APP_LETTER_DATA}${String(letterData[i].letterId)}`, {
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
                    .then((data) => {
                        newEachLetter = Object.assign(eachLetter, data);
                    })
                    .catch((error) => {
                        alert('편지 내용을 정상적으로 받아오지 못했습니다. 다시 편지를 열어주세요.');
                        dispatch({ type: 'CHANGE_ISLETTER', data: false });
                    });
                // await stickerSum(i, newEachLetter);
            };
            checkLoad(i, letterData);
        };

        // 편지 정보와 스티커 정보를 병합하는 기능
        async function stickerSum(i, newEachLetter) {
            const newLetterData = [...letterData];
            const originalCheckTyping = letterData[i].letterReadYn;
            await fetch(`${process.env.REACT_APP_STICKER_DATA}${String(letterData[i].letterId)}`, {
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
                .then((data) => {
                    newEachLetter.sticker = data;
                    newLetterData[i] = newEachLetter;
                    dispatch({ type: 'CHANGE_LETTERDATA', data: newLetterData });
                    checkLoad(i, newLetterData, originalCheckTyping);
                })
                .catch((error) => {
                    alert('편지 내 스티커 정보를 정상적으로 받아오지 못했습니다. 다시 편지를 열어주세요.');
                    dispatch({ type: 'CHANGE_ISLETTER', data: false });
                });
            // await checkLoad(i, newLetterData, originalCheckTyping);
        };

        // 편지지 로드 확인 기능
        async function checkLoad(i, newLetterData, originalCheckTyping) {
            let src = newLetterData[i].letterPaper.replace(/^url\(['"](.+)['"]\)/, '$1');
            let image = new Image();
            image.addEventListener('load', async function () {
                dispatch({ type: 'CHANGE_ISIMAGEPRELOAD', data: !isImagePreload });
                let checkTyping = originalCheckTyping;
                await changeLetterStyle(i, newLetterData);
                setTimeout(() => {
                    attach(i, checkTyping, newLetterData);
                }, 100);
            });
            image.src = src;
        };

        let settings = {
            initialSlide: slickPage,
            draggable: false,
            swipe: true,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 1250,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        // (랜더링 직후) 편지 배열 표현 기능
        useEffect(() => {
            const list = [];
            const list2 = [];
            const list3 = [];
            const list4 = [];

            if (letterData.length === 0) {
                setList(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                setList2(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                setList3(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                setList4(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
            } else if (letterData.length <= 9) {
                for (let i = 0; i < letterData.length; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList(list);
                    setList2(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                    setList3(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                    setList4(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                };
            } else if (letterData.length <= 18) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList(list);
                };
                for (let i = 9; i < letterData.length; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList2(list2);
                    setList3(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                    setList4(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                };
            } else if (letterData.length <= 27) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList(list);
                };
                for (let i = 9; i < 18; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList2(list2);
                };
                for (let i = 18; i < letterData.length; i++) {
                    let li = letterData[i];
                    list3.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList3(list3);
                    setList4(<span><div className='letterEmptyIcon'></div><span>아직 편지가</span><br></br><br></br><span>도착하지 않았어요.</span></span>);
                };
            } else if (letterData.length <= 36) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList(list);
                };
                for (let i = 9; i < 18; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList2(list2);
                };
                for (let i = 18; i < 27; i++) {
                    let li = letterData[i];
                    list3.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList3(list3);
                };
                for (let i = 27; i < letterData.length; i++) {
                    let li = letterData[i];
                    list4.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}><div className={li.letterReadYn ? 'new_letter_icon_open' : 'new_letter_icon'}></div></button>));
                    setList4(list4);
                };
            } else {
            };
        }, []);

        // (팝업) 편지지
        function Letter() {
            return (
                <React.Fragment>
                    <div className={isLetter ? 'letter_outContainer' : 'letter_outContainer_fade'}>
                        <div className='letter_textarea_top'>
                            <div className='letter_textarea_author_title'>From.</div>
                            <input type='text' className='author' value={''} readOnly></input>
                            <div className='letter_icon_box'>
                                <div className='letter_block' onClick={() => {
                                    dispatch({ type: 'CHANGE_ISLETTERBLOCKCONFIRM', data: true });
                                    dispatch({ type: 'CHANGE_ISIMAGEPRELOAD', data: !isImagePreload });
                                    resetLetterStyle();
                                }}></div>
                                <div className='letter_close' onClick={() => {
                                    dispatch({ type: 'CHANGE_ISLETTER', data: false });
                                    dispatch({ type: 'CHANGE_ISIMAGEPRELOAD', data: !isImagePreload });
                                    resetLetterStyle();
                                }}></div>
                            </div>
                        </div>
                        <div className="letter_textarea">
                            {/* <div style={setStyle} className="textbox" value={''} readOnly>
                            </div> */}
                            <textarea style={setStyle} className="textbox" value={''} readOnly>
                            </textarea>
                            <span className={isImagePreload ? 'preloading' : 'preloading_fade'}>편지를 불러오고 있습니다...</span>
                        </div>
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
                </React.Fragment>
            );
        };

        // (팝업) 편지를 읽지 못함을 알리는 안내
        function NotYetLetter() {
            return (
                <React.Fragment>
                    <div className={isNotYetLetter ? "isNotYetLetter" : "isNotYetLetter_fade"}>
                        <div className='isNotYetLetter_outContainer'>
                            <p className='isNotYetLetter_title'>지구에서 편지가</p>
                            <p className='isNotYetLetter_title'>오고 있습니다.</p>
                            <p className='isNotYetLetter_p'>남은 시간이 모두 지나면</p>
                            <p className='isNotYetLetter_p'>열어 볼 수 있어요.</p>
                            <div className='isNotYetLetter_button_signOut' onClick={() => {
                                dispatch({ type: 'CHANGE_ISNOTYETLETTER', data: false });
                            }}>확인</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        };

        return (
            <React.Fragment>
                <NotYetLetter></NotYetLetter>
                <LetterBlockConfirm></LetterBlockConfirm>
                <Letter></Letter>
                <div className='letterBox_outContainer'>
                    <Slider {...settings}>
                        <div className='letterBox_innerContainer'>
                            <div className='letterBox_innerContainer_div'>{list}
                            </div>
                        </div>
                        <div className='letterBox_innerContainer'>
                            <div className='letterBox_innerContainer_div'>{list2}
                            </div>
                        </div>
                        <div className='letterBox_innerContainer'>
                            <div className='letterBox_innerContainer_div'>{list3}
                            </div>
                        </div>
                        <div className='letterBox_innerContainer'>
                            <div className='letterBox_innerContainer_div'>{list4}
                            </div>
                        </div>
                    </Slider>
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <ShareBt></ShareBt>
            {isNamePage ? <ShowMemberInf></ShowMemberInf> : <SetSignal></SetSignal>}
            {isRestart ? <Restart></Restart> : <span></span>}
            {isNamePage ? <LetterBox></LetterBox> : <span></span>}
            <CreateNameURL></CreateNameURL>
        </React.Fragment>
    );
};

export default InnerPage;