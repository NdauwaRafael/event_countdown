import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import EventCard from './EventCard'

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount(){
        const events = require('./db.json').events.map(e=>({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events});
    }
    render(){
        const {events} = this.state;
        return (
            <FlatList
            data={events}
            renderItem={({item})=><EventCard event={item} />}
            keyExtractor={item => item.id}
             />
        )
    }
}

export default EventList;