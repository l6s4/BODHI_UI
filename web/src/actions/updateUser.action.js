import * as statusActions from '../constants/actionTypes';
import updatUser from '../service/updateUser.service';
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

function success(successMsg) { return { type: statusActions.UPDATE_USER_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.UPDATE_USER_FAILURE, error } };

export default updateUser;