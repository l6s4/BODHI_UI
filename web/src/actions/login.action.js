import { statusActions } from '../constants/constants';
import login from '../service/login.service';
const { LOGIN_SUCCESS, LOGIN_FAILURE } = statusActions;

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

function success(user) { return { type: LOGIN_SUCCESS, user } };
function failure(error) { return { type: LOGIN_FAILURE, error } };

export default loginFetch;