/**
 * Created by Raphael Karanja on 2019-02-24.
 */
import rootReducer from './RootReducer';
import {createStore, applyMiddleware} from "redux";
import reduxImmutableStatateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
const configureStore = (initialState)=>{
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStatateInvariant())
    );
};
export default configureStore;