import * as statusActions from '../constants/actionTypes';

function createBooking(state = [], action) {
  // console.log(`Create Booking action:${JSON.stringify(action)}`);
  switch (action.type) {
    case statusActions.CREATE_BOOKING_SUCCESS:
      return {
        bookedStatus: action.successMsg.data.createBooking.bookedStatus
      }
    case statusActions.CREATE_BOOKING_FAILURE:
      return {
        error: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default createBooking;