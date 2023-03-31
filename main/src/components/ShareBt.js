import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ShareBt.css';

function ShareBt() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    const isShare = useSelector((state) => state.isShare);
    const isShareBt = useSelector((state) => state.isShareBt);
    const userID = useSelector((state) => state.userID);
    const ShareUserID = useSelector((state) => state.ShareUserID);
    const isPopUpCopyLink = useSelector((state) => state.isPopUpCopyLink);

    useEffect(() => {
        if (userData.openDate !== 0) {
            dispatch({ type: 'CHANGE_ISSHARE', data: !isShare });
        };
    }, [dispatch, userData.openDate]);

    const shareBasicURL = 'https://angelo-s-library-2.netlify.app/send?userID=' + ShareUserID;
    const basicURL = 'https://angelo-s-library-2.netlify.app/main';
    const image_share = 'https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/logo/logo.png?raw=true';
    const title = 'PL@TER - 기다려지는 소식';

    // 카카오톡 공유 기능
    function kakaoShare() {
        const KakaoJS = process.env.REACT_APP_JAVASCRIPT_KEY
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(KakaoJS);
        };
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: 'PL@TER',
                description: 'PL@TER-기다려지는 소식',
                imageUrl: image_share,
                link: {
                    mobileWebUrl: shareBasicURL,
                    webUrl: shareBasicURL,
                },
            },
            buttons: [
                {
                    title: '편지 보내기',
                    link: {
                        mobileWebUrl: shareBasicURL,
                        webUrl: shareBasicURL,
                    },
                },
                {
                    title: '행성 만들기',
                    link: {
                        mobileWebUrl: basicURL,
                        webUrl: basicURL,
                    },
                },
            ],
            installTalk: true,
        });
    };

    // 트위터 공유 기능
    function shareTwitter() {
        let url = encodeURIComponent(shareBasicURL);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '소소한 프로젝트', 'width=400, height=400');
    };

    // 페이스북 공유 기능
    function shareFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u='
            + encodeURIComponent(shareBasicURL)
            + '&t=' + encodeURIComponent(title),
            'facebooksharedialog',
            'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=400, width=400');
    };

    // 공유 가능 사용자 아이디 발급 기능
    function RequestShareUserID(userID) {
        fetch('https://plater.kr/api/member/userid/' + userID, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'CHANGE_SHAREUSERID', data: String(data) });
            })
            .catch((error) => {
                alert('공유 가능한 사용자 주소를 정상적으로 받아오지 못했습니다. 공유 버튼을 다시 눌러주세요.');
            });
    };

    // 공유 URL 복사 기능
    function urlCopy() {
        let Dummy_Tag = document.createElement("input");
        let Current_URL = 'https://angelo-s-library-2.netlify.app/send?userID=' + ShareUserID;
        document.body.appendChild(Dummy_Tag);
        Dummy_Tag.value = Current_URL;
        Dummy_Tag.select();
        document.execCommand("copy");
        document.body.removeChild(Dummy_Tag);
        dispatch({ type: 'CHANGE_ISPOPUPCOPYLINK', data: !isPopUpCopyLink });
    };

    return (
        <React.Fragment>
            <div className={isShare ? 'shareButton_outContainer_active' : 'shareButton_outContainer'} onClick={() => {
                RequestShareUserID(userID);
                dispatch({ type: 'CHANGE_ISSHAREBT', data: !isShareBt });
            }}>
                <img className='shareButton_share' alt='share' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/share.png?raw=true'></img>
            </div>
            <div className='shareButton_innerContainer'>
                <img className={isShareBt ? 'shareButton_share_btn_url_active' : 'shareButton_share_btn'} alt='url' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/copy_link.png?raw=true' onClick={urlCopy}></img>
                <img className={isShareBt ? 'shareButton_share_btn_kakao_active' : 'shareButton_share_btn'} alt='kakao' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/kakao.png?raw=true' onClick={kakaoShare}></img>
                <img className={isShareBt ? 'shareButton_share_btn_facebook_active' : 'shareButton_share_btn'} alt='facebook' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/facebook.png?raw=true' onClick={shareFacebook}></img>
                <img className={isShareBt ? 'shareButton_share_btn_twitter_active' : 'shareButton_share_btn'} alt='twitter' src='https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/icon/twitter.png?raw=true' onClick={shareTwitter}></img>
            </div>
        </React.Fragment>
    );
};

export default ShareBt;