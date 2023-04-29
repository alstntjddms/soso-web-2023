import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [stickerArray, setStickerArray] = useState([]);
  const stickerNUM = 5;

  function notice(props) {
    alert(props);
  };

  useEffect(() => {
    let stickerBox = document.querySelector('.stickerBox').innerHTML;
    if (stickerBox === '') {
      let newStickerArray = [...stickerArray];
      for (let i = 0; i < stickerNUM; i++) {
        newStickerArray.push(React.Children.toArray(<button key={i} className={`item_${i}`} onClick={() => { notice(i) }}></button>));
      };
      setStickerArray(newStickerArray);
    };
  }, [])

  return (
    <React.Fragment>
      <div className='stickerBox'>{stickerArray}</div>
    </React.Fragment>
  );
}

export default App;