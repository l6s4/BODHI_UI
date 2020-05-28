import { statusActions } from '../constants/constants';
import creatUser from '../service/createUser.service';
const { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } = statusActions;
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

function success(successMsg) { return { type: CREATE_USER_SUCCESS, successMsg } };
function failure(error) { return { type: CREATE_USER_FAILURE, error } };

export default createUser;