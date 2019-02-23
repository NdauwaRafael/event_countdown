import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './App/Events/EventList';
import EventForm from './App/Events/EventForm';
import AuthRegister from './App/Auth/Register';

const AppNavigator = createStackNavigator({
    Register: {
        screen: AuthRegister
    },
    List: {
        screen: EventList
    },
    Form: {
        screen: EventForm
    }
});
export default createAppContainer(AppNavigator);


