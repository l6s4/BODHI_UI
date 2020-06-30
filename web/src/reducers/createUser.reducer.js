import * as statusActions from '../constants/actionTypes';

function createUser(state = [], action) {
  // console.log(`Create User action:${JSON.stringify(action)}`);
  switch (action.type) {
    case statusActions.CREATE_USER_SUCCESS:
      return {
        created_id: action.successMsg.data.createUser.email_id
      }
    case statusActions.CREATE_USER_FAILURE:
      return {
        error: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default createUser;