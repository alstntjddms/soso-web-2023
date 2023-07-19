import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: null,
            ShareUserID: 'null',
            userData: { 'nickname': 'null', 'openDate': 875286000000, "getLetter": 0, 'agreement': false },
            letterData: [],
            sendLetterData: [{}],
            isFirstInfo: false,
            isSecondInfo: false,
            isThirdInfo: false,
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
            isPopUpKakaoAgreement: false ,
            isYesName: true,
            isSendSignal: false,
            isLetter: false,
            isNotYetLetter: false,
            isLetterBlockConfirm: false,
            isRestart: false,
            isPlanetClosed: false,
            isImagePreload: true,
            // send component
            textLength: 0,
            text: '',
            stickerArray: [],
            stickerNumber: 0,
            isSendMain: false,
            isSendPopUp: false,
            isSendPopUpCancel: false,
            isSendPopUpCheck: false,
            isLetterOption: false,
            isFontFamily: false,
            isRange: false,
            isColor: false,
            isLetterPaper: false,
            isSticker: false,
            isPreLetterBox: false,
            author: '익명',
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

    if (action.type === 'CHANGE_ISSECONDINFO') {
        newState.isSecondInfo = action.data;
    };

    if (action.type === 'CHANGE_ISTHIRDINFO') {
        newState.isThirdInfo = action.data;
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
    
    if (action.type === 'CHANGE_ISPOPUPKAKAOAGREEMENT') {
        newState.isPopUpKakaoAgreement = action.data;
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

    if (action.type === 'CHANGE_ISPLANETCLOSED') {
        newState.isPlanetClosed = action.data;
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