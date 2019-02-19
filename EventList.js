import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount(){
        const events = require('./db.json').events;
        this.setState({events});
    }
    render(){
        const {events} = this.state;
        return (
            <FlatList
            data={events}
            renderItem={({item})=><Text>{item.title}</Text>}
            keyExtractor={item => item.id}
             />
        )
    }
}

export default EventList;