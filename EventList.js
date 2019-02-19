import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import EventCard from './EventCard';


const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
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
        }, 1000)

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
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
                onPress={this.handleAddEventPress}
                key="addEventButton">

            </ActionButton>
        ]
    }
}

export default EventList;