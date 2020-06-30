import * as statusActions from '../constants/actionTypes';
import login from '../service/login.service';

function loginFetch(email, password) {
  return dispatch => {
    login(email, password)
      .then(user => {
        dispatch(success(user));
      }).catch(error => {
        dispatch(failure(error.toString()));
      });
  }
}

function success(user) { return { type: statusActions.LOGIN_SUCCESS, user } };
function failure(error) { return { type: statusActions.LOGIN_FAILURE, error } };

export default loginFetch;