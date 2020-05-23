import { USER_CREATED, USER_NOT_CREATED } from '../constants/constants';

const initialState = {
  successMsg: ""
}

function createUser(state = initialState, action) {
  switch (action.type) {
    case USER_CREATED:
      return {
        successMsg: action.successMsg
      }
    case USER_NOT_CREATED:
      return {
        error: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default createUser;