import * as statusActions from '../constants/actionTypes';
import creatUser from '../service/createUser.service';
function createUser(userInfo) {
  return dispatch => {
    creatUser(userInfo)
      .then(response => {
        dispatch(success(response));
      }, error => {
        dispatch(failure(error.toString()));
      });
  }
}

function success(successMsg) { return { type: statusActions.CREATE_USER_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.CREATE_USER_FAILURE, error } };

export default createUser;