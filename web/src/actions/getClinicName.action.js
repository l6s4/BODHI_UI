import * as statusActions from '../constants/actionTypes';
import getClinicName from '../service/getClinicName.service';

function getClinicNames(name) {
    return dispatch => {
        getClinicName(name)
            .then(response => {
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_CLINIC_NAMES_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_CLINIC_NAMES_FAILURE, error } };

export default getClinicNames;