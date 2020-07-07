import * as statusActions from '../constants/actionTypes';
import creatBooking from '../service/createBooking.service';
function insertBooking(bookingInfo) {
  return dispatch => {
    creatBooking(bookingInfo)
      .then(response => {
        dispatch(success(response));
      }, error => {
        dispatch(failure(error.toString()));
      });
  }
}

function success(successMsg) { return { type: statusActions.CREATE_BOOKING_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.CREATE_BOOKING_FAILURE, error } };

export default insertBooking;