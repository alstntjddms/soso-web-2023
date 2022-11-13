import React, { useCallback, useEffect, useState, useRef } from 'react';
// import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const textareaFocus = useRef('');
  const userID = useSelector((state) => state.userID);
  const text = useSelector((state) => state.text);
  const textLength = useSelector((state) => state.textLength);
  const stickerArray = useSelector((state) => state.stickerArray);
  const stickerNumber = useSelector((state) => state.stickerNumber);
  const letterOption = useSelector((state) => state.letterOption);
  const fontOption = useSelector((state) => state.fontOption);
  const colorOption = useSelector((state) => state.colorOption);
  const letterPaperOption = useSelector((state) => state.letterPaperOption);
  const letterBadge = useSelector((state) => state.letterBadge);
  const stickerOption = useSelector((state) => state.stickerOption);

  const btnFont = useSelector((state) => state.btnFont);
  const btnColor = useSelector((state) => state.btnColor);

  const dispatch = useDispatch();

  // request_userData from fetch
  function request_userData(userid) {
    console.log(userid);
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
      dispatch({ type: 'ADD_USERID', data: result.userID });
      request_userData(result.userID);
    } else {
      dispatch({ type: 'ADD_USERID', data: 'userID가 없습니다.' });
    };
  }, [dispatch]);

  // 
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
    }
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
    let stage = document.querySelector('#textarea');
    item.setAttribute('id', 'id' + props);
    item.setAttribute('class', 'item' + num);
    itemClose.setAttribute('class', 'close');
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
          alert('Please put a sticker on the letter paper.');
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

  // 
  function attach() {
    let copyData = stickerArray;
    for (let i = 0; i < copyData.length; i++) {
      let item = document.createElement('div');
      let stage = document.querySelector('.outContainer');
      item.setAttribute('id', '_' + copyData[i].id);
      item.setAttribute('class', 'item' + copyData[i].class);
      stage.appendChild(item);
      setTranslate(Math.round(Number(copyData[i].X)), Math.round((Number(copyData[i].Y))), item);
    };

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    };

    // Enter text
    let copyText = text;
    let enterText = document.querySelector('.textarea');
    enterText.value = copyText;
  };

  function attachRemove() {
    let copyText = '';
    let enterText = document.querySelector('.textarea');
    enterText.value = copyText;
    for (let i = 0; i < stickerArray.length; i++) {
      document.getElementById('_' + stickerArray[i].id).remove();
    };
  };

  const [styleLetter, setStyleLetter] = useState({ "color": "black", "fontFamily": "GangwonEdu_OTFBoldA", "border": "2px solid orange" });

  function setFontFamily(props) {
    let newStyle = { ...styleLetter };
    newStyle['fontFamily'] = props;
    setStyleLetter(newStyle);
  };

  function setColor(props) {
    let newStyle = { ...styleLetter };
    newStyle['color'] = props;
    setStyleLetter(newStyle);
  };

  function setBorder(props) {
    let newStyle = { ...styleLetter };
    newStyle['border'] = props;
    setStyleLetter(newStyle);
  };

  // 

  useEffect(() => {
    get_query();
    textareaFocus.current.focus();
  }, [get_query]);

  // 

  function showLetterOption(props) {
    if (letterOption === false) {
      dispatch({ type: 'CHANGE_LETTER_OPTION', data: true });
      dispatch({ type: props, data: true });
    };
  };

  function nonshowLetterOption() {
    if (letterOption === true) {
      dispatch({ type: 'CHANGE_LETTER_OPTION', data: false });
      dispatch({ type: 'CHANGE_FONT_FAMILY', data: false });
      dispatch({ type: 'CHANGE_COLOR', data: false });
    };
  };

  function changeLetterOption(props) {
    switch (props) {
      case 'CHANGE_FONT_FAMILY':
        dispatch({ type: 'CHANGE_FONT_FAMILY', data: true });
        dispatch({ type: 'CHANGE_COLOR', data: false });
        break;
      case 'CHANGE_COLOR':
        dispatch({ type: 'CHANGE_FONT_FAMILY', data: false });
        dispatch({ type: 'CHANGE_COLOR', data: true });
        break;
      default:
        break;
    };
  };

  function selectBTNFont(props) {
    switch (props) {
      case 'CHANGE_BTN_FONT':
        dispatch({ type: 'CHANGE_BTN_FONT', data: true });
        dispatch({ type: 'CHANGE_BTN_COLOR', data: false });
        break;
      case 'CHANGE_BTN_COLOR':
        dispatch({ type: 'CHANGE_BTN_FONT', data: false });
        dispatch({ type: 'CHANGE_BTN_COLOR', data: true });
        break;
      default:
        break;
    };
  };

  return (
    <React.Fragment>
      <h5>userID : {userID}</h5>
      <div>
        <div style={{ display: "none" }}>
          <div className='outContainer'>
            <textarea style={styleLetter} className='textarea' readOnly></textarea>
          </div>
        </div>
        <div id="textarea">
          <textarea style={styleLetter} ref={textareaFocus} className="textbox" maxLength={189} placeholder='편지를 작성해주세요.(189자 이내)' onChange={(e) => {
            dispatch({ type: 'CHANGE_TEXTLENGTH', data: e.target.value.length });
            dispatch({ type: 'CHANGE_TEXT', data: e.target.value });
          }}>
          </textarea>
          <div className='textLength'>{textLength}/189</div>
        </div>
        {/* <br></br>
        <div style={{ position: 'relative', left: '1rem' }}>
          <button className='btn0' onClick={() => { createEl(stickerNumber, 0) }}></button>
          <button className='btn1' onClick={() => { createEl(stickerNumber, 1) }}></button>
          <button className='btn2' onClick={() => { createEl(stickerNumber, 2) }}></button>
          <br></br>
          <button className='red' onClick={() => { setColor('red') }}></button>
          <button className='black' onClick={() => { setColor('black') }}></button>
          <button className='font1' onClick={() => { setFontFamily('GangwonEdu_OTFBoldA') }}></button>
          <button className='font2' onClick={() => { setFontFamily('MonoplexKR-Italic') }}></button>
          <button className='border1' onClick={() => { setBorder('2px solid blue') }}></button>
          <button className='border2' onClick={() => { setBorder('2px solid orange') }}></button>
        </div>
        <br></br>
        <button style={{ position: 'relative', left: '2rem' }} onClick={attach}>a preview of a letter</button>
        <button style={{ position: 'relative', left: '2rem' }} onClick={attachRemove}>to delete preview of a letter</button> */}
      </div>
      <br></br>
      <div>
        <div>
          <button onClick={() => { showLetterOption('CHANGE_FONT_FAMILY') }}>서체</button>
          <button onClick={() => { showLetterOption('CHANGE_COLOR') }}>색</button>
          <button>font</button>
        </div>
        <div>
          <button>font</button>
          <button>font</button>
        </div>
      </div>
      <div className={letterOption ? 'letter_option_active' : 'letter_option'} >
        <div className='letter_option_innerContainer'>
          <div className='menu_title'>
            <div className='menu_item' onClick={() => { changeLetterOption('CHANGE_FONT_FAMILY') }}>서체</div>
            <div className='menu_item' onClick={() => { changeLetterOption('CHANGE_COLOR') }}>색</div>
            <div className='menu_item'>편지지</div>
            <div className='menu_item'>편지 배지</div>
            <div className='menu_item'>스티커</div>
          </div>
          <div className='menu_close' onClick={nonshowLetterOption}>
            ×
          </div>
        </div>
        <div className={fontOption ? 'font_option_active' : 'font_option'}>
          <div style={{ fontFamily: "GangwonEdu_OTFBoldA" }} className='font_item' onClick={() => { setFontFamily('GangwonEdu_OTFBoldA') }}>강원교육모두체</div>
          <div style={{ fontFamily: "MonoplexKR-Italic" }} className='font_item' onClick={() => { setFontFamily('MonoplexKR-Italic') }}>모노플렉스</div>
          <div style={{ fontFamily: "Tenada" }} className='font_item' onClick={() => { setFontFamily('Tenada') }}>태나다체</div>
          <div style={{ fontFamily: "KOFIHDrLEEJWTTF-B" }} className='font_item' onClick={() => { setFontFamily('KOFIHDrLEEJWTTF-B') }}>KOFIH이종욱체</div>
          <div style={{ fontFamily: "Humanbumsuk" }} className='font_item' onClick={() => { setFontFamily('Humanbumsuk') }}>휴먼범석체</div>
          <div style={{ fontFamily: "HSGooltokki" }} className='font_item' onClick={() => { setFontFamily('HSGooltokki') }}>HS굴토끼체</div>
          <div style={{ fontFamily: "FUNFLOWSURVIVORKR" }} className='font_item' onClick={() => { setFontFamily('FUNFLOWSURVIVORKR') }}>펀플로생존자</div>
          <div style={{ fontFamily: "FlowerSalt" }} className='font_item' onClick={() => { setFontFamily('FlowerSalt') }}>꽃소금체</div>
        </div>
        <div className={colorOption ? 'color_option_active' : 'color_option'}>
          <div style={{ color: "black", fontSize: "2.5rem" }} className={btnFont ? 'font_item_active' : 'font_item'} onClick={() => { setColor('black'); selectBTNFont('CHANGE_BTN_FONT') }}>●</div>
          <div style={{ color: "red", fontSize: "2.5rem" }} className={btnColor ? 'font_item_active' : 'font_item'} onClick={() => { setColor('red'); selectBTNFont('CHANGE_BTN_COLOR') }}>●</div>
          <div style={{ color: "blue", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('blue') }}>●</div>
          <div style={{ color: "green", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('green') }}>●</div>
          <div style={{ color: "yellow", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('yellow') }}>●</div>
          <div style={{ color: "pink", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('pink') }}>●</div>
          <div style={{ color: "violet", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('violet') }}>●</div>
          <div style={{ color: "gray", fontSize: "2.5rem" }} className='font_item' onClick={() => { setColor('gray') }}>●</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;