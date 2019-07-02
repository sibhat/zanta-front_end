import * as actionType from "./ActionTypes";
import axios from "../../../config/AxiosConfig";

export const createInvitation = (data, history) => dispatch =>{
    dispatch({type: actionType.INVITATION_REQUEST_SEND});
    axios.endpoints.createInvitation(data)
        .then(result => {
            dispatch({
                type: actionType.INVITATION_REQUEST_SUCCESS,
                payload: result.data
            });
        }).then(()=>{
            history.push('/dashboard');
        })
        .catch(error => {
            console.log("handle me invitation action 14", error)
        })
};