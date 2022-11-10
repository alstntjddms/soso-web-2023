import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: null
        };
    };

    const newState = { ...state };

    if (action.type === 'ADD_USERID') {
        newState.userID = action.data;
    };

    return newState
};

const store = createStore(reducer);
export default store;