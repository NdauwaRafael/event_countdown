/**
 * Created by Raphael Karanja on 2019-02-27.
 */
import {authRef, provider } from "../../../Utils/Auth/Firebase";
import {CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../../constants/ActionTypes";
export const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
};


export const createUserFail = (error) => {
    return {
        type: CREATE_USER_FAIL,
        error
    }
};

export const createUser = ()=>dispatch=>{
    
}

