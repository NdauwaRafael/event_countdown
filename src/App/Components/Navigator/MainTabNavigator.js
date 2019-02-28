/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLogin from "../../Containers/Auth/Login";
import AuthRegister from "../../Containers/Auth/Register";
import EventList from "../../Containers/Events/EventList";
import EventForm from "../../Containers/Events/EventForm";

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

const CreateEventStack = createStackNavigator({
    CreateEvent: EventForm
});

CreateEventStack.navigationOptions = {
    tabBarLabel: 'Create Event',
    tabBarIcon: ({focus})=>(
        <Icon.Ionicons
            name={
                Platform.OS === 'ios'
                    ? `ios-create`
                    : 'md-create'
            }
            size={26}
        />
    )
}



export default createBottomTabNavigator({
    EventListStack,
    CreateEventStack
});