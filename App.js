import React, {Component} from 'react';
import configureStore from './src/CountdownEventsStore';
import {checkAuthState} from './src/CountdownEventsStore/actions/Login';
import {Provider} from 'react-redux';
import Navigator from './src/App/Components/Navigator/AppNavigator';


const store = configureStore();
store.dispatch(checkAuthState);



export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}




