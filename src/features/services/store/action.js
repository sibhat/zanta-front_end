import * as actionType from "./actionType";
import axios from "../../../config/AxiosConfig";

const getAllServicesHandler = services =>({
    type: actionType.SERVICES_REQUEST_SUCCESS,
    payload: services
});
const errorHandler = (error, type) =>({
    type,
    payload: error
});
export const getAllServices = () => dispatch => {
    return axios.endpoints.getAllServices()
        .then(result => {
            dispatch(getAllServicesHandler(result.data))
        })
        .catch(error => {
            error.response ?
                dispatch(errorHandler(error.data, actionType.SERVICES_REQUEST_FAIL)):
                dispatch(errorHandler(error))
        })
};
