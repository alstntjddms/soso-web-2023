import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './Send.css'

function Send() {
    const navigater = useNavigate();
    const dispatch = useDispatch();
    const textareaFocus = useRef('');
    const userID = useSelector((state) => state.userID);
    const text = useSelector((state) => state.text);
    const textLength = useSelector((state) => state.textLength);
    const stickerArray = useSelector((state) => state.stickerArray);
    const stickerNumber = useSelector((state) => state.stickerNumber);

    const isSendPopUp = useSelector((state) => state.isSendPopUp);

    const isLetterOption = useSelector((state) => state.isLetterOption);
    const isFontFamily = useSelector((state) => state.isFontFamily);
    const isRange = useSelector((state) => state.isRange);
    const isColor = useSelector((state) => state.isColor);
    const isLetterPaper = useSelector((state) => state.isLetterPaper);
    const isSticker = useSelector((state) => state.isSticker);

    const [styleLetter, setStyleLetter] = useState({ "fontFamily": "GangwonEdu_OTFBoldA", "color": "black", "textAlign": "left", "backgroundImage": "url(https://t1.daumcdn.net/cfile/tistory/991CD6365C6D05C432)" });

    const [fontItem_1, setFontItem_1] = useState(false);
    const [fontItem_2, setFontItem_2] = useState(false);
    const [fontItem_3, setFontItem_3] = useState(false);
    const [fontItem_4, setFontItem_4] = useState(false);
    const [fontItem_5, setFontItem_5] = useState(false);
    const [fontItem_6, setFontItem_6] = useState(false);



    function SendPopUp() {
        return (
            <React.Fragment>
                <div className={isSendPopUp ? 'send_popUp' : 'send_popUp_fade'}>
                    <div className='send_popUp_outContainer'>
                        <div className='send_popUp_InnerContainer'>
                            <h3>{userID}님의 행성</h3>
                            <h4>안녕하세요! 이곳은</h4>
                            <h4>{userID}님의 행성이에요.</h4>
                            <div className='send_popUP_send_btn' onClick={() => {
                                dispatch({ type: 'CHANGE_ISSENDPOPUP', data: !isSendPopUp });
                            }}>편지쓰기</div>
                            <div className='send_popUP_main_btn' onClick={() => {
                                navigater('/main');
                            }}>행성 만들기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    function PreLetter() {
        return (
            <React.Fragment>
                <div>
                    <div className='pre_letter_outContainer'>
                        <textarea style={styleLetter} className='send_pre_textbox' readOnly></textarea>
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
            item.setAttribute('class', 'send_item' + copyStickerArray[i].class);
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
            navigater('/main');
        };
    }, [dispatch, navigater]);

    useEffect(() => {
        get_query();
        textareaFocus.current.focus();
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
        item.setAttribute('class', 'send_item' + num);
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
                if (currentX >= 140 || currentY >= 140 || currentX <= -140 || currentY <= -140) {
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
    function setFontFamily(props) {
        let newStyle = { ...styleLetter };
        newStyle['fontFamily'] = props;
        setStyleLetter(newStyle);
    };

    // change color
    function setColor(props) {
        let newStyle = { ...styleLetter };
        newStyle['color'] = props;
        setStyleLetter(newStyle);
    };

    // font_item select
    function selectFontItem(props) {
        switch (props) {
            case 'fontItem_1':
                setFontItem_1(true);
                setFontItem_2(false);
                setFontItem_3(false);
                setFontItem_4(false);
                setFontItem_5(false);
                setFontItem_6(false);
                break;
            case 'fontItem_2':
                setFontItem_1(false);
                setFontItem_2(true);
                setFontItem_3(false);
                setFontItem_4(false);
                setFontItem_5(false);
                setFontItem_6(false);
                break;
            case 'fontItem_3':
                setFontItem_1(false);
                setFontItem_2(false);
                setFontItem_3(true);
                setFontItem_4(false);
                setFontItem_5(false);
                setFontItem_6(false);
                break;
            case 'fontItem_4':
                setFontItem_1(false);
                setFontItem_2(false);
                setFontItem_3(false);
                setFontItem_4(true);
                setFontItem_5(false);
                setFontItem_6(false);
                break;
            case 'fontItem_5':
                setFontItem_1(false);
                setFontItem_2(false);
                setFontItem_3(false);
                setFontItem_4(false);
                setFontItem_5(true);
                setFontItem_6(false);
                break;
            case 'fontItem_6':
                setFontItem_1(false);
                setFontItem_2(false);
                setFontItem_3(false);
                setFontItem_4(false);
                setFontItem_5(false);
                setFontItem_6(true);
                break;
            default:
                break;
        };
    };

    return (
        <React.Fragment>
            {/* <PreLetter></PreLetter> */}
            <SendPopUp></SendPopUp>
            <div className='send_top_menu'>
                <img alt='backIMG' src='https://cdn-icons-png.flaticon.com/512/130/130882.png'></img>
                <h3>To. {userID}</h3>
                <span onClick={makeLetter}>완성하기</span>
            </div>
            <div id="send_textarea">
                <textarea style={styleLetter} ref={textareaFocus} className="send_textbox" maxLength={100} placeholder='편지를 작성해주세요.(100자 이내)' onChange={(e) => {
                    dispatch({ type: 'CHANGE_TEXTLENGTH', data: e.target.value.length });
                    dispatch({ type: 'CHANGE_TEXT', data: e.target.value });
                }}>
                </textarea>
                <div className='send_textLength'>{textLength}/100</div>
            </div>
            {/* <div>
                <div style={{ position: 'relative', left: '1rem' }}>
                    <button className='send_btn0' onClick={() => { createEl(stickerNumber, 0) }}></button>
                    <button className='send_btn1' onClick={() => { createEl(stickerNumber, 1) }}></button>
                    <button className='send_btn2' onClick={() => { createEl(stickerNumber, 2) }}></button>
                </div>
            </div> */}



            <div className='send_option_button' onClick={activeLetterOption}></div>

            <div className={isLetterOption ? 'send_letter_option_active' : 'send_letter_option'} >
                <div className='send_letter_option_innerContainer'>
                    <div className='send_letter_option_menu'>
                        <div className='send_letter_menu' onClick={() => { changeLetterOption('CHANGE_ISFONTFAMILY') }}>글꼴</div>
                        <div className='send_letter_menu' onClick={() => { changeLetterOption('CHANGE_ISRANGE') }}>정렬</div>
                        <div className='send_letter_menu' onClick={() => { changeLetterOption('CHANGE_ISCOLOR') }}>색상</div>
                        <div className='send_letter_menu' onClick={() => { changeLetterOption('CHANGE_ISLETTERPAPER') }}>편지지</div>
                        <div className='send_letter_menu' onClick={() => { changeLetterOption('CHANGE_ISSTICKER') }}>스티커</div>
                    </div>
                    <div className='send_letter_menu_close' onClick={inactiveLetterOption}>
                        ×
                    </div>
                </div>
                <div className={isFontFamily ? 'send_font_active' : 'send_font'}>
                    <div className={fontItem_1 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SpoqaHanSansNeo-Regular' }} onClick={() => {
                        setFontFamily('SpoqaHanSansNeo-Regular');
                        selectFontItem('fontItem_1');
                    }}>
                        <div className='send_item_font_title'>Spoqa Han Sans Neo R</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem_2 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'GyeonggiBatang' }} onClick={() => {
                        setFontFamily('GyeonggiBatang');
                        selectFontItem('fontItem_2');
                    }}>
                        <div className='send_item_font_title'>경기천년바탕 R</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem_3 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'NeoDunggeunmo' }} onClick={() => {
                        setFontFamily('NeoDunggeunmo');
                        selectFontItem('fontItem_3');
                    }}>
                        <div className='send_item_font_title'>Neo 둥근모</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem_4 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'Saying_tobe_strong' }} onClick={() => {
                        setFontFamily('Saying_tobe_strong');
                        selectFontItem('fontItem_4');
                    }}>
                        <div className='send_item_font_title'>힘내라는 말보단</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem_5 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'ROEHOE-CHAN' }} onClick={() => {
                        setFontFamily('ROEHOE-CHAN');
                        selectFontItem('fontItem_5');
                    }}>
                        <div className='send_item_font_title'>노회찬체</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem_6 ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SBAggroB' }} onClick={() => {
                        setFontFamily('SBAggroB');
                        selectFontItem('fontItem_6');
                    }}>
                        <div className='send_item_font_title'>어그로체 L</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                </div>
                <div className={isColor ? 'send_color_active' : 'send_color'}>
                    <div className='send_item' onClick={() => { setColor('red') }}>●</div>
                    <div className='send_item' onClick={() => { setColor('black') }}>●</div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default Send;