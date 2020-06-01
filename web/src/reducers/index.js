import { combineReducers } from 'redux';

import login from './login.reducer';
import createUser from './createUser.reducer';
import updateUser from './updateUser.reducer';
import userProfile from './userProfile.reducer';


const rootReducer = combineReducers({
  login,
  createUser,
  userProfile,
  updateUser
})

export default rootReducer;