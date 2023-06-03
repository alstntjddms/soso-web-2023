import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import './App.css';

function App() {
  const divRef = useRef();

  useEffect(() => {
    let inApp = /KAKAOTALK|Instagram|NAVER|Whale|Snapchat|Line|everytimeApp|SamsungBrowser/i.test(navigator.userAgent);
    alert(inApp);
    if (inApp === true) {
      alert('인앱 브라우저의 경우 오류가 발생할 수 있습니다.')
      window.location.href='intent://www.abc.com#Intent;scheme=http;package=com.android.chrome;end'
    };

    // if (isAndroid) {
    //   const url =
    //     "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

    //   window.location.replace(url);
    // } else if (isIOS) {
    //   window.location.replace("instagram://");

    //   setTimeout(() => {
    //     window.location.replace(
    //       "https://apps.apple.com/us/app/instagram/id389801252"
    //     );
    //   }, 10000);
    // } else {
    //   window.location.replace("https://instagram.com");
    // }
  }, []);

  async function capture() {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div);
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "image-download.png");
        }
      });
    } catch (error) {
      console.error("이미지 저장에 실패했습니다. 사유: ", error);
    };
  };

  return (
    <React.Fragment>
      <div ref={divRef} className='capture' onClick={capture}>
        <div className='inner'>
          <div className='sticker'></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;