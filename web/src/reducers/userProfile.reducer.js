import { statusActions } from '../constants/constants';
const { GET_USER_SUCCESS, GET_USER_FAILURE } = statusActions;
const initialState = {
  user:""
}

function userProfile(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        user: action.successMsg.data.getUserByEmail
      }
    case GET_USER_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default userProfile;