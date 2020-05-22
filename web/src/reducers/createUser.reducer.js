import { SUCCESS } from '../constants/constants';

const initialState = {
    email_id:""
}

function createUser(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        email_id: action.token
      }
    default:
      return state
  }
}

export default createUser;