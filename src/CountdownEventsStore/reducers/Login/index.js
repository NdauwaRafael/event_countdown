/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import {FETCH_USER_SUCCESS} from '../../constants/ActionTypes'
export default (state = {}, action)=>{
    switch (action.type)  {
        case FETCH_USER_SUCCESS:
            return action.user;
        default:
            return state;
    }
}