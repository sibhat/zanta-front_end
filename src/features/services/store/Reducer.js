import * as actionType from "./actionType";
const initialState ={
    services: [],
    errors: {},
    pending: false,
};
export default (state=initialState, action)=>{
    switch (action.type) {
        case actionType.SERVICES_REQUEST_FAIL:
        case actionType.SERVICE_BY_ID_REQUEST_FAIL:
            return {...state, errors: action.payload, pending: false,};
        case actionType.GET_SERVICES_REQUEST_SEND:
        case actionType.POST_SERVICES_REQUEST_SEND:
        case actionType.DELETE_SERVICES_REQUEST_SEND:
        case actionType.UPDATE_SERVICES_REQUEST_SEND:
            return {...state, errors: {}, pending: true };
        case actionType.SERVICES_REQUEST_SUCCESS:
            return {...state, errors: {}, pending: false, services: action.payload };
        case actionType.SERVICES__BY_ID_REQUEST_SUCCESS:
            let newServices = [...state.services].filter(service => service.id !== action.payload.id);
            return {...state, errors: {}, pending: false, services: [...newServices, action.payload] };
        default:
            return {...state}
    }
}
