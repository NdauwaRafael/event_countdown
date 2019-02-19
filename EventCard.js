import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {formatDate, getCountdownParts} from './api';

const styles = StyleSheet.create({
    
})
export default EventCard = ({event})=> { 
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
                    <Text style={styles.containerText}>{minute}</Text>
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
