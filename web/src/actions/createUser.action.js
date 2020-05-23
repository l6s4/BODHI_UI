import { USER_CREATED,USER_NOT_CREATED } from '../constants/constants';
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

function success(successMsg) { return { type: USER_CREATED, successMsg } };
function failure(error) { return { type: USER_NOT_CREATED, error } };

export default createUser;