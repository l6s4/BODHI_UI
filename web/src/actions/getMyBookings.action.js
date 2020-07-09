import * as statusActions from '../constants/actionTypes';
import getMyBookings from '../service/getMyBookings.service';

function viewMyBookings(email_id) {
    console.log(`bookings action:${email_id}`);
    return dispatch => {
        getMyBookings(email_id)
            .then(response => {
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_MY_BOOKINGS_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_MY_BOOKINGS_FAILURE, error } };

export default viewMyBookings;