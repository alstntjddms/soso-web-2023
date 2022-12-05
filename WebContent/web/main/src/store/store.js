import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: 'null',
            userData: { 'nickname': 'null', 'openDate': 0 },
            letterData: [
                {
                    "letterId": "0",
                    "letterContent": "first letter",
                    "letterFont": "0",
                    "letterFontColor": "0",
                    "letterPaper": "0",
                    "letterWriter": "Angelo",
                    "letterIcon": "0",
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
                    "letterId": "1",
                    "letterContent": "second letter",
                    "letterFont": "1",
                    "letterFontColor": "1",
                    "letterPaper": "1",
                    "letterWriter": "Yuna",
                    "letterIcon": "1",
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
                    "letterId": "2",
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
                    "letterContent": "second letter",
                    "letterFont": "1",
                    "letterFontColor": "1",
                    "letterPaper": "1",
                    "letterWriter": "Yuna",
                    "letterIcon": "1",
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
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
                    "letterContent": "second letter",
                    "letterFont": "1",
                    "letterFontColor": "1",
                    "letterPaper": "1",
                    "letterWriter": "Yuna",
                    "letterIcon": "1",
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
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
                    "letterContent": "second letter",
                    "letterFont": "1",
                    "letterFontColor": "1",
                    "letterPaper": "1",
                    "letterWriter": "Yuna",
                    "letterIcon": "1",
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
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
                    "letterContent": "third letter",
                    "letterFont": "2",
                    "letterFontColor": "2",
                    "letterPaper": "2",
                    "letterWriter": "egoing",
                    "letterIcon": "2",
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
            isConditions: false,
            isIndividual: false,
            isMenu: false,
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
            isSendSignal: false,
            isLetter: false

        };
    };
    const newState = { ...state };

    if (action.type === 'CHANGE_USERID') {
        newState.userID = action.data;
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

    if (action.type === 'CHANGE_ISSENDSIGNAL') {
        newState.isSendSignal = action.data;
    };

    if (action.type === 'CHANGE_USERNICKNAME') {
        newState.userData.nickname = action.data;
    };

    if (action.type === 'CHANGE_OPENDATE') {
        newState.userData.openDate = action.data;
    };

    if (action.type === 'CHANGE_ISLETTER') {
        newState.isLetter = action.data;
    };

    return newState;
};
const store = createStore(reducer);
export default store;