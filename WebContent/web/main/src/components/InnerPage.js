import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import { Adsense } from '@ctrl/react-adsense';
import './InnerPage.css';
import ShareBt from './ShareBt';

function InnerPage() {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.userData);
    const letterData = useSelector((state) => state.letterData);
    const isNamePage = useSelector((state) => state.isNamePage);
    const ModalCreateUrl = useSelector((state) => state.ModalCreateUrl);

    useEffect(() => {
        if (userData.openDate === 0) {
            dispatch({ type: 'CHANGE_ISNAMEPAGE', data: false });
        } else if (userData.openDate !== 0) {
            dispatch({ type: 'CHANGE_ISNAMEPAGE', data: true });
        };
    }, [dispatch, userData.openDate]);

    // case of a new member
    function SetSignal() {
        const isSendSignal = useSelector((state) => state.isSendSignal);
        const [stringUserNickname, setStringUserNickname] = useState(String(userData.nickname));
        const [lengthUserNickname, setLengthUserNickname] = useState(Number(userData.nickname.length));
        const [startMonth, setStartMonth] = useState(null);
        const [startHours, setStartHours] = useState(null);
        const [endMonth, setEndMonth] = useState(null);
        const [endHours, setEndHours] = useState(null);

        function settingStartMonth() {
            setInterval(function () {
                let now = new Date();
                let months = now.getMonth() + 1;
                let days = now.getDate();
                setStartMonth(months + '-' + days);
            }, 300);
        };

        function settingStartHours() {
            setInterval(function () {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                setStartHours(hours + ':' + minutes + ':' + seconds);
            }, 300);
        };

        function settingEndtMonth() {
            setInterval(function () {
                let now = new Date();
                now.setDate(now.getDate() + 10)
                let months = now.getMonth() + 1;
                let days = now.getDate();
                setEndMonth(months + '-' + days);
            }, 300);
        };

        function settingEndHours() {
            setInterval(function () {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                setEndHours(hours + ':' + minutes + ':' + seconds);
            }, 300);
        };

        function showCreateSendSingalPage() {
            dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
            settingStartMonth();
            settingStartHours();
            settingEndtMonth();
            settingEndHours();
        };

        function fadeCreateSendSingalPage() {
            const originalUserNickname = String(userData.nickname);
            const originalUserNicknameLength = Number(userData.nickname.length);
            setStringUserNickname(originalUserNickname);
            setLengthUserNickname(originalUserNicknameLength);
            dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
        };

        function sendSignal() {
            if (window.confirm(`${stringUserNickname}(이)란 이름으로 행성을 개설할까요?`)) {
                const now = new Date();
                now.setDate(now.getDate() + 10);
                const finalDate = Number(now.getTime());
                dispatch({ type: 'CHANGE_USERNICKNAME', data: stringUserNickname });
                dispatch({ type: 'CHANGE_OPENDATE', data: finalDate });
                dispatch({ type: 'CHANGE_ISSENDSIGNAL', data: !isSendSignal });
                dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl });
            };
        };

        return (
            <React.Fragment>
                <div className='noname_outContainer'>
                    <h3>아직 신호를 보내지 않았습니다.</h3>
                    <div className='noname_sendSignal' onClick={showCreateSendSingalPage}>신호 보내기</div>
                    <div className={isSendSignal ? "noname_sendSignal_outContainer" : "noname_sendSignal_outContainer_fade"}>
                        <div className='noname_sendSignal_innerTitle'>
                            <img alt='back_icon' className='noname_sendSignal_innerTitle_backIcon' src='https://cdn-icons-png.flaticon.com/512/8287/8287941.png' onClick={fadeCreateSendSingalPage}></img>
                            <p className='noname_sendSignal_innerTitle_p'>안녕, 잘 지내?
                                <br></br>
                                나는…
                            </p>
                        </div>
                        <div className='noname_sendSignal_innerName'>
                            <p className='noname_sendSignal_innerName_p'>행성의 이름</p>
                            <input id='input_userName' maxLength={10} onChange={(e) => {
                                setLengthUserNickname(e.target.value.length);
                                setStringUserNickname(e.target.value);
                            }} value={stringUserNickname}></input><span className='inputUserNameLength'>{lengthUserNickname}/10</span>
                        </div>
                        <div className='noname_sendSignal_line'></div>
                        <div className='noname_sendSignal_innerTime'>
                            <p className='noname_sendSignal_innerTime_p'>시작 - 마감</p>
                            <h6 className='noname_sendSignal_innerTime_h6'>PLATER는 10일의 시간을 제공합니다.</h6>
                        </div>
                        <div className='noname_sendSignal_innerTime_view'>
                            <div className='noname_sendSignal_innerTime_view_start'>
                                <p className='noname_sendSignal_innerTime_view_p'>시작</p>
                                <p className='noname_sendSignal_innerTime_view_month'>{startMonth}</p>
                                <p className='noname_sendSignal_innerTime_view_hours'>{startHours}</p>
                            </div>
                            <div className='noname_sendSignal_innerTime_view_pause'>~</div>
                            <div className='noname_sendSignal_innerTime_view_end'>
                                <p className='noname_sendSignal_innerTime_view_p'>마감</p>
                                <p className='noname_sendSignal_innerTime_view_month'>{endMonth}</p>
                                <p className='noname_sendSignal_innerTime_view_hours'>{endHours}</p>
                            </div>
                        </div>
                        <div className='noname_sendSignal_line'></div>
                        <div className='noname_sendSignal_innerNotice'>
                            <div className='noname_sendSignal_innerNotice_innerbox'>
                                <p className='noname_sendSignal_innerNotice_p'>알림 설정</p>
                                <h6 className='noname_sendSignal_innerNotice_h6'>카카오톡을 통해 D-Day 알림을 받습니다.</h6>
                            </div>
                            <div>
                                <img alt='button_notice' className='noname_sendSignal_innerNotice_button' src='https://cdn-icons-png.flaticon.com/512/5720/5720465.png' onClick={() => { alert('아직 서비스 준비 중입니다.') }}></img>
                            </div>
                        </div>
                        <div className='noname_sendSignal_startDiv'>
                            <div className='noname_sendSignal_startDiv_button' onClick={sendSignal}>시작하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // notify after receiver creation
    function CreateNameURL() {

        function urlCopy() {
            let Dummy_Tag = document.createElement("input");
            let Current_URL = window.location.href;
            document.body.appendChild(Dummy_Tag);
            Dummy_Tag.value = Current_URL;
            Dummy_Tag.select();
            document.execCommand("copy");
            document.body.removeChild(Dummy_Tag);
            alert("링크가 복사되었습니다.\nThe link has been copied.");
            dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl });
        };

        return (
            <React.Fragment>
                <div className={ModalCreateUrl ? "yesNameUrl" : "yesNameUrl_fade"}>
                    <div className='yesNameUrl_outContainer'>
                        <img alt='close' className='yesNameUrl_img' src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onClick={() => { dispatch({ type: 'CHANGE_MODALCREATEURL', data: !ModalCreateUrl }); }}></img>
                        <p className='yesNameUrl_title'>행성 개설 완료!</p>
                        <p className='yesNameUrl_p'>신호를 공유해 편지를 받아보세요!</p>
                        <div className='yesNameUrl_button' onClick={urlCopy}>링크 복사</div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // case of an old member
    function ShowMemberInf() {
        const [Dday, setDday] = useState(Number(userData.openDate));

        const setDDay = useCallback(() => {
            let count = setInterval(function () {
                let now = new Date().getTime();
                let distance = Dday - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDday(days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초');
                if (distance < 0) {
                    clearInterval(count);
                    setDday("편지를 열어보세요.");
                };
            }, 0);
        }, [Dday]);

        useEffect(() => {
            setDDay();
        }, []);

        return (
            <React.Fragment>
                <div className='yesname_outContainer'>
                    <h3>작은별-{userData.nickname}</h3>
                    <h4>남은 시간</h4>
                    <h4>{Dday}</h4>
                </div>
            </React.Fragment>
        );
    };

    function LetterBox() {
        const isLetter = useSelector((state) => state.isLetter);
        const [render, serRender] = useState(0);
        const [list, setList] = useState([<span key={1} style={{ color: "white" }}>Loading...</span>]);
        const [list2, setList2] = useState([<span key={2} style={{ color: "white" }}>Loading...</span>]);
        const [list3, setList3] = useState([<span key={3} style={{ color: "white" }}>Loading...</span>]);
        const [list4, setList4] = useState([<span key={4} style={{ color: "white" }}>Loading...</span>]);

        function changeIcon(i) {
            const copyLetter = { ...letterData };
            copyLetter[i].letterIcon = 'open';
            dispatch({ type: 'CHANGE_LETTERDATA', data: copyLetter });
            serRender(i);
        };

        function enterDesc(i) {
            let copyText = letterData[i].letterContent;
            let enterText = document.querySelector('.textbox');
            enterText.value = copyText;
        };

        function enterAuthor(i) {
            let copyAuthor = `보낸이. ${letterData[i].letterWriter}`;
            let enterAuthor = document.querySelector('.author');
            enterAuthor.value = copyAuthor;
        };

        function attach(i) {
            let copyStrickerArray = letterData[i].sticker;
            for (let i = 0; i < copyStrickerArray.length; i++) {
                let item = document.createElement('div');
                let stage = document.querySelector('.letter_textarea');
                item.setAttribute('id', '_' + copyStrickerArray[i].stickerId);
                item.setAttribute('class', 'item' + copyStrickerArray[i].stickerIcon);
                stage.appendChild(item);
                setTranslate(Math.round(Number(copyStrickerArray[i].stickerX)), Math.round((Number(copyStrickerArray[i].stickerY))), item);
            };
            setTimeout(() => {
                enterDesc(i);
            }, 10);
            setTimeout(() => {
                enterAuthor(i);
            }, 10);
            function setTranslate(xPos, yPos, el) {
                el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            };
        };

        // function attachRemove(i) {
        //     let removeText = '';
        //     let enterRemove = document.querySelector('.letter_textarea');
        //     enterRemove.value = removeText;
        //     let copyStrickerArray = letterData[i].sticker;
        //     for (let i = 0; i < copyStrickerArray.length; i++) {
        //       document.getElementById('_' + copyStrickerArray[i].letterId).remove();
        //     };
        //   };

        function openLetter(i) {
            let now = new Date().getTime();
            let distance = userData.openDate - now;
            if (distance > 0) {
                dispatch({ type: 'CHANGE_ISLETTER', data: true });
                changeIcon(i);
                setTimeout(() => {
                    attach(i);
                }, 10);
            } else {
                alert('아직 읽지 못합니다.')
            };
        };

        let settings = {
            draggable: false,
            swipe: true,
            arrows: true,
            dots: true,
            infinite: false,
            speed: 1250,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        useEffect(() => {
            const list = [];
            const list2 = [];
            const list3 = [];
            const list4 = [];

            if (letterData.length === 0) {
                setList(<span>Nothing...</span>);
                setList2(<span>Nothing...</span>);
                setList3(<span>Nothing...</span>);
                setList4(<span>Nothing...</span>);
            } else if (letterData.length <= 9) {
                for (let i = 0; i < letterData.length; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList(list);
                    setList2(<span>Nothing...</span>);
                    setList3(<span>Nothing...</span>);
                    setList4(<span>Nothing...</span>);
                };
            } else if (letterData.length <= 18) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList(list);
                };
                for (let i = 9; i < letterData.length; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList2(list2);
                    setList3(<span>Nothing...</span>);
                    setList4(<span>Nothing...</span>);
                };
            } else if (letterData.length <= 27) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList(list);
                };
                for (let i = 9; i < 18; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList2(list2);
                };
                for (let i = 18; i < letterData.length; i++) {
                    let li = letterData[i];
                    list3.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList3(list3);
                    setList4(<span>Nothing...</span>);
                };
            } else if (letterData.length <= 36) {
                for (let i = 0; i < 9; i++) {
                    let li = letterData[i];
                    list.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList(list);
                };
                for (let i = 9; i < 18; i++) {
                    let li = letterData[i];
                    list2.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList2(list2);
                };
                for (let i = 18; i < 27; i++) {
                    let li = letterData[i];
                    list3.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList3(list3);
                };
                for (let i = 27; i < letterData.length; i++) {
                    let li = letterData[i];
                    list4.push(React.Children.toArray(<button key={li.letterId} data-id={li.letterId} className={"letter" + li.letterIcon} onClick={() => { openLetter(i) }}></button>));
                    setList4(list4);
                };
            } else {
                console.log(letterData.length);
            };
        }, [render]);

        function Letter() {
            return (
                <React.Fragment>
                    <div className={isLetter ? 'letter_outContainer' : 'letter_outContainer_fade'}>
                        <div className="letter_textarea">
                            <img alt='close' className='letter_close' src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onClick={() => {
                                // openLetter(render);
                                // setTimeout(() => {
                                //     dispatch({ type: 'CHANGE_ISLETTER', data: false });
                                // }, 10);
                                dispatch({ type: 'CHANGE_ISLETTER', data: false });
                            }}></img>
                            <textarea className="textbox" value={''} readOnly disabled>
                            </textarea>
                            <input type='text' className='author' value={''} readOnly disabled></input>
                        </div>
                        <div style={{ marginTop: "1rem" }}>
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

        return (
            <React.Fragment>
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
            {isNamePage ? <LetterBox></LetterBox> : <span></span>}
            <CreateNameURL></CreateNameURL>
        </React.Fragment>
    );
};

export default InnerPage;