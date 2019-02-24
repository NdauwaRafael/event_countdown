import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './App/Pages/Events/EventList';
import EventForm from './App/Pages/Events/EventForm';
import AuthRegister from './App/Pages/Auth/Register';
import AuthLogin from './App/Pages/Auth/Login';
import Loading from 'App/Pages/Auth/Loading';

const AppNavigator = createStackNavigator({
    Loading: {
        screen: Loading
    },
    Login: {
        screen: AuthLogin
    },
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


