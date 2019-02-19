import React from 'react';
// import {YellowBox} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './EventList';
import EventForm from './EventForm';
//
// YellowBox.ignoreWarnings([
//     'Warning: componentWillMount is deprecated',
//     'Warning: componentWillRecieveProps is deprecated'
// ]);
const AppNavigator = createStackNavigator({
    List: {
        screen: EventList
    },
    Form: {
        screen: EventForm
    }
});
export default createAppContainer(AppNavigator);


