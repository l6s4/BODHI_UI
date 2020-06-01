import { statusActions } from '../constants/constants';
const { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } = statusActions;
const initialState = {
  updated: false
}

function updateUser(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        updated: action.successMsg.data.updateUser.updated
      }
    case UPDATE_USER_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default updateUser;