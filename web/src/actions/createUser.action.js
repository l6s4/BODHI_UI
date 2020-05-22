import { SUCCESS, ERROR } from '../constants/constants';
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

function success(token) { return { type: SUCCESS, token } };
function failure(error) { return { type: ERROR, error } };

export default createUser;