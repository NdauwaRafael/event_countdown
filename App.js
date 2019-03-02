import React from 'react';
import {Provider} from 'react-redux';
import configureStore from "./src/CountdownEventsStore";
const store = configureStore();
import AppRoot from './src/App/index';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoot/>
            </Provider>
        );
    }
}




