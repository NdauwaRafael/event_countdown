import React, {Component} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import EventCard from './EventCard';
import {getEvents} from './api'


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
            events: []
        };
        this.handleAddEventPress = this.handleAddEventPress.bind(this)
    }

    static navigationOptions = {
        title: 'Your Events',
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            })
            getEvents()
        }, 1000)

        const events = getEvents()
        this.setState({events});
    };

    handleAddEventPress() {
        this.props.navigation.navigate('Form')
    }

    render() {
        const {events} = this.state;
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

export default EventList;