import { combineReducers } from 'redux';

import login from './login.reducer';
import createUser from './createUser.reducer';
import userProfile from './userProfile.reducer';

const rootReducer = combineReducers({
  login,
  createUser,
  userProfile
})

export default rootReducer;