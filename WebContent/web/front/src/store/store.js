import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: 1,
            userData: { nickname: 'null', openDate: null },
        };
    };
    const newState = { ...state };
    if (action.type === 'UPDATE') {
        newState.userID = action.data;
    };
    if (action.type === 'UPDATE_NICKNAME') {
        newState.userData.nickname = action.data;
    };
    if (action.type === 'UPDATE_OPENDATE') {
        newState.userData.openDate = action.data;
    };

    return newState
};

const store = createStore(reducer);

export default store;