/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {FETCH_EVENTS_SUCCESS} from '../../constants/ActionTypes';
let initialState = {
    events: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_SUCCESS :
                let events = action.events;
                return [...events];
            break;
        default :
            return state;
    }
}