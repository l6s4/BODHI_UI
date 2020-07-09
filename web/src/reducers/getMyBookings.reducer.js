import * as statusActions from '../constants/actionTypes';

function getMyBookings(state = [], action) {
    // console.log(`Get TimeSlot reducer:${JSON.stringify(action)}`);
    switch (action.type) {
        case statusActions.GET_MY_BOOKINGS_SUCCESS:
            return {
                bookings: action.successMsg.data.getMyBookings
            }
        case statusActions.GET_MY_BOOKINGS_FAILURE:
            return {
                errorMsg: action.error,
                errorOccurred: true
            }
        default:
            return state
    }
}

export default getMyBookings;