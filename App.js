import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import EventList from './src/App/Containers/Events/EventList';
import EventForm from './src/App/Containers/Events/EventForm';
import AuthRegister from './src/App/Containers/Auth/Register';
import AuthLogin from './src/App/Containers/Auth/Login';
import Loading from './src/App/Containers/Auth/Loading';
import configureStore from './src/CountdownEventsStore';
import {loginUser} from './src/CountdownEventsStore/actions/Login'
import {Provider} from 'react-redux';

const store = configureStore();
store.dispatch(loginUser);

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
const AppComponent = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent/>
            </Provider>
        );
    }
}




