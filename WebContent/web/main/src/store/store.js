import { legacy_createStore as createStore } from "redux";

function reducer(state, action) {
    if (state === undefined) {
        return {
            userID: null,
            checkStory: true,
            userData: {'nickname' : 'null', 'openDate' : null},
            letterData: [],
            isConditions: false,
            isIndividual: false,


        };
    };
    const newState = { ...state };

    if (action.type === 'CHANGE_USERID') {
        newState.userID = action.data;
    };

    if (action.type === 'CHANGE_CHECKSTORY') {
        newState.checkStory = action.data;
    };
    
    if (action.type === 'CHANGE_ISCONDITIONS') {
        newState.isConditions = action.data;
    }; 

    if (action.type === 'CHANGE_ISINDIVIDUAL') {
        newState.isIndividual = action.data;
    }; 

    return newState;
};

const store = createStore(reducer);
export default store;