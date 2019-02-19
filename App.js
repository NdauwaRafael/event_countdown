import React from 'react';
import {YellowBox} from 'react-native';
import {StackNavigator} from 'react-navigation';
import EventList from './EventList';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillRecieveProps is deprecated'
]);
export default class App extends React.Component {
    render() {
        return (
            <EventList/>
        );
    }
}


