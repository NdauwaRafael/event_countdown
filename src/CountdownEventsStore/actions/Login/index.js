/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import {authRef } from "../../../Utils/Auth/Firebase";
import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from "../../constants/ActionTypes";


export const loginUserSuccess = (resp) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp,
    }
};

export const loginUserFail = (resp) => {
    return {
        type: LOGIN_USER_FAILED,
        user: resp,
    }
};

export const loginUser = ({email, password}) => dispatch => {
    authRef.signInWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => { dispatch(loginUserFail)});
};

export const checkAuthState = ()=>dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            return dispatch(loginUserSuccess(user));
        } else {
            dispatch(loginUserFail(false))
        }
    });
}

export const dispatchLogin = () => {
    return { type: LOGIN_USER_SUCCESS };
}