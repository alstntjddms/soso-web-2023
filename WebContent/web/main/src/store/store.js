import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {

        };
    };
    const newState = { ...state };
    return newState;
};

const store = createStore(reducer);
export default store;