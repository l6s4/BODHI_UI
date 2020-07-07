import * as statusActions from '../constants/actionTypes';

function getSchedule(state = [], action) {
    // console.log(`Get TimeSlot reducer:${JSON.stringify(action)}`);
    switch (action.type) {
        case statusActions.GET_SCHEDULE_SUCCESS:
            return {
                schedule: action.successMsg.data.getSchedule
            }
        case statusActions.GET_SCHEDULE_FAILURE:
            return {
                errorMsg: action.error,
                errorOccurred: true
            }
        default:
            return state
    }
}

export default getSchedule;