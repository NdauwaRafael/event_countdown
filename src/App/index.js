/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import Navigator from './Components/Navigator/AppNavigator';
import {Provider} from 'react-redux';
import configureStore from "../CountdownEventsStore";


const store = configureStore();

export default class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}

