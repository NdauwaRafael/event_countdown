/**
 * Created by Raphael Karanja on 2019-03-03.
 */
import {authRef } from "../../../Utils/Auth/Firebase";
import {FETCH_EVENTS_SUCCESS } from "../../constants/ActionTypes";

export const fetchEventsSuccess = (resp) =>{
    return {
        type: FETCH_EVENTS_SUCCESS,
        events: resp
    }
}

export const fetchEvents = ()=>dispatch=>{
    const events = require('../../../../db.json').events.map(e => ({
        ...e,
        date: new Date(e.date)
    }));

    return dispatch(fetchEventsSuccess(events));
}