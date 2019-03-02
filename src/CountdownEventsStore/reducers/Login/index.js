/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOG_OUT
} from '../../constants/ActionTypes';

let initialState = {
    loggingIn: false,
    loggedIn: false,
    signingIn: false,
    loggingOut: false,
    loginError: '',
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            const userId = action.user.uid;
            return {...state, loggedIn: true, userId};

        case(LOGIN_USER_FAILED):
            return {...state, loggedIn: false, loginError: action.error};

        case(LOG_OUT):
            return {loggingOut: true};

        case(CREATE_USER_SUCCESS):
            return {...state, user: action.user, loggedIn: true};

        case(CREATE_USER_FAIL):
            return {...state};

        default:
            return state;
    }
}