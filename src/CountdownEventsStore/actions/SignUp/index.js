/**
 * Created by Raphael Karanja on 2019-02-27.
 */
import {authRef, provider } from "../../../Utils/Auth/Firebase";
import {CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../../constants/ActionTypes";
import {loginUserFail} from "../Login";
export const createUserSuccess = (resp) => {
    console.log(resp)
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
};

export const createUserFail = (error) => {
    console.log(error)
    return {
        type: CREATE_USER_FAIL,
        error
    }
};

export const createUser = ({email, password}) => dispatch => {
    authRef.createUserWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(createUserSuccess(resp));
        })
        .catch((error) => {
            dispatch(createUserFail(error))});
}

