import { combineReducers } from 'redux';

import login from './login.reducer';
import createUser from './createUser.reducer';
import updateUser from './updateUser.reducer';
import userProfile from './userProfile.reducer';
import * as statusActions from '../constants/actionTypes';

const appReducer = combineReducers({
  login,
  createUser,
  userProfile,
  updateUser,
  state: (state = {}) => state
})

const rootReducer = (state, action) => {
  if (action.type === statusActions.LOGOUT) {
    state = undefined
  }
  return appReducer(state, action);
};

export default rootReducer;
