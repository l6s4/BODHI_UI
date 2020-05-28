import { statusActions } from '../constants/constants';
const { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } = statusActions;
const initialState = {
  successMsg: ""
}

function createUser(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        successMsg: action.successMsg
      }
    case CREATE_USER_FAILURE:
      return {
        error: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default createUser;