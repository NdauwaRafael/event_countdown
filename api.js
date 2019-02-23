import moment from 'moment';
import * as Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "<YOUR-API-KEY>",
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
};
Firebase.initializeApp(firebaseConfig);

export function formatDateTime(dateString) {
    const parsed = moment(new Date(dateString));
    if (!parsed.isValid()) {
        return dateString;
    }
    return parsed.format('H A on D MMM YYYY');
}

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if (!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('D MMM YYYY');
}

export function getCountdownParts(eventDate) {
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds'),
    };
}