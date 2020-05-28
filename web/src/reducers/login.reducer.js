import { statusActions } from '../constants/constants';
const { LOGIN_SUCCESS, LOGIN_FAILURE } = statusActions;
const initialState = {
  token: "",
  loggedIn: false,
  loggedUser: "",
  errorMsg: "",
  errorOccurred: false
}

function login(state = initialState, action) {
  //console.log(`Action:${JSON.stringify(action)}`);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        token: action.user.data.login.token,
        loggedIn: true,
        loggedUser: action.user.data.login.email_id
      }
    case LOGIN_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default login;