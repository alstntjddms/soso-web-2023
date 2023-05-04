import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {

  useEffect(() => {
    // let stickerBox = document.querySelector('#stickerBox').innerHTML;
    // const origin = 5;
    let newNumbers = [...numbers];
    if (stickerBox === '') {
      for (let i = 0; i < origin; i++) {
        newNumbers.push(i);
      };
      setNumbers(newNumbers);
    };
  }, [])

  const [num, setNum] = useState(0);
  const [numbers, setNumbers] = useState([]);

  function notice(i, props) {
    console.log(i, props);
  };

  const listItem = numbers.map(function (number) {
    return <button className={`send_item_sticker_` + number} key={number} onClick={() => { notice(number, num) }}></button>
  });



  return (
    <React.Fragment>
      <div id='stickerBox'>{listItem}</div>
      <button onClick={() => { setNum(num + 1); console.log(num); }}>A</button>
      {/* <div className='container'>
        <div className='item' onClick={() => { setNum(num + 1); }}>첫 번째 페이지</div>
        <div className='item'>두 번째 페이지</div>
        <div className='item'>세 번째 페이지</div>
      </div>
      <div className='container2'>
        <div className='item2' onClick={() => { notice1(0) }}>첫 번째 페이지</div>
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
      </div> */}
    </React.Fragment>
  );
}

export default App;