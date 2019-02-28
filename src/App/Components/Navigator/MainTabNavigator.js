/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import EventList from "../../Containers/Events/EventList";

const EventListStack = createStackNavigator({
    Events: EventList,
});

EventListStack.navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name={
                Platform.OS === 'ios'
                    ? `ios-home`
                    : 'md-home'
            }
        size={26}>

        </Icon.Ionicons>
    ),
};




export default createBottomTabNavigator({
    EventListStack
});