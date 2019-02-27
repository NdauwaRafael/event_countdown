/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import {authRef, provider } from "../../../Utils/Auth/Firebase";
import {CREATE_USER_SUCCESS, CREATE_USER_FAIL,  LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from "../../constants/ActionTypes";


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

export const loginUser = () => dispatch => {
    authRef.signInWithEmailAndPassword(email, pass)
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