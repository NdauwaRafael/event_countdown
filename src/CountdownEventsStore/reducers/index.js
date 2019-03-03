/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import {combineReducers} from 'redux';
import auth from './Login';
import events from  './Events'
const rootReducer = combineReducers({
    auth,
    events
});
export default rootReducer;