import React, { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  function capture() {
    html2canvas(document.querySelector('.capture')).then(canvas => {
      onSavePic(canvas.toDataURL('image/png'), 'image-download.png');
    });
  };

  function onSavePic(url, fileName) {
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = url;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <React.Fragment>
      <div className='capture' onClick={capture}>
        <div className='inner'>
          <div className='sticker'></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;