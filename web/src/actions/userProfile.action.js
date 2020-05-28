import { statusActions } from '../constants/constants';
import userProfile from '../service/userProfile.service';
const { GET_USER_SUCCESS, GET_USER_FAILURE } = statusActions;

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

function success(successMsg) { return { type: GET_USER_SUCCESS, successMsg } };
function failure(error) { return { type: GET_USER_FAILURE, error } };

export default getUserProfile;