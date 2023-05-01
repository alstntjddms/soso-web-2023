import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [stickerArray, setStickerArray] = useState([]);
  const stickerNUM = 5;

  function notice(props) {
    alert(props);
  };

  useEffect(() => {
    let stickerBox = document.querySelector('#stickerBox').innerHTML;
    if (stickerBox === '') {
      let newStickerArray = [...stickerArray];
      for (let i = 0; i < stickerNUM; i++) {
        newStickerArray.push(React.Children.toArray(<button key={i} className={`send_item_sticker_${i}`} onClick={() => { notice(i) }}></button>));
      };
      setStickerArray(newStickerArray);
    };
  }, [])

  return (
    <React.Fragment>
      <div id='stickerBox'>{stickerArray}</div>
      <div className='container'>
        <div className='item'>첫 번째 페이지</div>
        <div className='item'>두 번째 페이지</div>
        <div className='item'>세 번째 페이지</div>
      </div>
      <div className='container2'>
        <div className='item2'>첫 번째 페이지</div>
        <div className='item2'>두 번째 페이지</div>
        <div className='item2'>세 번째 페이지</div>
      </div>
      <div className='container3'>
        <div id='item1' className='item3'></div>
        <div id='item1' className='item3_active'></div>
        <div id='item2' className='item3'></div>
        <div id='item2' className='item3_active'></div>
        <div id='item3' className='item3'></div>
        <div id='item3' className='item3_active'></div>
      </div>
    </React.Fragment>
  );
}

export default App;