import moment from 'moment';

const evnts_url = 'http://localhost:3004/events';

export function getEvents() {
    return fetch(evnts_url)
        .then(response => response.json())
        .then(events=> events.map(e => ({
            ...e,
            date: new Date(e.date)
        })));
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