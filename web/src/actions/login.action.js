import { SUCCESS, ERROR } from '../constants/constants';
import login from '../service/login.service';

function loginFetch(email, password) {
  return dispatch => {
    login(email, password)
      .then(response => {
        dispatch(success(response));
      }).catch(error => {
        dispatch(failure(error.toString()));
      });
  }
}

function success(token) { return { type: SUCCESS, token } };
function failure(error) { return { type: ERROR, error } };

export default loginFetch;