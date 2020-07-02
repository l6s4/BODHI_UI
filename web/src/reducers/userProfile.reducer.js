import * as statusActions from '../constants/actionTypes';

function userProfile(state = [], action) {
  switch (action.type) {
    case statusActions.GET_USER_SUCCESS:
      return {
        user: action.successMsg.data.getUserByEmail
      }
    case statusActions.GET_USER_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default userProfile;