import * as statusActions from '../constants/actionTypes';

function logout() {
    window.sessionStorage.removeItem('app_state');
    return dispatch => {
        dispatch({ type: statusActions.LOGOUT });
    }
};
export default logout;