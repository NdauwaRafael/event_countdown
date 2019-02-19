import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import EventCard from './EventCard'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
})

class EventList extends Component {
    state = {
        events: []
    };
    static navigationOptions = {
        title: 'Your Events',
    };

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                events: this.state.events.map(evt=>({
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
    }

    render() {
        const {events} = this.state;
        return (
            <FlatList
                style={styles.list}
                data={events}
                renderItem={({item}) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />
        )
    }
}

export default EventList;