import React, {Component} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import EventCard from './EventCard';
import {connect} from 'react-redux';
import * as eventsActions from '../../../CountdownEventsStore/actions/Events';
import {bindActionCreators} from "redux";


const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: this.props.events
        };
        this.handleAddEventPress = this.handleAddEventPress.bind(this)
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         events: this.props.events.map(evt => ({
        //             ...evt,
        //             timer: Date.now()
        //         }))
        //     })
        // }, 1000)

        this.props.actions.fetchEvents();
    };

    componentDidUpdate(){
        console.log('updated')
    }

    handleAddEventPress() {
        this.props.navigation.navigate('Form')
    }

    render() {
        const {events} = this.props;
        return [
            <FlatList
                key="eventList"
                style={styles.list}
                data={events}
                renderItem={({item}) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                key="addEventButton">
                <ActionButton.Item buttonColor='#9b59b6' title="Add New Event" onPress={this.handleAddEventPress}>
                    <Icon name="md-create" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
            </ActionButton>
        ]
    }
}

const setEventsTimer = (events)=>{
    setInterval(() => {
        return  events.map(evt => ({
            ...evt,
            timer: Date.now()
        }))
    }, 1000)
}

const mapStateToProps = (state, ownProps) => {
    return {
        events: setEventsTimer(state.events)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(eventsActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EventList);