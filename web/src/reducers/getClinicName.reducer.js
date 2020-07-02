import * as statusActions from '../constants/actionTypes';

function getClinicName(state = [], action) {
    // console.log(`Get Clinic Name reducer:${JSON.stringify(action)}`);
    switch (action.type) {
        case statusActions.GET_CLINIC_NAMES_SUCCESS:
            return {
                clinic_name: action.successMsg.data.getClinicByName
            }
        case statusActions.GET_CLINIC_NAMES_FAILURE:
            return {
                errorMsg: action.error,
                errorOccurred: true
            }
        default:
            return state
    }
}

export default getClinicName;