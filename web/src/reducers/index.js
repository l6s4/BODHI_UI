import { combineReducers } from 'redux';

import login from './login.reducer';
import createUser from './createUser.reducer';

const rootReducer = combineReducers({
  login,
  createUser
})

export default rootReducer;