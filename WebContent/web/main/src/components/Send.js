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
    const [letterMenu, setLetterMenu] = useState({
        font: false,
        range: false,
        color: false,
        paper: false,
        sticker: false
    });
    const [fontItem, setFontItem] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false
    });
    const [rangeItem, setRangeItem] = useState({
        left: false,
        center: false,
        right: false
    });
    const [colorItem, setColorItem] = useState({
        a: false,
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
                                textareaFocus.current.focus();
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

            <div className='send_option_button' onClick={() => {
                activeLetterOption();
                selectLetterMenu('font');
            }}></div>

            <div className={isLetterOption ? 'send_letter_option_active' : 'send_letter_option'} >
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
                    <div className='send_letter_menu_close' onClick={() => {
                        inactiveLetterOption();
                        selectLetterMenu('font');
                    }}>
                        ×
                    </div>
                </div>
                <div className={isFontFamily ? 'send_font_active' : 'send_font'}>
                    <div className={fontItem.a ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SpoqaHanSansNeo-Regular' }} onClick={() => {
                        setFontFamily('SpoqaHanSansNeo-Regular');
                        selectFontItem('fontItem_1');
                    }}>
                        <div className='send_item_font_title'>Spoqa Han Sans Neo R</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem.b ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'GyeonggiBatang' }} onClick={() => {
                        setFontFamily('GyeonggiBatang');
                        selectFontItem('fontItem_2');
                    }}>
                        <div className='send_item_font_title'>경기천년바탕 R</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem.c ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'NeoDunggeunmo' }} onClick={() => {
                        setFontFamily('NeoDunggeunmo');
                        selectFontItem('fontItem_3');
                    }}>
                        <div className='send_item_font_title'>Neo 둥근모</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem.d ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'Saying_tobe_strong' }} onClick={() => {
                        setFontFamily('Saying_tobe_strong');
                        selectFontItem('fontItem_4');
                    }}>
                        <div className='send_item_font_title'>힘내라는 말보단</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem.e ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'ROEHOE-CHAN' }} onClick={() => {
                        setFontFamily('ROEHOE-CHAN');
                        selectFontItem('fontItem_5');
                    }}>
                        <div className='send_item_font_title'>노회찬체</div>
                        <div className='send_item_font_content'>안녕, 플래터</div>
                    </div>
                    <div className={fontItem.f ? 'send_item_font_active' : 'send_item_font'} style={{ fontFamily: 'SBAggroB' }} onClick={() => {
                        setFontFamily('SBAggroB');
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
            </div>

        </React.Fragment>
    );
};

export default Send;