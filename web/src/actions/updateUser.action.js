import { statusActions } from '../constants/constants';
import updatUser from '../service/updateUser.service';
const { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } = statusActions;
function updateUser(userInfo) {
  return dispatch => {
    updatUser(userInfo)
      .then(response => {
        dispatch(success(response));
      }, error => {
        dispatch(failure(error.toString()));
      });
  }
}

function success(successMsg) { return { type: UPDATE_USER_SUCCESS, successMsg } };
function failure(error) { return { type: UPDATE_USER_FAILURE, error } };

export default updateUser;