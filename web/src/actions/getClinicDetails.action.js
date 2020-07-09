import * as statusActions from '../constants/actionTypes';
import getClinicDetails from '../service/getClinicDetails.service';

const getClinic = function (clinic_id) {
    return dispatch => {
        getClinicDetails(clinic_id)
            .then(response => {
                console.log(`Clinic Details response:${JSON.stringify(response)}`);
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

const resetClinic = function () {
    return dispatch => {
        dispatch({ type: statusActions.CLINIC_DETAILS_RESET });
    }
}

function success(successMsg) { return { type: statusActions.GET_CLINIC_DETAILS_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_CLINIC_DETAILS_FAILURE, error } };

export { getClinic, resetClinic };