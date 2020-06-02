import { statusActions } from '../constants/constants';
const { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } = statusActions;
const initialState = {
  created_id: "",
}

function createUser(state = initialState, action) {
  console.log(`Create User action:${JSON.stringify(action)}`);
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        created_id: action.successMsg.data.createUser.email_id
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