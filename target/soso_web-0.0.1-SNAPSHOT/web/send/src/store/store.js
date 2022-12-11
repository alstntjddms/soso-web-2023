import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            store: 'null'
 
        };
    };
    const newState = { ...state };

    if (action.type === 'CHANGE_STORE') {
        newState.store = action.data;
    };

    return newState;
};
const store = createStore(reducer);
export default store;