import * as statusActions from '../constants/actionTypes';
import userProfile from '../service/userProfile.service';

function getUserProfile(email_id) {
    return dispatch => {
        userProfile(email_id)
            .then(response => {
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_USER_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_USER_FAILURE, error } };

export default getUserProfile;