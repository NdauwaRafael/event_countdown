import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './src/App/Containers/Events/EventList';
import EventForm from './src/App/Containers/Events/EventForm';
import AuthRegister from './src/App/Containers/Auth/Register';
import AuthLogin from './src/App/Containers/Auth/Login';
import Loading from 'src/App/Containers/Auth/Loading';

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


