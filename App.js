import React from 'react';
import {Provider} from 'react-redux';
import AppRoot from './src/App/index';
import configureStore from "./src/CountdownEventsStore";
import {checkAuthState} from "./src/CountdownEventsStore/actions/Login";
const store = configureStore();
store.dispatch(checkAuthState);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoot/>
            </Provider>
        );
    }
}




