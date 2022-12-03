import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: 'null',
            userData: { 'nickname': 'null', 'openDate': null },
            letterData: [],
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
            isSendSignal: false
            
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

    return newState;
};
const store = createStore(reducer);
export default store;