import { combineReducers } from 'redux';

import login from './login.reducer';
import createUser from './createUser.reducer';
import updateUser from './updateUser.reducer';
import userProfile from './userProfile.reducer';
import getClinicName from './getClinicName.reducer';
import getClinicDetails from './getClinicDetails.reducer';
import getSchedule from './getSchedule.reducer';
import createBooking from './createBooking.reducer';
import getMyBookings from './getMyBookings.reducer';
import * as statusActions from '../constants/actionTypes';

const appReducer = combineReducers({
  login,
  createUser,
  userProfile,
  updateUser,
  getClinicName,
  getClinicDetails,
  getSchedule,
  createBooking,
  getMyBookings,
  state: (state = {}) => state
})

const rootReducer = (state, action) => {
  if (action.type === statusActions.LOGOUT) {
    state = undefined
  }
  return appReducer(state, action);
};

export default rootReducer;
