import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: 'null',
            ShareUserID: 'null',
            userData: { 'nickname': 'null', 'openDate': 0, "getLetter": 0, 'agreement': false },
            letterData: [
                {
                    "letterId": "0",
                    "letterContent": "나뭇잎 흔들리며 불어오는 바람 누구를 스치고 지나왔는지 어디에서 시작되었는지 모르는 바람이 나를 스쳐간다. 이 바람은 나를 지나쳐 또 다른 곳으로 향하겠지 너를 다시 또 만날 수 있을까",
                    "letterFont": "SpoqaHanSansNeo-Regular",
                    "letterFontAlign": "left",
                    "letterFontSize": "0.875rem",
                    "letterFontColor": "black",
                    "letterPaper": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_city.gif?raw=true')",
                    "letterWriter": "Angelo",
                    "letterIcon": "0",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "95",
                            "stickerY": "-50"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "60",
                            "stickerY": "10"
                        }
                    ]
                },
                {
                    "letterId": "1",
                    "letterContent": "핀 적도 없는 벚꽃이 어느새 발치에 흩날린다. 짤은 생 단 한번도 제대로 꽃핀적 없이 나의 생은 어느새 마지막이 되었구나",
                    "letterFont": "GyeonggiBatang",
                    "letterFontAlign": "right",
                    "letterFontSize": "0.875rem",
                    "letterFontColor": "orange",
                    "letterPaper": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_curce.gif?raw=true')",
                    "letterWriter": "Yuna",
                    "letterIcon": "1",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "1",
                            "stickerX": "-110",
                            "stickerY": "125"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "2",
                            "stickerX": "-70",
                            "stickerY": "61"
                        }
                    ]
                },
                {
                    "letterId": "2",
                    "letterContent": "토닥토닥 비가 내리더니 바람과 햇살아래 새싹이 방긋 웃네요. 내게 날아온 봄소식 어여쁜 그림엽서를 그대와 공유합니다.",
                    "letterFont": "NeoDunggeunmo",
                    "letterFontAlign": "center",
                    "letterFontSize": "0.8125rem",
                    "letterFontColor": "violet",
                    "letterPaper": "url('https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_space.gif?raw=true')",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "3",
                    "letterContent": "내안이 당신의 향기로 가득찼습니다.",
                    "letterFont": "Saying_tobe_strong",
                    "letterFontColor": "1",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "Yuna",
                    "letterIcon": "3",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "4",
                    "letterContent": "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너도 그렇다.",
                    "letterFont": "ROEHOE-CHAN",
                    "letterFontColor": "2",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "egoing",
                    "letterIcon": "4",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "5",
                    "letterContent": "하늘은 바다 끝없이 넓고 푸른 바다 구름은 조각배 바람이 사공이 되어 노를 젓는다.",
                    "letterFont": "SBAggroB",
                    "letterFontColor": "1",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "Yuna",
                    "letterIcon": "5",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "6",
                    "letterContent": "얼굴 하나야 손가락 둘로 푹 가리지만 보고싶은 마음 호수만 하니 눈 감을 수 밖에",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "egoing",
                    "letterIcon": "6",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "7",
                    "letterContent": "대나무처럼 안을 비우면서도 키가 크는 법을 배운다. 몸과 마음이 가벼워진다.",
                    "letterFont": "1",
                    "letterFontColor": "1",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "Yuna",
                    "letterIcon": "7",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "8",
                    "letterContent": "넌 정말 아름다운 꽃이다. 네가 없다면 이 세상에 꽃은 없다. 너만 정말 꽃이다.",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "egoing",
                    "letterIcon": "8",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "9",
                    "letterContent": "두통이 심할 때, 감기가 왔을 때, 소화가 안 될 때. 예로부터 내려오는 민간요법이 있다. 퇴근하기.",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "egoing",
                    "letterIcon": "9",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                },
                {
                    "letterId": "10",
                    "letterContent": "왜냐고 뭍는 네게 선뜻 대답하지 못하였다. 한참을 망설이다 나온 한 마디. 그냥.",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "https://github.com/Lee-Seung-Wook/Angelo-s_Library/blob/main/lib/paper/paper_white.gif?raw=true",
                    "letterWriter": "egoing",
                    "letterIcon": "10",
                    "letterOpenCheck": true,
                    "letterWriteDate": "1661837285640",
                    "sticker": [
                        {
                            "stickerId": "0",
                            "stickerIcon": "0",
                            "stickerX": "123",
                            "stickerY": "-5"
                        },
                        {
                            "stickerId": "1",
                            "stickerIcon": "1",
                            "stickerX": "-123",
                            "stickerY": "5"
                        }
                    ]
                }
            ],
            sendLetterData: [{}],
            isFirstInfo: false,
            isConditions: false,
            isIndividual: false,
            isMenu: false,
            isYesAgreement: false,
            isNoAgreement: false,
            isPopUpHowTo: false,
            isPopUpInfo: false,
            isInner: false,
            isMypage: false,
            isPlater: false,
            isHowto: false,
            isMembershipWithdrawal: false,
            isStory: false,
            isShare: false,
            isShareBt: false,
            isNamePage: false,
            ModalCreateUrl: false,
            isPopUpCopyLink: false,
            isYesName: true,
            isSendSignal: false,
            isLetter: false,
            isNotYetLetter: false,
            isLetterBlockConfirm: false,
            isRestart: false,
            isImagePreload: true,
            // send component
            openUserOpendate: 0,
            textLength: 0,
            text: '',
            stickerArray: [],
            stickerNumber: 0,
            isSendMain: false,
            isSendPopUp: true,
            isSendPopUpCancel: false,
            isSendPopUpCheck: false,
            isLetterOption: false,
            isFontFamily: false,
            isRange: false,
            isColor: false,
            isLetterPaper: false,
            isSticker: false,
            isPreLetterBox: false,
            author: '지구인',
            stamp: 0,
            isStamp: {
                a: true,
                b: false,
                c: false,
                d: false,
                e: false,
                f: false,
                g: false,
                h: false,
                i: false,
                j: false,
                k: false,
                l: false
            },
            isSendingPage: false,
            isSendingEnd: false
        };
    };
    const newState = { ...state };

    if (action.type === 'CHANGE_USERID') {
        newState.userID = action.data;
    };

    if (action.type === 'CHANGE_SHAREUSERID') {
        newState.ShareUserID = action.data;
    };

    if (action.type === 'CHANGE_ISFIRSTINFO') {
        newState.isFirstInfo = action.data;
    };

    if (action.type === 'CHANGE_ISCONDITIONS') {
        newState.isConditions = action.data;
    };

    if (action.type === 'CHANGE_ISINDIVIDUAL') {
        newState.isIndividual = action.data;
    };

    if (action.type === 'CHANGE_ISINDIVIDUAL') {
        newState.isIndividual = action.data;
    };

    if (action.type === 'CHANGE_ISMEMBERSHIPWITHDRAWAL') {
        newState.isMembershipWithdrawal = action.data;
    };

    if (action.type === 'CHANGE_ISMENU') {
        newState.isMenu = action.data;
    };

    if (action.type === 'CHANGE_ISYESAGREEMENT') {
        newState.isYesAgreement = action.data;
    };

    if (action.type === 'CHANGE_ISNOAGREEMENT') {
        newState.isNoAgreement = action.data;
    };

    if (action.type === 'CHANGE_ISPOPUPHOWTO') {
        newState.isPopUpHowTo = action.data;
    };

    if (action.type === 'CHANGE_ISPOPUPINFO') {
        newState.isPopUpInfo = action.data;
    };

    if (action.type === 'CHANGE_ISINNER') {
        newState.isInner = action.data;
    };

    if (action.type === 'CHANGE_ISMYPAGE') {
        newState.isMypage = action.data;
    };

    if (action.type === 'CHANGE_ISPLATER') {
        newState.isPlater = action.data;
    };

    if (action.type === 'CHANGE_ISHOWTO') {
        newState.isHowto = action.data;
    };

    if (action.type === 'CHANGE_ISSTORY') {
        newState.isStory = action.data;
    };

    if (action.type === 'CHANGE_ISSHARE') {
        newState.isShare = action.data;
    };

    if (action.type === 'CHANGE_ISSHAREBT') {
        newState.isShareBt = action.data;
    };

    if (action.type === 'CHANGE_ISNAMEPAGE') {
        newState.isNamePage = action.data;
    };

    if (action.type === 'CHANGE_MODALCREATEURL') {
        newState.ModalCreateUrl = action.data;
    };

    if (action.type === 'CHANGE_ISPOPUPCOPYLINK') {
        newState.isPopUpCopyLink = action.data;
    };

    if (action.type === 'CHANGE_ISYESNAME') {
        newState.isYesName = action.data;
    };

    if (action.type === 'CHANGE_ISSENDSIGNAL') {
        newState.isSendSignal = action.data;
    };

    if (action.type === 'CHANGE_USERNICKNAME') {
        newState.userData.nickname = action.data;
    };

    if (action.type === 'CHANGE_OPENDATE') {
        newState.userData.openDate = action.data;
    };

    if (action.type === 'CHANGE_GETLETTER') {
        newState.userData.getLetter = action.data;
    };

    if (action.type === 'CHANGE_AGREEMENT') {
        newState.userData.agreement = action.data;
    };

    if (action.type === 'CHANGE_ISLETTER') {
        newState.isLetter = action.data;
    };

    if (action.type === 'CHANGE_ISNOTYETLETTER') {
        newState.isNotYetLetter = action.data;
    };

    if (action.type === 'CHANGE_ISLETTERBLOCKCONFIRM') {
        newState.isLetterBlockConfirm = action.data;
    };

    if (action.type === 'CHANGE_ISRESTART') {
        newState.isRestart = action.data;
    };

    if (action.type === 'CHANGE_ISIMAGEPRELOAD') {
        newState.isImagePreload = action.data;
    };

    if (action.type === 'CHANGE_LETTERDATA') {
        newState.letterData = action.data;
    };
    // send component

    if (action.type === 'CHANGE_ISSENDMAIN') {
        newState.isSendMain = action.data;
    };

    if (action.type === 'CHANGE_TEXTLENGTH') {
        newState.textLength = action.data;
    };

    if (action.type === 'CHANGE_OPENUSEROPENDATE') {
        newState.openUserOpendate = action.data;
    };

    if (action.type === 'CHANGE_TEXT') {
        newState.text = action.data;
    };

    if (action.type === 'CHANGE_STICKER') {
        newState.stickerArray = action.data;
    };

    if (action.type === 'CHANGE_STICKER_NUMBER') {
        newState.stickerNumber = action.data;
    };

    if (action.type === 'CHANGE_ISSENDPOPUP') {
        newState.isSendPopUp = action.data;
    };

    if (action.type === 'CHANGE_ISSENDPOPUPCANCEL') {
        newState.isSendPopUpCancel = action.data;
    };

    if (action.type === 'CHANGE_ISSENDPOPUPCHECK') {
        newState.isSendPopUpCheck = action.data;
    };

    if (action.type === 'CHANGE_ISLETTEROPTION') {
        newState.isLetterOption = action.data;
    };

    if (action.type === 'CHANGE_ISFONTFAMILY') {
        newState.isFontFamily = action.data;
    };

    if (action.type === 'CHANGE_ISRANGE') {
        newState.isRange = action.data;
    };

    if (action.type === 'CHANGE_ISCOLOR') {
        newState.isColor = action.data;
    };

    if (action.type === 'CHANGE_ISLETTERPAPER') {
        newState.isLetterPaper = action.data;
    };

    if (action.type === 'CHANGE_ISSTICKER') {
        newState.isSticker = action.data;
    };

    if (action.type === 'CHANGE_ISPRELETTERBOX') {
        newState.isPreLetterBox = action.data;
    };

    if (action.type === 'CHANGE_AUTHOR') {
        newState.author = action.data;
    };

    if (action.type === 'CHANGE_STAMP') {
        newState.stamp = action.data;
    };

    if (action.type === 'CHANGE_ISSTAMP') {
        newState.isStamp = action.data;
    };

    if (action.type === 'CHANGE_ISSENDINGPAGE') {
        newState.isSendingPage = action.data;
    };

    if (action.type === 'CHANGE_ISSENDINGEND') {
        newState.isSendingEnd = action.data;
    };

    return newState;
};
const store = createStore(reducer);
export default store;