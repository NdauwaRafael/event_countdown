/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import { todosRef, authRef, provider } from "../../../Utils/Auth/Firebase";
import { FETCH_EVENTS_SUCCESS, FETCH_USER_SUCCESS } from "../../constants/ActionTypes";

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: user
            });
        } else {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: null
            });
        }
    });
};

export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(provider)
        .then(result => {})
        .catch(error => {
            console.log(error);
        });
};

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            console.log(error);
        });
};