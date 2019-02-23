import moment from 'moment';

require('./Config/Firebase')

export function loginUser(email, password) {
    try {

    }
    catch (error) {
        console.log(error.toString())
    }
}

export function signUpUser(email, password) {
    try {
        if (password.length < 6) {
            console.log('please enter password longer than 6 characters');
        }
        Firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch (error) {
        console.log(error.toString());
        return false;
    }
}
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