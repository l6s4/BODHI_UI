import * as statusActions from '../constants/actionTypes';

function updateUser(state = [], action) {
  switch (action.type) {
    case statusActions.UPDATE_USER_SUCCESS:
      return {
        updated: action.successMsg.data.updateUser.updated
      }
    case statusActions.UPDATE_USER_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default updateUser;