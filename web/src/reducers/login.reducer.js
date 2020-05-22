import { SUCCESS } from '../constants/constants';

const initialState = {
  token: "",
}

function login(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        token: action.token
      }
    default:
      return state
  }
}

export default login;