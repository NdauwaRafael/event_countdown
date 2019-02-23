import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './App/Events/EventList';
import EventForm from './App/Events/EventForm';

const AppNavigator = createStackNavigator({
    List: {
        screen: EventList
    },
    Form: {
        screen: EventForm
    }
});
export default createAppContainer(AppNavigator);


