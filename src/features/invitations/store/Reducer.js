import * as actionTypes from "./ActionTypes";
const emptyInvitation = {
    type: null,
    "url": "",
    "location": "",
    "headline": "",
    "description": ""
};
const reset = {
    type: null,
    "url": "",
    "location": "",
    "headline": "",
    "description": "",
    pending: false,
};
const initialState = {
    invitation: emptyInvitation,
    pending: false,
    error: {}
};

export default (state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.INVITATION_REQUEST_SEND:
            return {...state,  error: {}, invitation: emptyInvitation,  pending: true};
        case actionTypes.INVITATION_REQUEST_SUCCESS:
            return  {...state, pending: false, error: {}, invitation: action.payload};
        case actionTypes.INVITATION_REQUEST_FAILED:
            return{...state, ...reset, error:  action.payload};
        default:
            return {...state}
    }
}