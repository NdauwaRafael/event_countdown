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

};

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(date)
    })
}
