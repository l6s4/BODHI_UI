import { SUCCESS,ERROR } from '../constants/constants';

const initialState = {
  token: "",
}

function login(state = initialState, action) {
  console.log(`Action:${JSON.stringify(action)}`);

  switch (action.type) {
    case SUCCESS:
      return {
        token: action.token.token
      }
    case ERROR:
      return {
        error: action.error,
        errorOccurred:true
      }
    default:
      return state
  }
}

export default login;