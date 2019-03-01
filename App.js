import React from 'react';
import {Provider} from 'react-redux';
import AppRoot from './src/App/index';
import configureStore from "./src/CountdownEventsStore";
const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoot/>
            </Provider>
        );
    }
}




