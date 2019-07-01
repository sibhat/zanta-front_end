import axios from "../../../config/AxiosConfig";
import * as actionType from "./ActionTypes";
import {toast} from "react-toastify";
const getTokenHandler = token => ({
    type: actionType.USER_TOKEN_SUCCESS,
    payload: token
});
const getTokenFailHandler = error => ({
    type: actionType.USER_TOKEN_FAIL,
    payload: error
});
const getUserInfoHandler = token => ({
    type: actionType.USER_INFO_SUCCESS,
    payload: token
});
const getUserInfoFailHandler = error => ({
    type: actionType.USER_INFO_FAIL,
    payload: error
});


export const signIn = (data, cb) => dispatch => {
    dispatch({ type: actionType.USER_TOKEN_REQUEST });
    return axios.endpoints.signIn(data)
        .then(result => {
            dispatch(getTokenHandler(result.data));
            toast.success("Welcome back!", result.data.access_token);
            cb.push("/dashboard")

        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error_description || error.response.data.error : error.data;
             toast.error(`Oh Please try again!, \n${errormsg}`);
            dispatch(getTokenFailHandler(errormsg));
        });
};

export const register = (userType="client",data) => dispatch => {
    dispatch({ type: actionType.USER_TOKEN_REQUEST });
    return axios.endpoints.signUp(userType, data)
        .then(result => {
            dispatch(getTokenHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(getTokenFailHandler(errormsg));
        });
};
export const me = () => dispatch => {
    dispatch({ type: actionType.USER_INFO_REQUEST });
    return axios.endpoints.me()
        .then(result => {
            dispatch(getUserInfoHandler(result.data));
        })
        .catch(error => {
            let errormsg = error.response ? error.response.data.error : error.data;
            dispatch(getUserInfoFailHandler(errormsg));
        });
};
export const logout = () => dispatch => {
    dispatch({ type: actionType.USER_INFO_LOGOUT });
};

// let firstPtr = 0, secondPtr = 1, maxCon = -Infinity, currCon = 0;
// while(secondPtr < arr.length){
//   if (arr[secondPtr] === 1){

//   }
//   if(arr[firstPtr] === 1 && arr[secondPtr] === 1){
//     currCon ++;
//     maxCon = maxCon < currCon ? currCon : maxCon;
//   }


//   secondPtr ++;
// }