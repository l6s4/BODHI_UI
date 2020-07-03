import * as statusActions from '../constants/actionTypes';
import getSchedule from '../service/getSchedule.service';

function getTimeSlot(clinic_id, given_date) {
    return dispatch => {
        getSchedule(clinic_id, given_date)
            .then(response => {
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_SCHEDULE_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_SCHEDULE_FAILURE, error } };

export default getTimeSlot;