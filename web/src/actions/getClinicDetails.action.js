import * as statusActions from '../constants/actionTypes';
import getClinicDetails from '../service/getClinicDetails.service';

function getClinic(clinic_id) {
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

function success(successMsg) { return { type: statusActions.GET_CLINIC_DETAILS_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_CLINIC_DETAILS_FAILURE, error } };

export default getClinic;