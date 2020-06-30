import * as statusActions from '../constants/actionTypes';

function login(state = [], action) {
  // console.log(`login reducer:${JSON.stringify(action)}`);
  switch (action.type) {
    case statusActions.LOGIN_SUCCESS:
      return {
        token: action.user.data.login.token,
        loggedIn: true,
        loggedUser: action.user.data.login.email_id
      }
    case statusActions.LOGIN_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    case statusActions.LOGOUT:
      return {
        loggedIn: false
      }
    default:
      return state
  }
}

export default login;