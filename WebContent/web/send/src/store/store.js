import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: null,
            textLength: 0,
            text: '',
            stickerArray: [],
            stickerNumber: 0
        };
    };
    const newState = { ...state };

    if (action.type === 'ADD_USERID') {
        newState.userID = action.data;
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

    return newState;
};
const store = createStore(reducer);
export default store;