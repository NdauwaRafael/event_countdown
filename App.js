import React from 'react';
// import {YellowBox} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventList from './EventList';
//
// YellowBox.ignoreWarnings([
//     'Warning: componentWillMount is deprecated',
//     'Warning: componentWillRecieveProps is deprecated'
// ]);
const AppNavigator = createStackNavigator({
    Home: {
        screen: EventList
    }
});
export default createAppContainer(AppNavigator);


