import * as statusActions from '../constants/actionTypes';

function getClinicDetails(state = [], action) {
    // console.log(`Get Clinic Details reducer:${JSON.stringify(action)}`);
    switch (action.type) {
        case statusActions.GET_CLINIC_DETAILS_SUCCESS:
            return {
                clinic_details: action.successMsg.data.getClinicById
            }
        case statusActions.GET_CLINIC_DETAILS_FAILURE:
            return {
                errorMsg: action.error,
                errorOccurred: true
            }
        case statusActions.CLINIC_DETAILS_RESET:
            return {
                clinic_details: null
            }
        default:
            return state
    }
}

export default getClinicDetails;