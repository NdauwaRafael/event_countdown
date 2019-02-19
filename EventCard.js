import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {formatDate, getCountdownParts} from './api';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 1,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 5,
        marginBottom: 5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'left'
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left'
    },
    counterContainer: {},
    counter: {},
    containerText: {},
    containerLabel: {}
});
export default EventCard = ({event})=> {
    const {
        days,
        hours,
        minutes,
        seconds
    } = getCountdownParts(event.date);
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.date}>{formatDate(event.date)}</Text>
                <Text style={styles.title}>{formatDate(event.title)}</Text>
            </View>

            <View style={styles.counterContainer}>
                <View style={styles.counter}>
                    <Text style={styles.containerText}>{days}</Text>
                    <Text style={styles.containerLabel}>Days</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.containerText}>{hours}</Text>
                    <Text style={styles.containerLabel}>Hours</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.containerText}>{minutes}</Text>
                    <Text style={styles.containerLabel}>Minutes</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.containerText}>{seconds}</Text>
                    <Text style={styles.containerLabel}>Seconds</Text>
                </View>
            </View>
        </View>
    )
};

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    })
}
